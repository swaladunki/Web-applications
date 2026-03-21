# Uncle Egg Rice Corner Website

A fully functional professional static website for Uncle Egg Rice Corner (ಅಂಕಲ್ ಎಗ್ ರೈಸ್ ಕಾರ್ನರ್), a popular Bengaluru street food brand.

## Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Modern street food theme (Black, Red, Yellow colors)
- ✅ SEO optimized with meta tags and schema markup
- ✅ Smooth scrolling and animations
- ✅ Mobile-friendly navigation
- ✅ Google Maps integration
- ✅ Contact form with Google Forms integration
- ✅ Bilingual content (English & Kannada)
- ✅ Floating call button
- ✅ Fast loading performance

## Website Structure

```
uncle-egg-rice-website/
│
├── index.html          # Home page
├── menu.html           # Menu page
├── about.html          # About page
├── reviews.html        # Reviews page
├── contact.html        # Contact page
│
├── css/
│   └── styles.css      # Main stylesheet
│
├── js/
│   └── script.js       # JavaScript functionality
│
├── images/             # Image folder (for future images)
│
└── README.md           # This file
```

## Deployment on GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository (e.g., `uncle-egg-rice-website`)
4. Make it public
5. Don't initialize with README (we already have one)
6. Click "Create repository"

### Step 2: Push Your Code to GitHub

Open your terminal and run these commands from your project folder:

```bash
git init
git add .
git commit -m "Initial commit - Uncle Egg Rice Corner website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/uncle-egg-rice-website.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "main" branch
5. Click "Save"
6. Wait a few minutes for deployment
7. Your site will be live at: `https://YOUR_USERNAME.github.io/uncle-egg-rice-website/`

## Setting Up Google Forms Contact Integration

The contact form is ready to integrate with Google Forms. Follow these steps:

### Step 1: Create a Google Form

1. Go to [Google Forms](https://forms.google.com)
2. Create a new form with these fields:
   - Name (Short answer)
   - Email (Short answer)
   - Phone (Short answer)
   - Message (Paragraph)

### Step 2: Get Form Entry IDs

1. Click "Preview" (eye icon) on your form
2. Right-click on the page and select "Inspect" or "View Page Source"
3. Search for `entry.` - you'll find IDs like:
   - `entry.123456789` (for Name)
   - `entry.987654321` (for Email)
   - `entry.555555555` (for Phone)
   - `entry.777777777` (for Message)

### Step 3: Update contact.html

Open `contact.html` and modify the JavaScript in `js/script.js`:

Replace the form submission code with:

```javascript
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const message = formData.get('message');

        // Google Form URL - Replace with your actual form ID
        const googleFormURL = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse';

        // Create form data for Google Forms - Replace entry IDs with your actual IDs
        const googleFormData = new FormData();
        googleFormData.append('entry.123456789', name);      // Replace with your Name entry ID
        googleFormData.append('entry.987654321', email);     // Replace with your Email entry ID
        googleFormData.append('entry.555555555', phone);     // Replace with your Phone entry ID
        googleFormData.append('entry.777777777', message);   // Replace with your Message entry ID

        // Submit to Google Forms
        fetch(googleFormURL, {
            method: 'POST',
            mode: 'no-cors',
            body: googleFormData
        }).then(() => {
            document.getElementById('formSuccess').style.display = 'block';
            contactForm.reset();
            setTimeout(() => {
                document.getElementById('formSuccess').style.display = 'none';
            }, 5000);
        }).catch(() => {
            document.getElementById('formError').style.display = 'block';
        });
    });
}
```

### Step 4: Get Your Form ID

1. In your Google Form, click "Send"
2. Select the link icon
3. Copy the URL - it looks like: `https://docs.google.com/forms/d/e/FORM_ID_HERE/viewform`
4. Extract the FORM_ID and use it in step 3

## Adding Images

The website currently uses emoji placeholders for images. To add real images:

1. Place your images in the `images/` folder
2. Update the image references in the HTML files:

Example locations to update:
- Hero section background
- Dish cards
- About page images
- Review gallery
- Food photos

Replace placeholder divs like:
```html
<div class="placeholder-dish">🍚</div>
```

With actual images:
```html
<img src="images/egg-rice.jpg" alt="Egg Rice">
```

### Recommended Image Sizes

- Hero images: 1920x1080px
- Dish photos: 800x600px
- Gallery photos: 600x600px
- Logo: 200x200px

## Customization

### Colors

Edit CSS variables in `css/styles.css`:

```css
:root {
    --primary-color: #d32f2f;      /* Red */
    --secondary-color: #fbc02d;    /* Yellow */
    --accent-color: #ff5722;       /* Orange-Red */
    --dark-bg: #1a1a1a;            /* Black */
}
```

### Contact Information

Update phone number, address, and hours in all HTML files where they appear:
- Navigation
- Contact sections
- Footer

### Social Media Links

Update social media links in the footer of all HTML pages:
```html
<div class="social-icons">
    <a href="YOUR_INSTAGRAM_URL" class="social-icon">📷</a>
    <a href="YOUR_YOUTUBE_URL" class="social-icon">▶️</a>
</div>
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. Optimize images before uploading (use tools like TinyPNG)
2. Use WebP format for better compression
3. Enable caching on your hosting
4. Minify CSS and JS for production (optional)

## Local Development

To test locally:

1. Simply open `index.html` in your browser
2. Or use a local server:
   ```bash
   # Python 3
   python -m http.server 8000

   # Python 2
   python -m SimpleHTTPServer 8000

   # Node.js (if you have npx)
   npx http-server
   ```
3. Visit `http://localhost:8000`

## SEO Checklist

- ✅ Meta descriptions on all pages
- ✅ Title tags optimized
- ✅ Schema.org markup for LocalBusiness
- ✅ Semantic HTML structure
- ✅ Alt tags for images (add when you upload images)
- ✅ Mobile responsive
- ✅ Fast loading
- ✅ Sitemap (recommended to add)

## Support

For issues or questions about this website:
- Email: support@example.com (update with your email)
- Phone: 09686208474

## License

© 2024 Uncle Egg Rice Corner. All rights reserved.

---

**Built with ❤️ for Uncle Egg Rice Corner**

*Note: This is a static website with no backend. All data is hardcoded in HTML. For dynamic functionality (like a real database for menu items), you would need to add a backend system.*
