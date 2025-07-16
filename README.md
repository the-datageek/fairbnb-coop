# 🌍 Fairbnb Coop – HubSpot Rebuild

A custom-coded recreation of the Fairbnb.coop landing page (and supporting pages) using HubSpot CMS with React and HubL.

> ✅ **Objective:** Rebuild a dynamic, data-driven marketing site using **70% custom code (React + HubL)** and **30% HubSpot drag-and-drop modules**, following atomic design principles.

---

## 🚀 Project Structure
<pre>

fairbnb-hubspot-theme/
├── modules/                  # Custom HubSpot modules (converted React components)
│   ├── SearchForm.module/
│   │   ├── SearchForm.module.html
│   │   ├── fields.json
│   │   └── module.css
│   ├── Button.module/
│   └── Input.module/
│
├── templates/               # Drag-and-drop page templates
│   ├── homepage.html
│   ├── about.html
│   └── booking.html
│
├── theme.css                # Global theme-wide CSS
├── theme.js                 # Optional JS logic for layout-wide behaviors
│
├── assets/                  # Images, icons, fonts
│   └── logo.svg
│
└── React/                   # Original React codebase for conversion or reference
    ├── atoms/
    ├── molecules/
    ├── organisms/
    ├── pages/
    └── magicui/

</pre>


---

## ⚙️ Technologies Used

- **React (TypeScript/JSX)**
- **Formik** – for form handling and validation
- **HubSpot CMS CLI (HS CLI)** – for local development
- **HubL** – for custom module logic
- **Radix UI Icons** – for consistent iconography
- **SCSS/CSS Modules** – for scoped styling

---

## 🧱 Components Breakdown

| Component | Type | Notes |
|----------|------|-------|
| `SearchForm` | **Custom Module** | Formik-powered guest/date search. Built in React, converted to a HubSpot CMS Module with CMS fields. |
| `HeroSection` | **Drag & Drop + Embedded React Card** | Hero copy and layout via drag-and-drop. Embedded `SearchForm` module inside. |
| `Header/Footer` | **Drag & Drop / Theme Sections** | Uses HubSpot default header/footer for global layout consistency. |
| `Impact Calculator` | **React CMS Card** | Interactive widget calculating travel impact. |
| `Booking Workflow` | **Custom Module** | Dynamically displays availability using React. |

---

## 💡 Key Concepts & Strategy

### 🔁 70/30 Code Split Strategy

| Custom Code (70%) | Drag-and-Drop (30%) |
|-------------------|---------------------|
| Search Form (React + HubL) | Header/Footer |
| Calculator Widget | Testimonials / Rich Text |
| Booking System | Image Galleries |
| Conditional Forms | Standard CTA Buttons |

### 🧬 Atomic Design Structure

- **Atoms:** Button, Input, Icon
- **Molecules:** SearchForm, Card, StatBlocks
- **Organisms:** HeroSection, FooterBlock
- **Pages:** Homepage, Booking Page, Calculator, etc.

---

## 🚧 How to Run Locally

```bash
# Install HubSpot CLI
npm install -g @hubspot/cli

# Authenticate with your portal
hs auth

# Clone this repo
git clone https://github.com/your-username/fairbnb-hubspot-clone

# Navigate into the theme directory
cd fairbnb-hubspot-clone/hubspot-theme

# Upload theme to HubSpot (watch mode)
hs watch . fairbnb-theme

Note: You must be added to the HubSpot EDU portal to access and deploy.

⸻

📦 Deployment
	•	All code is deployed to the HubSpot sandbox portal: edu.com | portal ID: 47574277
	•	hs watch automatically syncs changes.
	•	All modules live under the @hubspot theme folder for portability.

⸻

✍️ Author Notes

This project is part of the TalentMatch Africa x HubSpot Developer Accelerator.

⸻

📝 License

MIT © Faith Moraa – Educational purposes only.

---