# Jethro Rendon Portfolio Website

## Project Purpose

This portfolio website serves as a comprehensive digital showcase of my professional journey as an SK (Sangguniang Kabataan) Chairman and Computer Science student. The primary objectives are to:

- Present academic and leadership achievements in a professional format
- Demonstrate technical competencies through interactive web development
- Showcase community service projects and their measurable impact
- Provide a centralized platform for professional networking and contact

## Features

### Core Functionality
- **Responsive Navigation**: Fixed header with smooth scroll navigation to all sections
- **Dynamic Hero Section**: Animated introduction with call-to-action buttons and scroll indicators
- **Interactive About Section**: Personal narrative with expandable skill descriptions and achievement statistics
- **Project Portfolio**: Filterable gallery supporting multiple project categories (Web, Mobile, Branding, SK Works)
- **Skills Assessment**: Visual progress indicators with detailed competency descriptions
- **Contact System**: Professional contact form with social media integration
- **Mobile Optimization**: Fully responsive design adapting to all screen sizes

### Technical Features
- **Vanilla JavaScript**: Clean, dependency-free interactive functionality
- **CSS3 Animations**: Smooth transitions and hover effects for enhanced user experience
- **SEO Optimization**: Semantic HTML structure for improved search engine visibility
- **Accessibility**: ARIA labels and keyboard navigation support
- **Performance**: Optimized images and minimal external dependencies
- **Cross-browser Compatibility**: Tested across modern browsers

## Project Structure

```
portfolio-website/
│
├── index.html              # Main HTML document containing all sections
├── style.css               # Complete stylesheet with responsive design rules
├── script.js               # JavaScript for filtering and interactive features
├── igop.cv                 # Downloadable PDF curriculum vitae
│
└── images/                 # Static assets directory
    ├── logowebsite.png     # Navigation logo
    ├── finalbg1.png        # Hero section background
    ├── aboutme2.png        # Personal photograph
    ├── ecom.jpg            # E-commerce project image
    ├── collaboration-apps.jpg # Mobile app project image
    ├── clothing-brands-nine-big-world-45314261.webp # Branding project
    ├── treeplant.jpg       # Environmental project image
    ├── lnk.jpg             # Youth program image
    └── xmassk.jpg          # Community outreach image
```

## Installation Instructions

### Prerequisites
- Modern web browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- Text editor for customization (VS Code, Sublime Text, etc.)
- Local web server for development (optional but recommended)

### Quick Start
1. **Download the Project**
   ```bash
   # Clone from repository
   git clone [your-repository-url]
   cd portfolio-website
   
   # Or download and extract ZIP file
   ```

2. **Direct Browser Opening**
   - Navigate to the project directory
   - Double-click `index.html` to open in default browser
   - All functionality will work immediately

3. **Local Server Setup (Recommended)**
   ```bash
   # Using Python (if installed)
   python -m http.server 8000
   # Then visit: http://localhost:8000
   
   # Using Node.js Live Server
   npm install -g live-server
   live-server
   
   # Using VS Code Live Server extension
   # Right-click index.html → "Open with Live Server"
   ```

## Detailed Usage Guide

### Navigation
- **Header Menu**: Click navigation links for smooth scrolling to sections
- **Logo**: Returns to top of page
- **Scroll Indicator**: Animated element in hero section guides users to content

### Project Filtering System
1. **Filter Buttons**: Located above project grid
   - "All Projects": Shows complete portfolio
   - "Web Design": Displays web development work
   - "Mobile App": Shows mobile application projects
   - "Branding": Presents design and branding work
   - "SK Works": Highlights community service projects

2. **Project Interaction**
   - Hover over project cards for overlay effect
   - Click "View Project" for external links
   - Tags indicate technologies used

### Interactive Skills Section
- **Skill Cards**: Hover or click skill titles in About section
- **Popup Descriptions**: Detailed explanations appear on interaction
- **Progress Indicators**: Visual representation of proficiency levels

### Contact Form
- **Form Fields**: All fields include validation
- **Social Media**: Direct links to professional profiles
- **Contact Information**: Email, phone, and location provided

## Customization Instructions

### Personal Information Updates

1. **Hero Section Modification**
   ```html
   <!-- Line 33-42 in index.html -->
   <h1>
     <span class="serif">[Your Title]</span> 
     <span class="highlight">&amp; [Your Role]</span>
   </h1>
   <p>[Your personal description]</p>
   ```

2. **About Section Content**
   ```html
   <!-- Line 75-85 in index.html -->
   <p>Hello! I'm [Your Name], currently serving as...</p>
   ```

3. **Statistics Updates**
   ```html
   <!-- Line 64-74 in index.html -->
   <div class="stat">
     <h3>[Your Number]</h3>
     <p>[Your Achievement]</p>
   </div>
   ```

### Adding New Projects

1. **Create Project Card**
   ```html
   <div class="project-card [category]">
     <div class="project-img">
       <img src="images/[your-image].jpg" alt="[Project Name]">
       <div class="overlay">
         <a href="[project-url]" target="_blank" class="view-btn">View Project</a>
       </div>
     </div>
     <div class="project-content">
       <h3>[Project Title]</h3>
       <p>[Project description...]</p>
       <div class="tags">
         <span>[Technology]</span>
         <span>[Technology]</span>
       </div>
     </div>
   </div>
   ```

2. **Add Project Image**
   - Place image file in `images/` directory
   - Recommended size: 400x300px or similar aspect ratio
   - Optimize for web (JPEG for photos, PNG for graphics)

### Style Customization

1. **Color Scheme Changes**
   ```css
   /* In style.css, modify these key colors: */
   .highlight { color: #2e6bff; }        /* Primary accent color */
   .btn.primary { background: #2e6bff; } /* Button color */
   ```

2. **Typography Updates**
   ```css
   /* Change fonts in head section of index.html */
   <link href="https://fonts.googleapis.com/css2?family=[YourFont]&display=swap">
   
   /* Update CSS font-family declarations */
   body { font-family: "[YourFont]", sans-serif; }
   ```

### Contact Information Updates
```html
<!-- Line 278-282 in index.html -->
<p><i class="fas fa-envelope"></i> [your-email]@domain.com</p>
<p><i class="fas fa-phone"></i> +[your-phone-number]</p>
<p><i class="fas fa-map-marker-alt"></i>[Your Location]</p>
```

## Browser Testing

### Confirmed Compatibility
- **Chrome**: Versions 90+ (Full functionality)
- **Firefox**: Versions 88+ (Full functionality)
- **Safari**: Versions 14+ (Full functionality)
- **Microsoft Edge**: Versions 90+ (Full functionality)

### Mobile Testing
- **iOS Safari**: iPhone 12+ iOS 14+
- **Android Chrome**: Android 10+ Chrome 90+
- **Responsive breakpoints**: 768px, 900px, 1200px

## Performance Optimization

### Loading Speed
- **Images**: Compressed and optimized
- **CSS**: Single file to minimize HTTP requests
- **JavaScript**: Minimal, vanilla implementation
- **Fonts**: Loaded from Google Fonts CDN with display=swap

### SEO Features
- **Semantic HTML**: Proper heading hierarchy and landmark elements
- **Meta Tags**: Viewport and character encoding specified
- **Alt Text**: All images include descriptive alt attributes
- **Clean URLs**: Single-page application with anchor navigation

## Support and Troubleshooting

### Common Issues
1. **Images not loading**: Check file paths in `images/` directory
2. **Fonts not displaying**: Verify Google Fonts link in HTML head
3. **Filtering not working**: Ensure JavaScript is enabled in browser
4. **Mobile layout issues**: Clear browser cache and test responsive design

### Performance Tips
- Host images locally for faster loading
- Consider image lazy loading for large portfolios
- Minify CSS and JavaScript for production deployment

## License and Usage

This portfolio template is available for educational and personal use. When adapting for your own portfolio:

- Replace all personal content and images
- Update contact information and social media links
- Customize colors and typography to match your brand
- Add your own projects and achievements

---

**Contact Information:**  
Jethro Rendon  
Email: jethro.rendon@wvsu.edu.ph  
Phone: +63 9453424768  
Location: Anini-y, Antique, Philippines