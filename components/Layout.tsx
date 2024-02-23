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
  const mainStyle = css`
    max-width: 800px;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
  `

  return (
    <html lang="ja">
      <head>
        <Style>
          {
            css`
              * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
              }
              html {
                background-color: rgb(30 41 59 / 1);
              }
              h1,
              h2,
              li,
              p,
              a {
                color: rgb(248 250 252 / 1);
              }
              
            `
          }
        </Style>
        <title>{title ? `${title} | ${SITE_TITLE}` : SITE_TITLE}</title>
      </head>
      <body class={bodyStyle}>
        <Header title={SITE_TITLE} />
        <main class={mainStyle}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};
