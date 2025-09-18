"use client";

import { useEffect } from "react";

export default function Ping() {
  useEffect(() => {
    fetch("https://nakliye.onrender.com/healthz").catch((err) =>
      console.log("healthz ping hatası:", err)
    );
  }, []);

  return null; 
}
