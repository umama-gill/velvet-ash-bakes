export const metadata = {
  title: 'Velvet Ash - Premium Cakes',
  description: 'Freshly baked customized cakes at your doorstep',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* MAGIC CSS: Yeh bina kisi file ke mobile par website ko perfect kar dega */}
        <style dangerouslySetInnerHTML={{__html: `
          @media (max-width: 768px) {
            nav {
              padding: 15px 20px !important;
            }
            nav div:first-child {
              font-size: 1.4rem !important;
            }
            /* Hero Banner Phone View */
            div[style*="background-color: #fbe7ea"], 
            div[style*="backgroundColor: '#fbe7ea'"],
            div[style*="backgroundColor: #fbe7ea"] {
              flex-direction: column-reverse !important;
              padding: 40px 20px !important;
              text-align: center !important;
            }
            h1[style*="fontSize: '3.8rem'"], h1[style*="3.8rem"] {
              font-size: 2.2rem !important;
              line-height: 1.2 !important;
            }
            h3[style*="fontSize: '1.6rem'"], h3[style*="1.6rem"] {
              font-size: 1.2rem !important;
            }
            p[style*="maxWidth: '480px'"], p[style*="maxWidth: 480px"] {
              margin: 0 auto !important;
              font-size: 0.95rem !important;
            }
            img[alt="Velvet Ash Signature Cake"] {
              max-width: 100% !important;
              margin-bottom: 25px !important;
            }
            /* Category Boxes 2 Columns on Mobile */
            div[style*="gridTemplateColumns"] {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 12px !important;
            }
            /* Product Cards Full Width on Mobile */
            div[style*="gridTemplateColumns: repeat(auto-fit"] {
              grid-template-columns: 1fr !important;
            }
            /* Customization Page Column Flex */
            div[style*="gap: '50px'"], div[style*="gap: 50px"] {
              flex-direction: column !important;
              padding: 20px !important;
              gap: 25px !important;
            }
            div[style*="flex: '1.2'"], div[style*="flex: 1.2"] {
              min-width: 100% !important;
            }
          }
        `}} />
      </head>
      <body style={{ margin: 0, padding: 0, boxSizing: 'border-box', backgroundColor: "#fff0f2" }}>
        
        {/* PREMIUM NAVBAR */}
        <nav style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 50px",
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #f7d6dc",
          fontFamily: "'Playfair Display', 'Georgia', serif"
        }}>
          <div style={{ fontSize: "1.8rem", fontWeight: "bold", color: "#8a2846", letterSpacing: "1px" }}>
            Velvet Ash
          </div>
        
          <a
            href="/menu"
            style={{
              color: "#8a2846",
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: "bold",
              marginRight: "25px",
              fontFamily: "Arial, sans-serif"
            }}
          >
            Menu
          </a>

          <div style={{ cursor: "pointer", display: "flex", alignItems: "center" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#8a2846" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
          </div>
        </nav>

        {children} 
        
      </body>
    </html>
  )
}