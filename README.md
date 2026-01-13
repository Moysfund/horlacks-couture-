HORLAKS COUTURE – Fashion E-Commerce Website

A responsive e-commerce platform for HORLAKS COUTURE, built with Next.js, Tailwind CSS, MongoDB, and JWT authentication.

---

🚀 Features

🔥 Grand Opening Animation
- Splash screen with brand logo and tagline:  
  “Sharp style, perfect fit, always horlaks”

🛍️ Customer Section
- Homepage with featured products  
- Product listing by category: Suit, Native, Senate Wear, Agbada, Shirt, Joggers, Polo  
- Product detail pages with image, price, and description  
- Registration and login with email verification  
- Orders page showing pending and completed orders  
- Contact section with email, Facebook, Instagram, and phone

🧑‍💼 Admin Section
- Admin login  
- Dashboard to upload/manage products  
- View and manage customer orders

📦 Backend
- Node.js API routes (via Next.js App Router)  
- MongoDB database with Mongoose models  
- JWT authentication (access + refresh tokens)  
- Nodemailer email notifications for registration and order updates

🎨 Frontend
- Next.js with App Router  
- Tailwind CSS for responsive design  
- Reusable components and clean layout

📁 Deployment
- Ready for GitHub  
- Deployable to Vercel, Netlify, or Render

---

📂 Project Structure

`
src/
├─ app/               # Pages and routes
│  ├─ page.tsx        # Homepage
│  ├─ products/       # Product listing + detail
│  ├─ auth/           # Register, login, verify
│  ├─ orders/         # Customer orders
│  ├─ contact/        # Contact page
│  └─ admin/          # Admin login + dashboard
│
├─ components/        # UI components
├─ models/            # Mongoose models
├─ lib/               # DB, auth, email helpers
├─ app/api/           # API routes
│  ├─ auth/
│  ├─ products/
│  └─ orders/
`

---

⚙️ Setup Instructions

1. Clone the repo
   `bash
   git clone https://github.com/Moysfund/horlacks-couture.git
   cd horlacks-couture
   `

2. Install dependencies
   `bash
   npm install
   `

3. Configure environment variables  
   Create a .env.local file in the root:
   `env
   MONGODBURI=yourmongodbconnectionstring
   JWTSECRET=yourjwt_secret
   JWTREFRESHSECRET=yourrefreshsecret
   EMAIL_FROM="HORLAKS COUTURE <no-reply@horlaks.com>"
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTPUSER=youremail@gmail.com
   SMTPPASS=yourapp_password
   BASE_URL=http://localhost:3000
   `

4. Run development server
   `bash
   npm run dev
   `
   Visit http://localhost:3000

---

🌐 Deployment

Vercel (recommended)
1. Push repo to GitHub  
2. Import project into Vercel  
3. Add environment variables in Vercel dashboard  
4. Deploy — your site will be live instantly

Netlify + Render
- Deploy frontend on Netlify  
- Deploy backend API on Render  
- Point frontend API calls to Render backend URL

---

🖼️ Logo

Place the brand logo (sewing machine encircled by a ring with three stars) in /public/logo.svg  
Update SplashScreen.tsx to reference it.

---

✅ Next Steps

- Seed MongoDB with sample products  
- Test registration/login flow  
- Configure SMTP for email verification and order updates  
- Add favicon and SEO metadata  
- Integrate payments (e.g., Paystack or Stripe) when ready

---

© HORLAKS COUTURE
