"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./menu.module.css";

const cakePrices = {
  Vanilla: 1800,
  Chocolate: 2000,
  Caramel: 2000,
  "Three Milk": 2300,
  Lotus: 2500,
  "Red Velvet": 2300,
};

const weights = [1, 2, 3, 5];

export default function MenuPage() {
  const [type, setType] = useState("Signature Cake");
  const [weight, setWeight] = useState(1);
  const [flavor, setFlavor] = useState("Vanilla");
  const [bento, setBento] = useState("Normal Bento");
  const [cupcakeCount, setCupcakeCount] = useState("6");
  const [cupcakeFlavor, setCupcakeFlavor] = useState("Vanilla");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [reference, setReference] = useState(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  const today = new Date();
  today.setDate(today.getDate() + 2);
  const minDate = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");

  let cakeName = type;
  let itemPrice = 0;

  if (type === "Signature Cake") {
    itemPrice = cakePrices[flavor] * weight;
    cakeName = `${weight} lb ${flavor} Cake`;
  } else if (type === "Bento Cake") {
    itemPrice = bento === "Normal Bento" ? 1500 : 1800;
    cakeName = bento;
  } else {
    itemPrice =
      cupcakeCount === "6"
        ? cupcakeFlavor === "Vanilla"
          ? 600
          : 700
        : cupcakeFlavor === "Vanilla"
        ? 1100
        : 1300;

    cakeName = `Box of ${cupcakeCount} ${cupcakeFlavor} Cupcakes`;
  }

  const delivery = 200;
  const total = itemPrice + delivery;

  const orderDetails = () =>
    `VELVET ASH - ORDER REQUEST
Name: ${name || "Not provided"}
Phone: ${phone || "Not provided"}
Product: ${cakeName}
Flavor: ${
      type === "Signature Cake"
        ? flavor
        : type === "Bento Cake"
        ? "Customer to discuss"
        : cupcakeFlavor
    }
${type === "Signature Cake" ? `Weight: ${weight} lb` : ""}
Preferred delivery date: ${date || "Not specified"}
Message / customization: ${notes || "Not specified"}
Product price: PKR ${itemPrice}
Delivery: PKR ${delivery}
Estimated total: PKR ${total}`;

  // 🟢 WhatsApp Redirection (Working)
  const openWhatsApp = () => {
    const whatsappNumber = "923287666605";
    const text = encodeURIComponent(
      orderDetails() +
        (reference ? "\n\nI have an inspiration photo to share in this chat." : "")
    );

    window.location.href = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${text}`;
  };

  // 🟢 Fixed EmailJS Sending Function
  const sendEmail = async () => {
    setSending(true);
    setStatus("");

    // Fallback Keys from env or direct
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_xbv0uos";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: name || "Customer",
          from_name: name || "Customer",
          phone: phone || "Not provided",
          email: "velvetash786@gmail.com",
          from_email: "velvetash786@gmail.com",
          message: orderDetails(),
          order_details: orderDetails(),
          delivery_date: date || "Flexible",
          order_total: `PKR ${total}`,
        },
        publicKey
      );

      setStatus("Your order request has been emailed successfully!");
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("Email error! Please check if .env.local keys are added correctly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <span className={styles.eyebrow}>BAKED WITH LOVE</span>
        <h1>Our Menu</h1>
        <p>Choose your sweetness, made especially for you.</p>
      </section>

      <section className={styles.cards}>
        <button
          className={styles.card}
          onClick={() => {
            setType("Signature Cake");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <span className={styles.emoji}>🎂</span>
          <h2>Signature Cakes</h2>
          <p>Classic, elegant and made for your special moments.</p>
          <strong>Starting at PKR 1,800 →</strong>
        </button>

        <button
          className={styles.card}
          onClick={() => {
            setType("Bento Cake");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <span className={styles.emoji}>🧁</span>
          <h2>Bento Cakes</h2>
          <p>Little cakes, big feelings. Make them personal.</p>
          <strong>Starting at PKR 1,500 →</strong>
        </button>

        <button
          className={styles.card}
          onClick={() => {
            setType("Cupcake Box");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <span className={styles.emoji}>🧁</span>
          <h2>Cupcake Boxes</h2>
          <p>Sweet little treats, perfect for sharing.</p>
          <strong>Starting at PKR 600 →</strong>
        </button>
      </section>

      <section className={styles.builder} id="customize">
        <div className={styles.formSide}>
          <span className={styles.eyebrow}>MADE JUST FOR YOU</span>
          <h2>Customize Your Order</h2>
          <p className={styles.subtitle}>
            Tell us what you have in mind and we’ll make it special.
          </p>

          <label>Choose your cake</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option>Signature Cake</option>
            <option>Bento Cake</option>
            <option>Cupcake Box</option>
          </select>

          {type === "Signature Cake" && (
            <>
              <label>2. Select weight</label>
              <div className={styles.options}>
                {weights.map((w) => (
                  <button
                    key={w}
                    type="button"
                    className={weight === w ? styles.active : ""}
                    onClick={() => setWeight(w)}
                  >
                    {w} lb
                  </button>
                ))}
              </div>

              <label>3. Choose flavor</label>
              <select
                value={flavor}
                onChange={(e) => setFlavor(e.target.value)}
              >
                {Object.entries(cakePrices).map(([f, price]) => (
                  <option key={f} value={f}>
                    {f} — PKR {price.toLocaleString("en-PK")} / lb
                  </option>
                ))}
              </select>
            </>
          )}

          {type === "Bento Cake" && (
            <>
              <label>2. Choose your bento</label>
              <select
                value={bento}
                onChange={(e) => setBento(e.target.value)}
              >
                <option value="Normal Bento">Normal Bento — PKR 1,500</option>
                <option value="Custom Bento">Custom Bento — PKR 1,800</option>
              </select>
              <p className={styles.hint}>
                Add your desired flavor and design in the customization notes.
              </p>
            </>
          )}

          {type === "Cupcake Box" && (
            <>
              <label>2. Select quantity</label>
              <select
                value={cupcakeCount}
                onChange={(e) => setCupcakeCount(e.target.value)}
              >
                <option value="6">Box of 6</option>
                <option value="12">Box of 12</option>
              </select>

              <label>3. Choose flavor</label>
              <select
                value={cupcakeFlavor}
                onChange={(e) => setCupcakeFlavor(e.target.value)}
              >
                <option>Vanilla</option>
                <option>Chocolate</option>
              </select>
            </>
          )}

          <label>Preferred delivery date</label>
          <input
            type="date"
            min={minDate}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <label>Your name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
          />

          <label>WhatsApp phone number</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="03XX XXXXXXX"
          />

          <label>Customization notes</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Cake theme, colors, message, frosting, occasion..."
            rows={4}
          />

          <label>Upload inspiration photo (optional)</label>
          <input
            type="file"
            accept="image/png,image/jpeg,image/webp"
            onChange={(e) => {
              const file = e.target.files?.[0];

              if (file && file.size > 5 * 1024 * 1024) {
                setStatus("Please choose an image smaller than 5 MB.");
                e.target.value = "";
                setReference(null);
                return;
              }

              setReference(file || null);
              setStatus("");
            }}
          />

          {reference && (
            <p className={styles.hint}>
              Selected reference: {reference.name}. Send it separately on
              WhatsApp; this demo does not upload the image to email.
            </p>
          )}

          {status && <p className={styles.status}>{status}</p>}
        </div>

        <aside className={styles.summary}>
          <h2>Order Summary</h2>

          <div className={styles.summaryProduct}>
            <span className={styles.summaryEmoji}>🎂</span>
            <div>
              <strong>{cakeName}</strong>
              <p>
                {type === "Signature Cake"
                  ? `${weight} lb · ${flavor}`
                  : type === "Bento Cake"
                  ? bento
                  : `Box of ${cupcakeCount} · ${cupcakeFlavor}`}
              </p>
            </div>
          </div>

          <div className={styles.priceRow}>
            <span>Product price</span>
            <span>PKR {itemPrice.toLocaleString("en-PK")}</span>
          </div>

          <div className={styles.priceRow}>
            <span>Delivery estimate</span>
            <span>PKR {delivery.toLocaleString("en-PK")}</span>
          </div>

          <p className={styles.hint}>
            Delivery charge is a demo estimate. Confirm the final amount with
            the bakery.
          </p>

          <div className={styles.total}>
            <span>Estimated total</span>
            <span>PKR {total.toLocaleString("en-PK")}</span>
          </div>

          <button
            className={styles.whatsapp}
            onClick={openWhatsApp}
            type="button"
          >
            Chat on WhatsApp ↗
          </button>

          <button
            className={styles.email}
            onClick={sendEmail}
            type="button"
            disabled={sending}
          >
            {sending ? "Sending..." : "Send request by email"}
          </button>

          <p className={styles.hint}>
            Your order is a request until the bakery confirms availability,
            final price and delivery.
          </p>
        </aside>
      </section>
    </main>
  );
}