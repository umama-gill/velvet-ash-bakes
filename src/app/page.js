"use client";
import React from "react";
import Link from "next/link";

export default function HomePage() {
  const categories = [
    { id: "vintage", name: "Vintage Cakes", icon: "🧁" },
    { id: "bouquet", name: "Bouquet Cakes", icon: "💐" },
    { id: "bento", name: "Bento Cakes", icon: "🍱" },
    { id: "plain", name: "Plain Cakes", icon: "🍰" }
  ];

  return (
    <div style={{ fontFamily: "'Segoe UI', Roboto, sans-serif" }}>
      
      {/* HERO SECTION */}
      <div style={{
        width: "100%",
        backgroundColor: "#fbe7ea",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "60px 10% 40px 10%",
        flexWrap: "wrap",
        boxSizing: "border-box"
      }}>
        <div style={{ flex: "1", minWidth: "300px" }}>
          <h1 style={{ fontSize: "3.8rem", color: "#4a1525", margin: "0 0 10px 0", fontFamily: "Georgia, serif" }}>
            Fresh Fruit Spread & Cakes
          </h1>
          <h3 style={{ fontSize: "1.6rem", color: "#8a2846", margin: "0 0 20px 0", fontWeight: "normal", fontStyle: "italic" }}>
            Freshly baked cake at your door step
          </h3>
          <p style={{ fontSize: "1.05rem", color: "#6b5257", maxWidth: "480px", lineHeight: "1.6" }}>
            Experience the bliss of premium, freshly baked customized cakes delivered straight to your celebrations.
          </p>
        </div>

        <div style={{ flex: "1", minWidth: "300px", display: "flex", justifyContent: "center" }}>
          <img 
            src="/images/hero-cake.png" 
            alt="Velvet Ash Signature Cake" 
            style={{ 
              width: "100%", 
              maxWidth: "460px", 
              borderRadius: "24px", 
              boxShadow: "0 15px 35px rgba(138, 40, 70, 0.15)",
              border: "4px solid #ffffff"
            }} 
          />
        </div>
      </div>

      {/* CATEGORY GRIDS SECTION */}
      <div style={{ padding: "60px 5%", maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", color: "#4a1525", marginBottom: "40px", fontFamily: "Georgia, serif", fontSize: "2.2rem" }}>
          Browse by Category
        </h2>
        
        {/* 4 Clickable Grid Boxes linking to a new page */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "25px"
        }}>
          {categories.map((cat) => (
            <Link href={`/category/${cat.id}`} key={cat.id} style={{ textDecoration: "none" }}>
              <div style={{
                padding: "35px 20px", 
                backgroundColor: "#ffffff", 
                color: "#4a1525", 
                border: "1px solid #f7d6dc", 
                borderRadius: "20px", 
                textAlign: "center", 
                cursor: "pointer", 
                boxShadow: "0 6px 20px rgba(138,40,70,0.03)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.borderColor = "#8a2846";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "#f7d6dc";
              }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "15px" }}>{cat.icon}</div>
                <div style={{ fontSize: "1.2rem", fontWeight: "600" }}>{cat.name}</div>
                <p style={{ color: "#8a2846", fontSize: "0.85rem", margin: "8px 0 0 0" }}>Explore Collection →</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}