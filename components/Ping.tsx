"use client";

import { useEffect } from "react";

export default function Ping() {
  useEffect(() => {
    fetch("https://aws-ses.onrender.com/api/send").catch((err) =>
      console.log("healthz ping hatası:", err)
    );
  }, []);

  return null; 
}
