import { css, Style } from "hono/css";
import { Child } from "hono/jsx";
import { Footer } from "~/components/Footer.tsx";
import { Header } from "~/components/Header.tsx";

interface LayoutProps {
  title?: string;
  children: Child;
}

export const Layout = (props: LayoutProps) => {
  const { title, children } = props;
  const SITE_TITLE = "times.whyk.dev";

  const bodyStyle = css`
    min-height: 98vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
  `;

  return (
    <html lang="ja">
      <head>
        <Style />
        <title>{title ? `${title} | ${SITE_TITLE}` : SITE_TITLE}</title>
      </head>
      <body class={bodyStyle}>
        <Header title={SITE_TITLE} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};
