"use client";
import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { image } from "framer-motion/client";

const allCakes = [
  { 
    id: 1, 
    name: "HELL0 22 PINK", 
    basePrice: 2000, 
    category: "bento", 
    // 👇 Yeh hai real Cloudinary URL ki example
    image:"https://res.cloudinary.com/dzpwgu7wc/image/upload/v1775323788/Birthday_cake_gq8khp.jpg"
  },
  { 
    id: 2, 
    name: "HBD IN YELLOW", 
    basePrice: 2000, 
    category: "bento", 
    // 👇 Yeh hai real Cloudinary URL ki example
    image:"https://res.cloudinary.com/dzpwgu7wc/image/upload/v1775323796/YELLOW____%D0%BE%D0%B1%D0%BD%D0%B8%D0%BD%D1%81%D0%BA_%D0%BE%D0%B1%D0%BD%D0%B8%D0%BD%D1%81%D0%BA%D0%B1%D0%B5%D0%BD%D1%82%D0%BE_%D0%BE%D0%B1%D0%BD%D0%B8%D0%BD%D1%81%D0%BA%D1%82%D0%BE%D1%80%D1%82_%D0%BE%D0%B1%D0%BD%D0%B8%D0%BD%D1%81%D0%BA%D1%82%D0%BE%D1%80%D1%82%D1%8B%D0%BD%D0%B0%D0%B7%D0%B0%D0%BA%D0%B0%D0%B7_%D0%BE%D0%B1%D0%BD%D0%B8%D0%BD%D1%81%D0%BA%D1%82%D0%BE%D1%80%D1%82%D0%BD%D0%B0%D0%B7%D0%B0%D0%BA%D0%B0%D0%B7_%D0%BE%D0%B1%D0%BD%D0%B8%D0%BD%D1%81%D0%BA%D1%84%D0%BE%D1%82%D0%BE_%D0%BE%D0%B1%D0%BD%D0%B8%D0%BD%D1%81%D0%BA%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8_%D1%82%D0%BE%D1%80%D1%82_%D1%82%D0%BE%D1%80%D1%82%D0%B1%D0%B5%D0%B7%D0%BC%D0%B0%D1%81%D1%82%D0%B8%D0%BA%D0%B8_%D1%82%D0%BE%D1%80%D1%82%D0%BD%D0%B0%D0%B4%D0%B5%D0%BD%D1%8C%D1%80%D0%BE%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F_cake_bento_bentocake_aesthetic_yellow_%D1%82_c0upxz.jpg"
  },
  { 
    id: 3, 
    name: "HBD IN PURPEL", 
    basePrice: 2000, 
    category: "bento", 
    // 👇 Yeh hai real Cloudinary URL ki example
    image:"https://res.cloudinary.com/dzpwgu7wc/image/upload/v1775323825/%D0%94%D0%B5%D0%B2%D1%83%D1%88%D0%BA%D0%B5_%D0%BD%D0%B0_%D0%B4%D0%B5%D0%BD%D1%8C_%D1%80%D0%BE%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5__%D0%BD%D0%B5%D0%B6%D0%BD%D1%8B%D0%B9_%D0%B1%D0%B5%D0%BD%D1%82%D0%BE-%D1%82%D0%BE%D1%80%D1%82_2025_pseifx.jpg"
  },
  { 
    id: 4, 
    name: "HBD IN WHITE WITH MINI HEARTS", 
    basePrice: 2000, 
    category: "bento", 
    // 👇 Yeh hai real Cloudinary URL ki example
    image:"https://res.cloudinary.com/dzpwgu7wc/image/upload/v1775323811/%D0%91%D0%B5%D0%BD%D1%82%D0%BE_happy_birthday_eyn5x5.jpg"
    },
    { 
    id: 5, 
    name: "FLORAL HBD", 
    basePrice: 2000, 
    category: "bento", 
    // 👇 Yeh hai real Cloudinary URL ki example
    image:"https://res.cloudinary.com/dzpwgu7wc/image/upload/v1775323803/aesthetics_abpojh.jpg"
    },
    { 
    id: 6, 
    name: "WHITE BOW", 
    basePrice: 2800, 
    category: "vinatge", 
    // 👇 Yeh hai real Cloudinary URL ki example
    image: "https://res.cloudinary.com/dzpwgu7wc/image/upload/v1775323853/5_easy_cake_recipies_you_need_to_try_now_oqa2gf.jpg"
    },
    { 
    id: 7, 
    name: "WHITE,PINK BOW", 
    basePrice: 2800, 
    category: "vintage", 
    // 👇 Yeh hai real Cloudinary URL ki example
    image: "https://res.cloudinary.com/dzpwgu7wc/image/upload/v1775323862/A_cake_that_feels_like_a_love_letter__Soft_cream_tones_gentle_floral_details_and_pink_ribbon_accents_every_detail_is_crafted_to_make_your_celebration_unforgettable___theyummycircle_cake_kuuklw.jpg"
    },
    { 
    id: 8, 
    name: "(YOUR PICTURE) ", 
    basePrice: 2000, 
    category: "bento", 
    // 👇 Yeh hai real Cloudinary URL ki example
    image: "https://res.cloudinary.com/dzpwgu7wc/image/upload/v1782918930/YOUR_PICTURE_BENTO_CAKE_lpymsc.jpg"
    },
    { 
    id: 9, 
    name: "NOTEBOOK", 
    basePrice: 2000, 
    category: "bento", 
    // 👇 Yeh hai real Cloudinary URL ki example
    image: "https://res.cloudinary.com/dzpwgu7wc/image/upload/v1782918949/BENTO_CAKE1_cnnpv6.jpg"
    },
    { 
    id: 10, 
    name: "BURGUNDY HEART CAKE", 
    basePrice: 2800, 
    category: "vintage", 
    // 👇 Yeh hai real Cloudinary URL ki example
    image: "https://res.cloudinary.com/dzpwgu7wc/image/upload/v1782918977/BURGUNDY_HEART_VINATGE_ACKE_2_g2dlfo.jpg"
    },
    { 
    id: 11, 
    name: "BLACK HEART CAKE", 
    basePrice: 2800, 
    category: "vintage", 
    // 👇 Yeh hai real Cloudinary URL ki example
    image: "https://res.cloudinary.com/dzpwgu7wc/image/upload/v1782918960/BLACK_HEART_VINATGE_CAKE_mndd0j.jpg"
    },
    { 
    id: 12, 
    name: "TWO TONE HEART CAKE", 
    basePrice: 2800, 
    category: "vintage", 
    // 👇 Yeh hai real Cloudinary URL ki example
    image: "https://res.cloudinary.com/dzpwgu7wc/image/upload/v1782918990/COLORED_CAKE_HEART_vngs82.jpg"
    },
    { 
    id: 13, 
    name: "HEART CAKE", 
    basePrice: 2000, 
    category: "bento", 
    // 👇 Yeh hai real Cloudinary URL ki example
    image: "https://res.cloudinary.com/dzpwgu7wc/image/upload/v1775323669/download_2_ztklmw.jpg"
    },
    { 
    id: 14, 
    name: "CAKE WITH BABY BREATH", 
    basePrice: 2800, 
    category: "bouquet", 
    // 👇 Yeh hai real Cloudinary URL ki example
    image: "https://res.cloudinary.com/dzpwgu7wc/image/upload/v1782919872/Bouquet_which_you_can_eat_n4frgk.jpg"
    },
    { 
    id: 15, 
    name: "CAKE WITH FLOWERS AND BOW", 
    basePrice: 2800, 
    category: "bouquet", 
    // 👇 Yeh hai real Cloudinary URL ki example
    image: "https://res.cloudinary.com/dzpwgu7wc/image/upload/v1782919859/bouque_cake_uiwmio.jpg"
    },
     { 
    id: 16, 
    name: "CAKE WITH ROSE", 
    basePrice: 2800, 
    category: "bouquet", 
    // 👇 Yeh hai real Cloudinary URL ki example
    image : "https://res.cloudinary.com/dzpwgu7wc/image/upload/v1782919842/A_sweet_and_simple_bouquet-style_cake_topped_with_yellow_roses_and_finished_with_a_cute_black_bow__Perfect_for_gifting____chocolatedelite_egglesscakes_homebaker_floralcake_bouquetcake_pastelcake_fbnnkx.jpg"
    },
    { 
    id: 15, 
    name: "CAKE WITH FLOWERS AND BOW", 
    basePrice: 2800, 
    category: "bouquet", 
    // 👇 Yeh hai real Cloudinary URL ki example
    image: "https://res.cloudinary.com/dzpwgu7wc/image/upload/v1782919859/bouque_cake_uiwmio.jpg"
    },
    
    









    ]
export default function CategoryPage() {
  const params = useParams();
  const currentCategory = params.type; 

  const filteredCakes = allCakes.filter(cake => cake.category === currentCategory);

  return (
    <div style={{ fontFamily: "'Segoe UI', Roboto, sans-serif", padding: "50px 8%", minHeight: "90vh", backgroundColor: "#fff0f2" }}>
      
      <div style={{ maxWidth: "1200px", margin: "0 auto", marginBottom: "40px" }}>
        <Link href="/" style={{ color: "#8a2846", textDecoration: "none", fontWeight: "600", fontSize: "1rem" }}>
          ← Back to Categories
        </Link>
        
        <h1 style={{ 
          color: "#4a1525", 
          fontFamily: "Georgia, serif", 
          fontSize: "2.5rem", 
          textTransform: "capitalize",
          marginTop: "20px",
          borderBottom: "2px solid #f7d6dc",
          paddingBottom: "15px"
        }}>
          Exclusive {currentCategory} Cakes
        </h1>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {filteredCakes.length > 0 ? (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
            {filteredCakes.map((cake) => (
              <div key={cake.id} style={{ 
                backgroundColor: "#ffffff", 
                border: "1px solid #f7d6dc", 
                borderRadius: "20px", 
                overflow: "hidden", 
                boxShadow: "0 6px 18px rgba(138,40,70,0.03)"
              }}>
                <div style={{ height: "250px", overflow: "hidden", backgroundColor: "#fbe7ea" }}>
                  <img src={cake.image} alt={cake.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ padding: "25px" }}>
                  <h4 style={{ margin: "0 0 10px 0", color: "#4a1525", fontSize: "1.2rem", fontFamily: "Georgia, serif" }}>{cake.name}</h4>
                  <p style={{ fontWeight: "bold", color: "#8a2846", margin: "0 0 20px 0", fontSize: "1.15rem" }}>Rs. {cake.basePrice}</p>
                  
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p style={{ color: "#6b5257", fontSize: "1.2rem" }}>No cakes found in this category.</p>
        )}
      </div>

    </div>
  );
}