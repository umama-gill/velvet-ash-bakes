"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function CheckoutPage() {
  const router = useRouter();
  const [cartItem, setCartItem] = useState(null);

  // Delivery Form States
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");

  // Product Page se save kiya hua data load karna
  useEffect(() => {
    const savedCart = localStorage.getItem("cakeCart");
    if (savedCart) {
      setCartItem(JSON.parse(savedCart));
    }
  }, []);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    
    if (!fullName || !phone || !address || !deliveryDate) {
      alert("❌ Please fill out all delivery details!");
      return;
    }

    // Success Order Alert
    alert(`🎉 Order Placed Successfully for Velvet Ash!\n\nThank you ${fullName}, your order for "${cartItem?.name}" (${cartItem?.weight}) has been booked for ${deliveryDate}.\n\nWe will contact you on ${phone} shortly.`);
    
    // Clear Cart after success
    localStorage.removeItem("cakeCart");
    
    // Redirect back to Home
    router.push("/");
  };

  if (!cartItem) {
    return (
      <div style={{ padding: "80px 20px", textAlign: "center", fontFamily: "sans-serif", backgroundColor: "#fff0f2", minHeight: "80vh" }}>
        <h2 style={{ color: "#4a1525", fontFamily: "Georgia, serif" }}>Your Bag is Empty!</h2>
        <p style={{ color: "#6b5257", marginBottom: "20px" }}>Please choose a premium cake to customize first.</p>
        <Link href="/">
          <button style={{ backgroundColor: "#8a2846", color: "#fff", border: "none", padding: "12px 25px", borderRadius: "10px", cursor: "pointer", fontWeight: "bold" }}>
            Browse Cakes
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "'Segoe UI', Roboto, sans-serif", padding: "50px 8%", backgroundColor: "#fff0f2", minHeight: "90vh" }}>
      
      <h1 style={{ color: "#4a1525", fontFamily: "Georgia, serif", textAlign: "center", marginBottom: "40px", fontSize: "2.4rem" }}>
        Complete Your Order
      </h1>

      <div style={{
        maxWidth: "1100px",
        margin: "0 auto",
        display: "flex",
        gap: "40px",
        flexWrap: "wrap"
      }}>
        
        {/* LEFT SIDE: ORDER SUMMARY (CART CARD) */}
        <div style={{ flex: "1", minWidth: "320px", backgroundColor: "#ffffff", borderRadius: "20px", padding: "30px", boxShadow: "0 10px 30px rgba(138,40,70,0.03)", height: "fit-content", border: "1px solid #f7d6dc" }}>
          <h3 style={{ color: "#4a1525", fontFamily: "Georgia, serif", borderBottom: "1px solid #f7d6dc", paddingBottom: "15px", margin: "0 0 20px 0" }}>
            🎂 Order Summary
          </h3>
          
          <div style={{ display: "flex", gap: "20px", alignItems: "center", marginBottom: "20px" }}>
            <img src={cartItem.image} alt={cartItem.name} style={{ width: "90px", height: "90px", borderRadius: "12px", objectFit: "cover", border: "1px solid #f7d6dc" }} />
            <div>
              <h4 style={{ margin: "0 0 6px 0", color: "#4a1525", fontSize: "1.1rem" }}>{cartItem.name}</h4>
              <p style={{ margin: "0", fontSize: "0.9rem", color: "#6b5257" }}><strong>Flavor:</strong> {cartItem.flavor}</p>
              <p style={{ margin: "4px 0 0 0", fontSize: "0.9rem", color: "#6b5257" }}><strong>Weight:</strong> {cartItem.weight}</p>
              {cartItem.message && <p style={{ margin: "4px 0 0 0", fontSize: "0.9rem", color: "#8a2846" }}><strong>Text:</strong> "{cartItem.message}"</p>}
            </div>
          </div>

          <div style={{ borderTop: "1px solid #f7d6dc", paddingTop: "15px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "1.1rem", fontWeight: "600", color: "#4a1525" }}>Total Amount:</span>
            <span style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#8a2846" }}>Rs. {cartItem.price}</span>
          </div>
          <p style={{ fontSize: "0.8rem", color: "#8c7378", marginTop: "10px", textAlign: "right" }}>* Cash on Delivery available only</p>
        </div>

        {/* RIGHT SIDE: SHIPPING & DELIVERY FORM */}
        <div style={{ flex: "1.3", minWidth: "320px", backgroundColor: "#ffffff", borderRadius: "20px", padding: "30px", boxShadow: "0 10px 30px rgba(138,40,70,0.03)", border: "1px solid #f7d6dc" }}>
          <h3 style={{ color: "#4a1525", fontFamily: "Georgia, serif", borderBottom: "1px solid #f7d6dc", paddingBottom: "15px", margin: "0 0 25px 0" }}>
            🚚 Delivery Details
          </h3>
          
          <form onSubmit={handlePlaceOrder} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            
            <div>
              <label style={{ display: "block", fontWeight: "600", color: "#4a1525", marginBottom: "6px", fontSize: "0.95rem" }}>Full Name</label>
              <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Enter your full name" style={{ width: "100%", padding: "12px", borderRadius: "10px", border: "1px solid #f7d6dc", outline: "none", boxSizing: "border-box" }} />
            </div>

            <div>
              <label style={{ display: "block", fontWeight: "600", color: "#4a1525", marginBottom: "6px", fontSize: "0.95rem" }}>Phone Number</label>
              <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="e.g., 03001234567" style={{ width: "100%", padding: "12px", borderRadius: "10px", border: "1px solid #f7d6dc", outline: "none", boxSizing: "border-box" }} />
            </div>

            <div>
              <label style={{ display: "block", fontWeight: "600", color: "#4a1525", marginBottom: "6px", fontSize: "0.95rem" }}>Delivery Address</label>
              <textarea value={address} onChange={(e) => setAddress(e.target.value)} rows="3" placeholder="House number, Street, Area name..." style={{ width: "100%", padding: "12px", borderRadius: "10px", border: "1px solid #f7d6dc", outline: "none", fontFamily: "sans-serif", boxSizing: "border-box", resize: "none" }}></textarea>
            </div>

            <div>
              <label style={{ display: "block", fontWeight: "600", color: "#4a1525", marginBottom: "6px", fontSize: "0.95rem" }}>Select Delivery Date</label>
              <input type="date" value={deliveryDate} onChange={(e) => setDeliveryDate(e.target.value)} style={{ width: "100%", padding: "12px", borderRadius: "10px", border: "1px solid #f7d6dc", outline: "none", boxSizing: "border-box", color: "#4a1525" }} />
            </div>

            <button type="submit" style={{ backgroundColor: "#8a2846", color: "#ffffff", border: "none", padding: "15px", borderRadius: "12px", fontSize: "1.1rem", fontWeight: "bold", cursor: "pointer", marginTop: "10px", boxShadow: "0 5px 15px rgba(138,40,70,0.15)" }}>
              Confirm & Place Order (COD)
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}