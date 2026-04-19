# Python Teacher - Educational Website

A modern, responsive educational website for a Python teacher built with pure HTML, CSS, and vanilla JavaScript.

## Features

- 🌟 **Modern & Clean Design**: Minimal UI with soft colors and simple layout
- 📱 **Fully Responsive**: Works perfectly on mobile, tablet, and desktop
- 🌙 **Dark Mode**: Toggle between light and dark themes
- 📚 **5 Complete Pages**: Home, Notes, Announcements, Contact, Institute Info
- 🔗 **WhatsApp Integration**: Floating WhatsApp button for quick contact
- ✨ **Smooth Animations**: Hover effects and scroll animations
- 🎯 **Easy to Customize**: Simple HTML/CSS structure

## Pages

### 1. Home Page (`index.html`)
- Hero section with title and introduction
- Call-to-action buttons (View Notes, Join WhatsApp)
- Feature cards highlighting course benefits
- Clean, professional design

### 2. Notes Page (`notes.html`)
- CSS Grid layout for study materials
- Square cards for each day (Day 1-12)
- Each card opens a PDF (simulated)
- Responsive grid that adapts to screen size

### 3. Announcements Page (`announcements.html`)
- Date-stamped announcement list
- Clean timeline-style layout
- Easy to scan and read
- Hover effects for better interactivity

### 4. Contact Page (`contact.html`)
- Email and phone contact information
- Working contact form with validation
- WhatsApp integration
- Available hours display

### 5. Institute Information Page (`institute.html`)
- Complete institute details
- Address and timing information
- Course offerings with fees
- Facilities and contact information

## Technical Features

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Touch-friendly interface
- Optimized for all screen sizes

### Dark Mode
- Persistent dark mode using localStorage
- Smooth transitions
- Optimized color schemes
- Icon changes to reflect mode

### Interactive Elements
- Hover effects on all interactive elements
- Smooth scrolling navigation
- Mobile hamburger menu
- Scroll-to-top button
- Form validation and notifications

### Performance
- Optimized CSS with variables
- Minimal JavaScript
- Fast loading times
- Clean, semantic HTML

## File Structure

```
Python batch/
├── index.html          # Home page
├── notes.html          # Notes page
├── announcements.html  # Announcements page
├── contact.html        # Contact page
├── institute.html      # Institute information page
├── styles.css          # Complete styling
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #3776ab;    /* Python blue */
    --secondary-color: #4b8bbe;
    --accent-color: #ffd43b;     /* Python yellow */
    /* ... other variables */
}
```

### Contact Information
Update contact details in:
- `contact.html` - Contact form and information
- `institute.html` - Institute contact details
- All pages - Footer links and WhatsApp button

### Notes/PDFs
Replace the PDF opening function in `script.js`:
```javascript
function openPDF(pdfName) {
    window.open(`path/to/your/pdfs/${pdfName}`, '_blank');
}
```

## Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers

## Getting Started

1. **Download** all files to your project folder
2. **Open** `index.html` in your web browser
3. **Customize** colors, text, and contact information as needed
4. **Add** your actual PDF files to the notes section
5. **Deploy** to your web server

## Features Implementation

### Navigation
- Sticky navigation bar
- Active page highlighting
- Mobile hamburger menu
- Smooth scroll animations

### Notes Grid
- CSS Grid for responsive layout
- Square cards with hover effects
- Click to open PDFs
- Mobile-optimized grid

### Contact Form
- Client-side validation
- Email format checking
- Success/error notifications
- Clean form design

### Dark Mode
- Toggle switch in navigation
- Persistent user preference
- Smooth color transitions
- Optimized contrast ratios

## Design Principles

- **Simplicity**: Clean, uncluttered interface
- **Accessibility**: Semantic HTML and proper contrast
- **Performance**: Optimized for fast loading
- **Usability**: Intuitive navigation and interactions
- **Maintainability**: Well-organized, commented code

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using pure HTML, CSS, and JavaScript**
