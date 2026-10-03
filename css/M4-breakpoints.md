     Responsive Breakpoints
760px — Navigation layout: I chose this breakpoint because the navigation links begin to need more space and can wrap as the viewport becomes narrower.
700px — Home page content layout: I chose this breakpoint because the Home page photo and paragraph need to stack before they become squeezed beside each other.
650px — About page card layout: I chose this breakpoint because the About cards need to change from two columns to one column so their text remains readable on smaller screens.
480px — Small-screen spacing and heading sizes: I chose this breakpoint because very narrow screens need smaller spacing and headings to prevent the content from feeling cramped.

     Answer to the Breakpoint Challenges
At 760px, the navigation links are still usable and wrap cleanly because nav uses Flexbox with flex-wrap: wrap. At 761px, the links remain on one line, while at 759px, they can wrap or center when the available space becomes narrower. The 760px breakpoint is therefore mainly used to keep the navigation organized, not because the links suddenly become unusable.

At 700px, the photo and paragraph begin to feel crowded when they remain beside each other. At 651px, the side-by-side layout becomes more cramped, so stacking the content at 700px gives it enough space. At 320px, my test showed that the stacked layout keeps the photo and paragraph readable.

At 651px, the About cards are still readable but are close to becoming narrow. At 650px, changing them to one column gives each card more space and prevents cramped text. A wider width such as 768px showed that the two-column layout remains comfortable.

At very narrow widths, especially 320px, the heading and main content begin to feel cramped because the available horizontal space is limited. The 480px breakpoint reduces spacing and heading size to prevent this. The changes do not all need to happen at the same point, but I grouped them at 480px because they address the same small-screen spacing problem.

The breakpoints were connected to observed content behavior: the navigation needed wrapping at narrower widths, the Home photo and paragraph needed stacking before they became squeezed, the About cards needed one column for readable text, and the smallest screens needed reduced spacing and heading sizes. The tested widths of 320px, 375px, 650px, 651px, 768px, and 1440px showed that the layout stayed within the viewport and remained readable after the changes.