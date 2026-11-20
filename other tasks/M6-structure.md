
## 1. File Organization Before
Before optimization, the JavaScript file was placed inside an extra nested folder, which made the file path inconsistent with the path used in the HTML pages.

```text
Portfolio/
│
├── index.html
├── about.html
├── skills.html
├── contact.html
│
├── css/
│   └── style.css
│
├── js/
│   └── js/
│       └── script.js
│
└── images/
    └── website images
```

## 2. File Organization After
After optimization, the JavaScript file was moved to the correct `js` folder. Files were organized according to their purpose.

```text
Portfolio/
│
├── index.html
├── about.html
├── skills.html
├── contact.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
└── images/
    └── website images
```

## 3. Changes and Reasons
| Changes Made | Reason |
|---|---|
| Moved `script.js` from the nested `js/js` folder to `js/`. | To make the JavaScript file path consistent and easier to locate. |
| Kept all HTML pages in the main project folder. | To make the website pages easy to access and manage. |
| Separated CSS files into the `css` folder. | To keep the website's styling separate from its HTML structure. |
| Separated JavaScript files into the `js` folder. | To keep the website's functionality separate and organized. |
| Kept website images inside the `images` folder. | To make image assets easier to locate and manage. |
| Updated the HTML script references to `js/script.js` across all four pages. | To ensure that every page loads the correct JavaScript file. |

## 4. Conclusion
The project structure was improved by organizing files according to their roles and correcting the JavaScript file location. This made the project easier to navigate, maintain, and update. It also helped ensure that all four HTML pages correctly connected to the shared CSS and JavaScript files.