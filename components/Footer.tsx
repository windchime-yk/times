import { css } from "hono/css";

export const Footer = () => {
  const correntYear = new Date().getFullYear();

  const copyrightStyle = css`
    text-align: center;
    padding-top: 6px;
    padding-bottom: 6px;
  `

  return (
    <footer>
      <p class={copyrightStyle}>
        <small>&copy; {correntYear} WhyK</small>
      </p>
    </footer>
  );
};
