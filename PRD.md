# Product Requirements Document (PRD)

## Pet Adoption Website

---

## 1. Overview

### 1.1 Product Name
> **TBD** — to be decided (something related to pet shelters)

### 1.2 Purpose
A pet adoption information website that helps families, couples, and individuals discover adoptable pets, learn about the adoption process, and connect with local shelters.

### 1.3 Goals
- Provide an easy way to **browse and search** adoptable pets with images and details.
- **Educate** first-time pet owners and interested adopters about the adoption process, FAQs, and tips.
- Help users **find shelter locations and contact information** to take the next step.

---

## 2. Target Audience

- **Families** looking to adopt a pet for the first time or add to their family.
- **Couples & Individuals** interested in pet adoption.
- **First-time pet owners** who need guidance on the adoption process.
- **Anyone** unsure which breed or pet type is right for them.

---

## 3. Tech Stack

| Component         | Technology      |
| ----------------- | --------------- |
| Frontend          | HTML, CSS, JS   |
| Styling           | CSS (custom)    |
| Data Source       | RescueGroups.org v5 API (free, REST/JSON) |
| API Auth          | API Key (via Authorization header) |
| Deployment        | Any static host (e.g., GitHub Pages, Netlify) |
| Responsiveness    | Fully mobile-friendly |

---

## 4. Data Source — RescueGroups.org v5 API

### 4.1 Why this API
- **Free** — no cost, no rate limits.
- **Simple REST/JSON** — works with plain `fetch()` in JavaScript.
- **Includes images** — pictures are returned as related data with each animal.
- **Includes all pet types** — dogs, cats, rabbits, birds, horses, small animals, and more.
- **Shelter data included** — organization name, location, website, contact info.

### 4.2 What we'll use from the API
- **Animals** — name, breed, age, gender, size, status, description, pictures
- **Organizations (Shelters)** — name, address, phone, website, adoption process
- **Filters** — species, breed, age, size, gender, location/distance

### 4.3 Image Support
The API supports an `include=pictures` parameter that returns picture URLs alongside animal data, making it easy to display pet photos.

---

## 5. Pages & Features

### Page 1: 🏠 Home Page
- Hero section with welcome message and tagline.
- Featured adoptable pets (random or recent).
- Quick navigation to key pages (Browse Pets, Adoption Process, FAQ, Tips).
- Call-to-action buttons (e.g., "Find Your New Best Friend").

### Page 2: 🐾 Pet Listings (Browse Pets)
- Grid display of adoptable pets with thumbnail images.
- **Filters sidebar:**
  - Species (dog, cat, etc.)
  - Breed name
  - Age (baby, young, adult, senior)
  - Gender (male, female)
  - Size (small, medium, large, extra large)
  - Health status
- Search bar for keyword search.
- Pagination or infinite scroll.
- Click on a pet to view details.

### Page 3: 📄 Individual Pet Detail Page
- Large hero image of the pet.
- Pet information: name, breed, age, gender, size, color.
- Description/personality notes.
- Health status and special needs (if any).
- Photo gallery (multiple pictures).
- Shelter info and location for this pet.
- "Contact Shelter" button / link.

### Page 4: 📍 Shelter / Location Info
- List of shelters and rescue organizations.
- Each shelter card shows:
  - Name
  - Address / location
  - Phone number
  - Website link
  - Brief description
- Map integration (optional enhancement).
- Click through to see pets available at that shelter.

### Page 5: ❤️ Adoption Process
- Step-by-step guide to adopting a pet (e.g., 1. Research, 2. Visit Shelter, 3. Application, 4. Home Visit, 5. Adoption).
- Helpful tips for each step.
- Resources and links to shelters.

### Page 6: ❓ FAQ Page
- Accordion-style or collapsible questions/answers.
- Common questions:
  - "What do I need to adopt a pet?"
  - "How much does adoption cost?"
  - "Can I adopt if I rent my home?"
  - "What if I have other pets?"
  - "How do I know which pet is right for me?"
- Search within FAQs (optional enhancement).

### Page 7: 💡 Tips Page
- Articles/sections on pet care topics:
  - Preparing your home for a new pet.
  - First week with your new pet.
  - Pet nutrition basics.
  - Training tips.
  - Vet care and vaccinations.
- Categorized for easy browsing.

### Page 8: 📬 Contact Page
- Contact form (name, email, message).
- General inquiries about adoption.
- Links to individual shelter contact info.
- Optional: embedded map or address of partner shelters.

---

## 6. Design & UI

### 6.1 Color Palette (Nature-Inspired)
| Color         | Hex Code  | Usage                  |
| ------------- | --------- | ---------------------- |
| Forest Green  | `#2D6A4F` | Headers, buttons, accents |
| Warm Brown    | `#8B5A2B` | Secondary elements     |
| Earthy Beige  | `#F5F0E6` | Background             |
| Soft Cream    | `#FFFDF7` | Card backgrounds       |
| Deep Charcoal | `#1B1B1B` | Text                   |
| Accent Gold   | `#D4A373` | Highlights, icons      |

### 6.2 Typography
- **Headings:** Serif font (warm, friendly feel).
- **Body:** Sans-serif font (clean, readable).
- Text sizes responsive across devices.

### 6.3 Responsiveness
- Mobile-first design approach.
- Breakpoints for: mobile (< 768px), tablet (768px–1024px), desktop (> 1024px).
- Touch-friendly buttons and filters on mobile.

---

## 7. User Stories

| As a...          | I want to...                                      | So that...                              |
| ---------------- | ------------------------------------------------- | --------------------------------------- |
| Visitor          | Browse adoptable pets with photos                 | I can find a pet I'm interested in      |
| Visitor          | Filter pets by breed, age, size, gender           | I can narrow down my search             |
| Visitor          | Click on a pet to see full details                | I can learn more about them             |
| Visitor          | See shelter information                           | I know where to go                      |
| First-time owner | Read the adoption process guide                   | I know what to expect                   |
| First-time owner | Read the FAQ and Tips sections                    | I feel prepared                         |
| All users        | Contact a shelter                                | I can take the next step                |
| Mobile user      | Navigate easily on my phone                       | I can browse on-the-go                  |

---

## 8. Build Priority & Milestones

### Phase 1 — Foundation (Start Here) ✅
- [ ] Set up project structure (multi-page HTML files, CSS, JS).
- [ ] Get RescueGroups.org API key.
- [ ] Style framework (CSS variables, nature theme, responsive grid).
- [ ] Navigation bar and footer (shared across pages).

### Phase 2 — Pet Data & Listings
- [ ] Connect to RescueGroups API and fetch animal data.
- [ ] Build **Pet Listings** page with grid and thumbnail images.
- [ ] Build **Individual Pet Detail** page.
- [ ] Implement filters (species, breed, age, gender, size).

### Phase 3 — Information Pages
- [ ] Build **Home Page** with featured pets.
- [ ] Build **Adoption Process** page.
- [ ] Build **FAQ** page.
- [ ] Build **Tips** page.

### Phase 4 — Shelters & Contact
- [ ] Build **Shelters / Locations** page.
- [ ] Build **Contact** page.
- [ ] Connect shelter data from API.

### Phase 5 — Polish & Deploy
- [ ] Responsive testing (mobile, tablet, desktop).
- [ ] Performance optimization (image loading, caching).
- [ ] Deploy to hosting (GitHub Pages, Netlify, etc.).

---

## 9. What We Deliberately Do NOT Do

- ❌ Process adoptions directly on the site (informational only).
- ❌ Handle payments or donations.
- ❌ Create user profiles or store sensitive information.
- ❌ Live chat feature between shelters and users.

---

## 10. Future Enhancements (Post-MVP)

- Map integration for shelter locations.
- Search by zip code / distance radius.
- "Favorites" or "Saved Pets" using localStorage.
- Dark mode toggle.
- More pet types (cats, rabbits, birds, etc.) via API filter.
- Success stories section (user-submitted adoption stories).

---

## 11. API Reference (Quick Links)

- **API Base URL:** `https://api.rescuegroups.org/v5`
- **Get API Key:** [Request here](https://rescuegroups.org/services/adoptable-pet-data-api/)
- **API Docs:** [RescueGroups v5 API Docs](https://api.rescuegroups.org/v5/public/docs)
- **Postman Collection:** [Postman Examples](https://documenter.getpostman.com/view/60615/SWT5j1e4?version=latest)
