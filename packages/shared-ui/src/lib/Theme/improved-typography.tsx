import { createGlobalStyle, css } from 'styled-components'

export const ImprovedTypography = createGlobalStyle`
  ${({ theme }) => css`
    :root {
      --size-300: 0.75rem;
      --size-400: 1rem;
      --size-500: 1.33rem;
      --size-600: 1.77rem;
      --size-700: 2.36rem;
      --size-800: 3.15rem;
      --size-900: 4.2rem;
    }

    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      background: #f3f3f3;
      color: #252525;
      line-height: 1.5;
      padding: 2rem;
    }

    a:not([class]) {
      color: currentColor;
    }

    :focus {
      outline: 2px dashed;
      outline-offset: 0.25rem;
    }

    main:focus {
      outline: none;
    }

    [href]:hover {
      text-decoration: none;
    }

    h1,
    h2,
    h3,
    h4 {
      font-family: 'Roboto, Poppins';
      line-height: 1.3;
    }

    h1,
    h2 {
      font-weight: 900;
    }

    h1 {
      font-size: var(--size-700);
    }

    h2 {
      font-size: var(--size-600);
    }

    h3 {
      font-size: var(--size-600);
    }

    img {
      max-width: 50rem;
    }

    figcaption {
      font-size: var(--size-300);

      font-style: italic;
      margin-top: 1rem;
    }

    blockquote {
      padding-left: var(--size-600);
      border-left: 5px solid;
      font-style: italic;
    }

    ::selection {
      color: #fff;
      background: rgba(0, 0, 0, 0.99);
    }

    .flow > * + * {
      margin-top: var(--flow-space, 1em);
    }

    p,
    li {
      max-width: 60ch;
    }

    h1 {
      max-width: 15ch;
    }

    h2,
    h3 {
      max-width: 25ch;
    }

    .post {
      --flow-space: var(--size-700);

      width: 90vw;
      width: clamp(16rem, 90vw, 70rem);
      margin-left: auto;
      margin-right: auto;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }

    .post time {
      --flow-space: var(--size-400);
      display: block;
    }

    .post :is(h2, h3) {
      --flow-space: var(--size-900);
    }

    .post :is(h2, h3) + * {
      --flow-space: var(--size-400);
    }

    .post figure,
    .post figure + * {
      --flow-space: var(--size-900);
    }

    @media (min-width: 45em) {
      h1 {
        font-size: var(--size-900);
      }

      h2 {
        font-size: var(--size-700);
      }

      p {
        font-size: var(--size-500);
      }

      figcaption {
        font-size: var(--size-400);
      }

      blockquote p {
        font-size: var(--size-600);
        max-width: 40ch;
      }

      .post time {
        font-size: var(--size-600);
      }
    }
  `}
`
