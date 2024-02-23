import { Layout } from "~/components/Layout.tsx";
import { Profile } from "~/components/Profile.tsx";
import { Posts } from "~/components/Posts.tsx";

export const TopPage = () => {
  return (
    <Layout>
      <Profile />
      <Posts />
    </Layout>
  );
};
