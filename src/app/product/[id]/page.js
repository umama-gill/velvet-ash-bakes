"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";

const allCakes = [
  { id: 1, name: "Classic Lambeth Vintage Cake", basePrice: 2800, category: "vintage", image: "/images/hero-cake.png" },
  { id: 2, name: "Victorian Pink Piping Cake", basePrice: 3200, category: "vintage", image: "/images/hero-cake.png" },
  { id: 3, name: "Blossom Floral Bouquet Cake", basePrice: 3800, category: "bouquet", image: "/images/hero-cake.png" },
  { id: 4, name: "Luxury Garden Rose Cake", basePrice: 4200, category: "bouquet", image: "/images/hero-cake.png" },
  { id: 5, name: "Minimalist Cute Bento Cake", basePrice: 850, category: "bento", image: "/images/hero-cake.png" },
  { id: 6, name: "Korean Chocolate Mini Bento", basePrice: 900, category: "bento", image: "/images/hero-cake.png" },
  { id: 7, name: "Velvety Plain Vanilla Sponge", basePrice: 1500, category: "plain", image: "/images/hero-cake.png" },
  { id: 8, name: "Premium Rich Chocolate Plain", basePrice: 1800, category: "plain", image: "/images/hero-cake.png" },
];

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();

  const cake = allCakes.find((c) => c.id === Number(params.id));

  const [weight, setWeight] = useState(1);

  if (!cake) {
    return (
      <div style={{ padding: "50px", textAlign: "center" }}>
        Cake not found!
      </div>
    );
  }

  const calculatedPrice =
    cake.category === "bento"
      ? cake.basePrice
      : cake.basePrice * weight;

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', Roboto, sans-serif",
        padding: "50px 8%",
        backgroundColor: "#fff0f2",
        minHeight: "90vh",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          marginBottom: "30px",
        }}
      >
        <button
          onClick={() => router.back()}
          style={{
            background: "none",
            border: "none",
            color: "#8a2846",
            cursor: "pointer",
            fontWeight: "600",
            fontSize: "1rem",
          }}
        >
          ← Go Back
        </button>
      </div>

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          gap: "50px",
          backgroundColor: "#ffffff",
          borderRadius: "24px",
          padding: "40px",
          boxShadow: "0 10px 30px rgba(138,40,70,0.05)",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: "1", minWidth: "300px" }}>
          <img
            src={cake.image}
            alt={cake.name}
            style={{
              width: "100%",
              borderRadius: "16px",
              objectFit: "cover",
              border: "1px solid #f7d6dc",
            }}
          />
        </div>

        <div style={{ flex: "1.2", minWidth: "300px" }}>
          <span
            style={{
              textTransform: "uppercase",
              fontSize: "0.85rem",
              letterSpacing: "1px",
              color: "#8a2846",
              fontWeight: "bold",
            }}
          >
            {cake.category} collection
          </span>

          <h1
            style={{
              color: "#4a1525",
              fontFamily: "Georgia, serif",
              fontSize: "2.2rem",
              margin: "10px 0",
            }}
          >
            {cake.name}
          </h1>

          <p
            style={{
              fontSize: "1.8rem",
              fontWeight: "bold",
              color: "#8a2846",
              margin: "0 0 30px 0",
            }}
          >
            Rs. {calculatedPrice}
          </p>

          {cake.category !== "bento" && (
            <div>
              <label
                style={{
                  display: "block",
                  fontWeight: "600",
                  color: "#4a1525",
                  marginBottom: "8px",
                }}
              >
                Select Weight (Pounds)
              </label>

              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {[1, 2, 3, 5].map((w) => (
                  <button
                    key={w}
                    type="button"
                    onClick={() => setWeight(w)}
                    style={{
                      padding: "10px 20px",
                      borderRadius: "8px",
                      border: "1px solid #f7d6dc",
                      backgroundColor:
                        weight === w ? "#8a2846" : "#ffffff",
                      color: weight === w ? "#ffffff" : "#4a1525",
                      cursor: "pointer",
                      fontWeight: "600",
                      transition: "all 0.2s",
                    }}
                  >
                    {w} Lbs
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
