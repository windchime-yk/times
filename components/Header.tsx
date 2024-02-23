import { css } from "hono/css";

interface HeaderProps {
  title: string;
}

export const Header = (props: HeaderProps) => {
  const { title } = props;

  const headerStyle = css`
    margin: 6px 6px 0 6px;
    padding: 15px 30px;
    background-color: rgb(15 23 42 / 1);
    border-radius: 6px;
  `
  const titleStyle = css`
    margin: 0;
    transform: skewX(-10deg);
  `
  const titleLinkStyle = css`
    text-decoration: none;
    font-family: fantasy;
    font-weight: 900;
  `

  return (
    <header class={headerStyle}>
      <h1 class={titleStyle}>
        <a class={titleLinkStyle} href="/">{title}</a>
      </h1>
    </header>
  );
};
