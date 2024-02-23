import { css } from "hono/css";

export const Profile = () => {
  const profileStyle = css`
    margin-top: 30px;
    padding: 18px 12px;
    background-color: rgb(15 23 42 / 1);
    border-radius: 6px;
  `
  const profileTextStyle = css`
    margin-top: 12px;
  `
  return (
    <section class={profileStyle}>
      <h2>WhyK</h2>
      <p class={profileTextStyle}>フロントエンドエンジニア。同人サークルのフルスタックエンジニアもしてる。<br />TypeScriptとDenoとHonoが好き。自分用のモジュールを他の人が使えるようにするのがちょっと好き。</p>
    </section>
  )
}