import { createGlobalStyle} from "styled-components";

export const theme = {
  colors: {
    primary: "hsl(0, 0%, 15%)",
    secondary: "hsl(0, 0%, 100%)",
  },
};

export const GlobalStyle = createGlobalStyle`
  :root {
    --font-size-base: 1rem;
    --font-size-sm: clamp(0.875rem, 1vw + 0.5rem, 1rem); 
    --font-size-md: clamp(1rem, 2vw + 0.5rem, 1.25rem); 
    --font-size-lg: clamp(1.25rem, 2.5vw + 0.5rem, 1.5rem); 
    --font-size-xl: clamp(1.5rem, 3vw + 0.5rem, 2rem); 
  }

  * {
    font-family: "Poppins", sans-serif;
    font-style: normal;  
  }
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  -moz-text-size-adjust: none;
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
  font-size: var(--font-size-base);
}

body, h1, h2, h3, h4, p,
figure, blockquote, dl, dd {
  margin-block-end: 0;
}

ul[role='list'],
ol[role='list'] {
  list-style: none;
}

body {
  min-height: 100vh;
  line-height: 1.5;
}

h1, h2, h3, h4,
button, input, label {
  line-height: 1.1;
}

h1, h2,
h3, h4 {
  text-wrap: balance;
}

a:not([class]) {
  text-decoration-skip-ink: auto;
  color: currentColor;
}

a {
  text-decoration: none;
}

img,
picture {
  max-width: 100%;
  display: block;
}

input, button,
textarea, select {
  font-family: inherit;
  font-size: inherit;
}

textarea:not([rows]) {
  min-height: 10em;
}

:target {
  scroll-margin-block: 5ex;
}`;


