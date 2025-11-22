# Portfolio Website - Muhammad Wildan Jasiruddin

## Futuristic Naruto-Themed Portfolio

This is a modern, animated portfolio website with a futuristic Naruto theme.

## Setup Instructions

### 1. Add Naruto Image
- Download a Naruto Uzumaki image
- Rename it to `naruto.png`
- Place it in the `images/` folder
- Recommended: Use a high-quality image with transparent background

### 2. Add Portfolio Images
For your portfolio from Google Drive (https://drive.google.com/drive/folders/1EPrwUeoW0dNQ9sNwSaOvnh3lsfGzCJhI?usp=sharing):

1. Download all files from the Google Drive folder
2. Compress/optimize images before adding them (recommended tools):
   - TinyPNG (https://tinypng.com/)
   - Squoosh (https://squoosh.app/)
   - ImageOptim (for Mac)
   - RIOT (for Windows)
3. Save compressed images in `images/portfolio/` folder
4. Update the portfolio data in `script.js`:
   - Open `script.js`
   - Find the `portfolioData` array (around line 145)
   - Update with your actual project information

Example format:
```javascript
const portfolioData = [
    {
        title: 'Your Project Name',
        category: 'Branding/Design/etc',
        image: 'images/portfolio/your-image.jpg'
    },
    // Add more projects...
];
```

### 3. Update Contact Information
Edit `index.html` and update:
- Email address (line 272)
- Phone number (line 278)
- Social media links (lines 288-291)

### 4. Image Optimization Tips
To keep the website fast and lightweight:
- Resize images to appropriate dimensions (max 1920px width for portfolio items)
- Use JPEG for photos (quality 80-85%)
- Use PNG for graphics with transparency
- Use WebP format for best compression (if supported)
- Target file size: Under 200KB per image

## Features

✨ **Animations:**
- Particle.js background with Naruto-themed colors
- Glitch effect on name
- Rasengan spinning effect
- Chakra aura animation
- Smooth scroll animations
- Custom cursor with followers
- Skill progress bars with shimmer effect
- Hover effects on all interactive elements

🎨 **Sections:**
- Navbar with smooth scrolling
- Hero section with Naruto image
- About Me with biography
- Skills with progress bars
- Portfolio grid
- Contact form
- Footer

🎮 **Easter Egg:**
Try the Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A

## How to Run

Simply open `index.html` in a web browser. No server required!

For best experience:
- Use modern browsers (Chrome, Firefox, Edge, Safari)
- Enable JavaScript
- Use desktop for full experience (responsive on mobile too)

## Customization

### Colors
Edit CSS variables in `style.css`:
```css
:root {
    --primary-color: #ff6b00;
    --secondary-color: #0066ff;
    --accent-color: #ffd700;
}
```

### Fonts
Current fonts:
- Orbitron (headings)
- Rajdhani (body text)

Change fonts by editing the Google Fonts link in `index.html`

## Technologies Used
- HTML5
- CSS3 (with animations)
- JavaScript (ES6+)
- Particles.js
- Font Awesome Icons
- Google Fonts

## Browser Support
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

---

**Made with ❤️ and the spirit of a ninja**

🍥 Believe it!
