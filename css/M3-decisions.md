# M3 Design Decisions

## Design Tokens

I chose a near-black background with cream text for my portfolio. I placed my colours, spacing values, and text sizes in `:root` so I could use the same design across Home, About, Skills, and Contact.

### Colours

- `--color-background: #111111` — the main page background.
- `--color-text: #f3eee3` — the cream colour for body text.
- `--color-accent: #fff4d6` — used for headings, navigation links, card borders, and buttons.
- `--color-card: #222222` — gives cards and the contact form a surface that stands out from the background.

I chose these colours because I wanted a simple black and cream portfolio. My measured body-text contrast against the background was 16.32:1. The cream accent against the background measured 17.23:1.

### Spacing

- `--space-small: 8px`
- `--space-medium: 16px`
- `--space-large: 32px`

I use the smaller value for close elements such as navigation links, the medium value for gaps, and the large value for sections and cards.

### Typography

- `--type-small: 14px`
- `--type-body: 16px`
- `--type-heading: 32px`

These sizes help separate footer text, paragraphs, and headings. I also chose Helvetica, with Arial as a fallback, for the clean appearance I wanted.

## AI Design Decisions

### Arguments I Accepted

The AI used separate colour tokens for borders, muted text, and hover surfaces. I think those roles could be useful if my design needs more detail later. Its stylesheet also uses five spacing values and headings that resize with the screen, which gives it more options than my three spacing values and fixed heading size.

I accepted the AI's small-screen table idea. Its CSS lets the Skills table scroll horizontally below 700px. My CSS makes the homepage and About cards change to one column below 650px, but it does not include a horizontal scrolling rule for the table. I would consider adding one if I see the table overflow during a phone-width test.

### Arguments I Did Not Adopt

I did not adopt the AI's blue and gold colours because they do not match the black and cream look I chose for my portfolio. The AI's colours passed the contrast pairs we measured: its body text on the page measured 15.85:1, and its gold accent on the page measured 11.30:1. My corresponding pairs measured 16.32:1 and 17.23:1. Both designs exceeded the 4.5:1 target for those tested pairs, so the results did not give me a reason to replace my colours.

I also kept my navigation styling. My links underline on hover and show a 2px outline when focused. The AI used a colour change and a 3px focus outline. Both make hover and keyboard focus visible, but my version fits my simpler design.

## Final Decision

I kept my `css/style.css` as the stylesheet for the four portfolio pages. The AI stylesheet stays in `ai-style.css` as a separate comparison. The measurements support the colour combinations I tested, and my homepage and About layouts change to one column on smaller screens. I may add horizontal scrolling to the Skills table after checking it at a narrow browser width.