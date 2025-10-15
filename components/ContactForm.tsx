"use client";

import React, { useState, useEffect } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    subject: "",
    message: "",
    name: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [kvkkConsent, setKvkkConsent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKvkkConsent(e.target.checked);
  };

  // Başarısız göndermeler kontrolü
  useEffect(() => {
    const checkFailedSubmissions = async () => {
      const failedSubmission = localStorage.getItem("failedFormSubmission");
      if (failedSubmission) {
        try {
          const data = JSON.parse(failedSubmission);

          // 24 saatten eski ise silinecekk
          const submissionTime = new Date(data.timestamp);
          const now = new Date();
          const hoursDiff =
            (now.getTime() - submissionTime.getTime()) / (1000 * 60 * 60);

          if (hoursDiff > 24) {
            localStorage.removeItem("failedFormSubmission");
            return;
          }

          // Retry count kontrolü (maksimum 3 deneme)
          if (data.retryCount >= 3) {
            localStorage.removeItem("failedFormSubmission");
            return;
          }

          if (process.env.NODE_ENV === "development") {
            console.log("Başarısız gönderim bulundu, tekrar deneniyor:", data);
          }

          const apiUrl = process.env.NEXT_PUBLIC_API_URL;
          const response = await fetch(`${apiUrl}/api/send`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              subject: data.subject,
              message: data.message,
              name: data.name,
              phone: data.phone,
            }),
            mode: "cors",
          });

          if (response.ok) {
            if (process.env.NODE_ENV === "development") {
              console.log("Başarısız gönderim başarıyla tamamlandı");
            }
            localStorage.removeItem("failedFormSubmission");
          } else {
            // Retry count artırma olayı
            const updatedData = {
              ...data,
              retryCount: (data.retryCount || 0) + 1,
            };
            localStorage.setItem(
              "failedFormSubmission",
              JSON.stringify(updatedData)
            );

            if (process.env.NODE_ENV === "development") {
              console.log(
                "Tekrar deneme başarısız, retry count:",
                updatedData.retryCount
              );
            }
          }
        } catch (error) {
          if (process.env.NODE_ENV === "development") {
            console.warn("Başarısız gönderim tekrar deneme hatası:", error);
          }
        }
      }
    };

    checkFailedSubmissions();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    // anında başarılı gönderim mesajı gelcek
    setStatus(
      "Talebiniz başarıyla iletildi. En kısa sürede size dönüş yapacağız."
    );

    // Formu sıfırlıanıyor burda
    setFormData({ subject: "", message: "", name: "", phone: "" });
    setKvkkConsent(false);
    setLoading(false);

    // backende iletiyoruz burda
    const sendToBackend = async () => {
      try {
        const apiUrl = "https://aws-ses.onrender.com";

        // AbortController ile timeout ekliyorm
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);

        const response = await fetch(`${apiUrl}/api/send`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
          signal: controller.signal,
          mode: "cors", // CORS modu
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          if (process.env.NODE_ENV === "development") {
            console.warn(
              "Backend gönderimi başarısız:",
              response.status,
              response.statusText
            );
          }
          // Başarısız olursa localStorage'a kaydediyoruz
          const failedSubmission = {
            ...formData,
            timestamp: new Date().toISOString(),
            retryCount: 0,
          };
          localStorage.setItem(
            "failedFormSubmission",
            JSON.stringify(failedSubmission)
          );
        } else {
          if (process.env.NODE_ENV === "development") {
            console.log("Backend'e başarıyla gönderildi");
          }
          // Başarılı olursa localStorage'dan temizliyoruz
          localStorage.removeItem("failedFormSubmission");
        }
      } catch (error) {
        // Sadece development modunda detaylı log
        if (process.env.NODE_ENV === "development") {
          if (error instanceof Error) {
            if (error.name === "AbortError") {
              console.warn("İstek zaman aşımına uğradı (10 saniye)");
            } else if (
              error.name === "TypeError" &&
              error.message.includes("fetch")
            ) {
              console.warn("Network hatası - sunucuya ulaşılamıyor");
            } else {
              console.warn("Form gönderimi hatası:", error.message);
            }
          } else {
            console.warn("Bilinmeyen hata:", error);
          }
        }

        // Hata durumunda localStorage'a kaydet
        const failedSubmission = {
          ...formData,
          timestamp: new Date().toISOString(),
          retryCount: 0,
        };
        localStorage.setItem(
          "failedFormSubmission",
          JSON.stringify(failedSubmission)
        );
      }
    };

    sendToBackend();
  };
  // Arka planda belirli aralıklarla başarısız gönderimleri dene
useEffect(() => {
  const retryInterval = setInterval(async () => {
    const failedSubmission = localStorage.getItem("failedFormSubmission");
    if (failedSubmission) {
      try {
        const data = JSON.parse(failedSubmission);
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;

        const response = await fetch(`${apiUrl}/api/send`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          console.log("Uyuyan backend kalktı, form başarıyla gönderildi 🚀");
          localStorage.removeItem("failedFormSubmission");
        }
      } catch (err) {
        // sessizce devam etsin
      }
    }
  }, 15000); // her 15 saniyede bir dene

  return () => clearInterval(retryInterval);
}, []);


  return (
    <Card className="p-4 shadow-sm">
      <Card.Title className="text-center mb-4">Talep Formu</Card.Title>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formSubject">
          <Form.Label>Konu</Form.Label>
          <Form.Control
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            style={{ height: "35px" }}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Mesaj</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={{ height: "35px" }}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>İsminiz</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ height: "35px" }}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3 row" controlId="formPhone">
          <Form.Label>Telefon Numaranız</Form.Label>
          <Form.Control
            type="number"
            name="phone"
            value={formData.phone}
            onChange={(e) => {
              let value = e.target.value;

              //max 10 karakter girişi için
              if (value.length > 10) {
                value = value.slice(0, 10);
              }

              // başındaki sıfırı silmek için
              if (value.startsWith("0")) {
                value = value.substring(1);
              }
              setFormData({ ...formData, phone: value });
            }}
            style={{ height: "35px" }}
            maxLength={10}
            inputMode="numeric"
            placeholder="5xxxxxxxxx"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formKVKK">
          <Form.Label>KVKK Aydınlatma Metni</Form.Label>
          <div
            style={{
              maxHeight: "180px",
              overflowY: "auto",
              border: "1px solid #ddd",
              padding: "15px",
              borderRadius: "5px",
              backgroundColor: "#f9f9f9",
              fontSize: "0.9rem",
              lineHeight: "1.5",
            }}
          >
            Kişisel Verileri Koruma Kurumundan: AYDINLATMA YÜKÜMLÜLÜĞÜNÜN YERİNE
            GETİRİLMESİNDE UYULACAK USUL VE ESASLAR HAKKINDA TEBLİĞ Amaç ve
            kapsam MADDE 1 – (1) Bu Tebliğin amacı, 24/3/2016 tarihli ve 6698
            sayılı Kişisel Verilerin Korunması Kanununun 10 uncu maddesi
            uyarınca veri sorumluları veya yetkilendirdiği kişilerce yerine
            getirilmesi gereken aydınlatma yükümlülüğü kapsamında uyulacak usul
            ve esasları belirlemektir. Dayanak MADDE 2 – (1) Bu Tebliğ, 6698
            sayılı Kişisel Verilerin Korunması Kanununun 22 nci maddesinin
            birinci fıkrasının (e) ve (g) bentlerine dayanılarak hazırlanmıştır.
            Tanımlar MADDE 3 – (1) Bu Tebliğde geçen; a) Alıcı grubu: Veri
            sorumlusu tarafından kişisel verilerin aktarıldığı gerçek veya tüzel
            kişi kategorisini, b) İlgili kişi: Kişisel verisi işlenen gerçek
            kişiyi, c) Kanun: 24/3/2016 tarihli ve 6698 sayılı Kişisel Verilerin
            Korunması Kanununu, ç) Kurul: Kişisel Verileri Koruma Kurulunu, d)
            Kurum: Kişisel Verileri Koruma Kurumunu, e) Sicil: Başkanlık
            tarafından tutulan Veri Sorumluları Sicilini, f) Veri kayıt sistemi:
            Tamamen veya kısmen otomatik olan ya da herhangi bir veri kayıt
            sisteminin parçası olmak kaydıyla otomatik olmayan yollarla işlenen
            kişisel verilerin bulunduğu her türlü ortamı, g) Veri sorumlusu:
            Kişisel verilerin işleme amaçlarını ve vasıtalarını belirleyen, veri
            kayıt sisteminin kurulmasından ve yönetilmesinden sorumlu olan
            gerçek veya tüzel kişiyi, ğ) Veri sorumlusu temsilcisi: Türkiye’de
            yerleşik olmayan veri sorumlularını 30/12/2017 tarihli ve 30286
            sayılı Resmî Gazete’de yayınlanan Veri Sorumluları Sicili Hakkında
            Yönetmeliğin 11 inci maddesinin ikinci fıkrasında belirtilen
            konularda asgari temsile yetkili Türkiye’de yerleşik tüzel kişi ya
            da Türkiye Cumhuriyeti vatandaşı gerçek kişiyi ifade eder. (2) Bu
            Tebliğde yer almayan tanımlar için Kanundaki tanımlar geçerli
            olacaktır. Aydınlatma yükümlülüğünün kapsamı MADDE 4 – (1) Kanunun
            10 uncu maddesine göre; kişisel verilerin elde edilmesi sırasında
            veri sorumluları veya yetkilendirdiği kişilerce, ilgili kişilerin
            bilgilendirilmesi gerekmektedir. Bu yükümlülük yerine getirilirken
            veri sorumluları veya yetkilendirdiği kişilerce yapılacak
            bilgilendirmenin asgari olarak aşağıdaki konuları içermesi
            gerekmektedir: a) Veri sorumlusunun ve varsa temsilcisinin kimliği,
            b) Kişisel verilerin hangi amaçla işleneceği, c) Kişisel verilerin
            kimlere ve hangi amaçla aktarılabileceği, ç) Kişisel veri toplamanın
            yöntemi ve hukuki sebebi, d) İlgili kişinin Kanunun 11 inci
            maddesinde sayılan diğer hakları. Usul ve esaslar MADDE 5 – (1) Veri
            sorumlusu ya da yetkilendirdiği kişi tarafından sözlü, yazılı, ses
            kaydı, çağrı merkezi gibi fiziksel veya elektronik ortam kullanılmak
            suretiyle aydınlatma yükümlülüğünün yerine getirilmesi esnasında
            aşağıda sayılan usul ve esaslara uyulması gerekmektedir: a) İlgili
            kişinin açık rızasına veya Kanundaki diğer işleme şartlarına bağlı
            olarak kişisel veri işlendiği her durumda aydınlatma yükümlülüğü
            yerine getirilmelidir. b) Kişisel veri işleme amacı değiştiğinde,
            veri işleme faaliyetinden önce bu amaç için aydınlatma yükümlülüğü
            ayrıca yerine getirilmelidir. c) Veri sorumlusunun farklı
            birimlerinde kişisel veriler farklı amaçlarla işleniyorsa,
            aydınlatma yükümlülüğü her bir birim nezdinde ayrıca yerine
            getirilmelidir. ç) Sicile kayıt yükümlülüğünün bulunması durumunda,
            aydınlatma yükümlülüğü çerçevesinde ilgili kişiye verilecek
            bilgiler, Sicile açıklanan bilgilerle uyumlu olmalıdır. d)
            Aydınlatma yükümlülüğünün yerine getirilmesi, ilgili kişinin
            talebine bağlı değildir. e) Aydınlatma yükümlülüğünün yerine
            getirildiğinin ispatı veri sorumlusuna aittir. f) Kişisel veri
            işleme faaliyetinin açık rıza şartına dayalı olarak
            gerçekleştirilmesi halinde, aydınlatma yükümlülüğü ve açık rızanın
            alınması işlemlerinin ayrı ayrı yerine getirilmesi gerekmektedir. g)
            Aydınlatma yükümlülüğü kapsamında açıklanacak kişisel veri işleme
            amacının belirli, açık ve meşru olması gerekir. Aydınlatma
            yükümlülüğü yerine getirilirken, genel nitelikte ve muğlak ifadelere
            yer verilmemelidir. Gündeme gelmesi muhtemel başka amaçlar için
            kişisel verilerin işlenebileceği kanaatini uyandıran ifadeler
            kullanılmamalıdır. ğ) Aydınlatma yükümlülüğü kapsamında ilgili
            kişiye yapılacak bildirimin anlaşılır, açık ve sade bir dil
            kullanılarak gerçekleştirilmesi gerekmektedir. h) Kanunun 10 uncu
            maddesinin birinci fıkrasının (ç) bendinde yer alan “hukuki sebep”
            ten kasıt, aydınlatma yükümlülüğü kapsamında kişisel verilerin
            Kanunun 5 ve 6 ncı maddelerinde belirtilen işleme şartlarından
            hangisine dayanılarak işlendiğidir. Aydınlatma yükümlülüğünün yerine
            getirilmesi esnasında hukuki sebebin açıkça belirtilmesi
            gerekmektedir. ı) Aydınlatma yükümlülüğü kapsamında, kişisel
            verilerin aktarılma amacı ve aktarılacak alıcı grupları
            belirtilmelidir. i) Aydınlatma yükümlülüğü kapsamında kişisel
            verilerin, tamamen veya kısmen otomatik yollarla ya da veri kayıt
            sisteminin parçası olmak kaydıyla otomatik olmayan yöntemlerden
            hangisiyle elde edildiği açık bir şekilde belirtilmelidir. j)
            Aydınlatma yükümlülüğü yerine getirilirken eksik, ilgili kişileri
            yanıltıcı ve yanlış bilgilere yer verilmemelidir. Kişisel verilerin
            ilgili kişiden elde edilmemesi halinde aydınlatma yükümlülüğü MADDE
            6 – (1) Kişisel verilerin ilgili kişiden elde edilmemesi halinde; a)
            Kişisel verilerin elde edilmesinden itibaren makul bir süre
            içerisinde, b) Kişisel verilerin ilgili kişi ile iletişim amacıyla
            kullanılacak olması durumunda, ilk iletişim kurulması esnasında, c)
            Kişisel verilerin aktarılacak olması halinde, en geç kişisel
            verilerin ilk kez aktarımının yapılacağı esnada ilgili kişiyi
            aydınlatma yükümlülüğünün yerine getirilmesi gerekir. Yürürlük MADDE
            7 – (1) Bu Tebliğ yayımı tarihinde yürürlüğe girer. Yürütme MADDE 8
            – (1) Bu Tebliğ hükümlerini Kişisel Verileri Koruma Kurumu Başkanı
            yürütür.
          </div>

          <Form.Check
            type="checkbox"
            name="kvkkConsent"
            label="KVKK aydınlatma metnini okudum ve onaylıyorum"
            checked={kvkkConsent}
            onChange={handleCheckboxChange}
            required
            className="mt-2"
          />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button variant="primary" type="submit" disabled={loading}>
            {loading ? "Gönderiliyor..." : "Gönder"}
          </Button>
        </div>
      </Form>
      {status && (
        <Alert
          variant="success"
          className="mt-3 text-center"
          style={{
            borderRadius: "10px",
            border: "none",
            backgroundColor: "#d1edff",
            color: "#0c5460",
            fontWeight: "500",
          }}
        >
          <i className="fas fa-check-circle me-2"></i>
          {status}
        </Alert>
      )}
    </Card>
  );
};

export default ContactForm;
