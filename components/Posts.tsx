import { css } from "hono/css";

export const Posts = () => {
  const postsWrapperStyle = css`
    margin-top: 30px;
  `
  const postsStyle = css`
    padding: 18px 21px;
    background-color: rgb(15 23 42 / 1);
    border-radius: 6px;

    li:first-child {
      border-top: none;
      padding-top: 0;
    }
    li:last-child {
      padding-bottom: 0;
    }
  `
  const postItemStyle = css`
    list-style: none;
    padding-top: 30px;
    padding-bottom: 30px;
    border-top: 1px solid #aaa;
  `
  const postTimeStyle = css`
    display: block;
    text-align: right;
    margin-top: 21px;
  `

  return (
    <section class={postsWrapperStyle}>
      <h2>投稿一覧</h2>
      <ul class={postsStyle}>
        <li class={postItemStyle}>
          <p>テストテストテストテストテストテストテストテストテストテストテストテストテストテスト</p>
          <time class={postTimeStyle}>2024/03/01 00:00:00</time>
        </li>
        <li class={postItemStyle}>
          <p>テストテストテストテストテストテストテストテストテストテストテストテストテストテスト</p>
          <time class={postTimeStyle}>2024/03/01 00:00:00</time>
        </li>
        <li class={postItemStyle}>
          <p>テストテストテストテストテストテストテストテストテストテストテストテストテストテスト</p>
          <time class={postTimeStyle}>2024/03/01 00:00:00</time>
        </li>
      </ul>
    </section>
  )
}