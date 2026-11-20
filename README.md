# Miguelitrato | Personal Portfolio

## Project Overview

Miguelitrato is my personal portfolio website showcasing my work, skills, and interests as a Multimedia Arts student. It highlights my passion for photography, filmmaking, graphic design, and visual storytelling.

The website serves as a digital portfolio where visitors can learn more about me, explore my skills, and view my creative work.

## Features

- Responsive website design
- Navigation menu toggle
- Dark and light mode
- Dynamic content display using JavaScript arrays
- Contact form with JavaScript validation
- Visitor name and last visit tracking using Local Storage
- Persistent settings using the `portfolioSettings` Local Storage key

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Local Storage
- Visual Studio Code
- Live Server

## Website Pages

- **Home:** Introduction and portfolio highlights.
- **About Me:** Information about myself, my interests, and goals.
- **Skills:** Showcases my creative and technical skills.
- **Contact:** Contact form for inquiries.

## Live Website

[http://miguelitrato.great-site.net](http://miguelitrato.great-site.net)

## Repository

GitHub Repository: https://github.com/kmdadis/miguelitrato-portfolio

## Project Structure

it0043-portfolio/
├── index.html
├── about.html
├── skills.html
├── contact.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   └── IMG_0281.jpg
└── assets/
    └── screens/
        ├── storage-before.png
        ├── storage-fallback.png
        ├── mobile-375.png
        ├── tablet-768.png
        └── desktop-1440.png

## Setup Instructions

1. Download or clone the project repository.
2. Open the project folder in Visual Studio Code.
3. Open the project using Live Server for local development and testing.
4. Open `index.html` to explore the website.

Live Server is recommended for local development because browser behavior for Local Storage and other features may vary when opening the HTML file directly.

## Local Storage and Visitor Information

When no saved settings exist or the stored JSON is invalid, the website uses:

```javascript
{
    theme: "light",
    visitorName: "",
    lastVisit: ""
}
```

The website then asks for the visitor's name and updates `lastVisit` with the current date and time when the page loads.

### Corrupt Storage Test

I changed the `portfolioSettings` value to `broken` in Developer Tools and reloaded the page. The console displayed “Stored settings are corrupted. Using defaults.” The website remained usable and returned to Light Mode.

Screenshots are saved in `assets/screens/`.

## Contact Form Limitation

The contact form performs client-side validation using JavaScript. It checks whether required fields are completed and whether the email format is valid.

When valid inputs are submitted, it displays a success message.

**Important:** The contact form does not currently send actual emails or store submitted messages on a server. A backend or email service would be needed to enable message delivery.

## Testing and Compatibility

The website was tested using Google Chrome on a desktop computer.

| Test Area | Testing Performed |
|---|---|
| Mobile viewport | 375px |
| Tablet viewport | 768px |
| Desktop viewport | 1440px |
| Navigation | Tested menu toggle and page links |
| Dark and Light Mode | Tested theme switching and persistence after refresh |
| Contact Form | Tested empty fields, invalid email, and valid inputs |
| Local Storage | Checked saved theme, visitor name, and last visit |
| Images | Confirmed website images display correctly |
| Cross-page Testing | Tested all four website pages |
| Public Access | Confirmed website opens using mobile data |

Testing was performed through manual browser testing, visual inspection, and browser Developer Tools.

## Accessibility

The website includes image alternative text and form labels where provided in the HTML. Further accessibility improvements can include keyboard-only navigation and visible focus indicators.

## Known Issues and Limitations
- The contact form validates inputs but does not send actual messages.
- The website depends on browser Local Storage for saved visitor settings.
- Browser storage restrictions may affect features that depend on Local Storage.
- HTTPS access and full accessibility compliance have not been confirmed.

## Deployment and Recovery
The website is hosted on InfinityFree using the `htdocs` directory as its website root.

To recover from a failed deployment:
1. Keep a backup of the last working project version.
2. Restore the previous working HTML, CSS, JavaScript, and image files.
3. Upload the restored files to the correct `htdocs` directory.
4. Test the website pages and functionality again.

## Credits

Created and developed by Khallel Miguel M. Dadis.

This website was developed as part of my Multimedia Arts coursework at FEU Institute of Technology.

## Final Deployment Results
- All four pages load correctly online.
- Navigation links and menu toggle work.
- Dark and light mode work and persist after refresh.
- Contact form validation works.
- Images display correctly.
- Local Storage saves theme, visitor name, and last visit.
- Website works at 375px, 768px, and 1440px.
- Website is accessible using mobile data.
- README.md has been created.