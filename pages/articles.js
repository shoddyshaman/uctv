import client from "../lib/prismadb";
import BlogArticles from "../components/blogArticles";

export default function Articles({ articles }) {
  return (
    <>
      <BlogArticles
        articles={articles}
        blogHeading="All articles"
        blogHeadingExcerpt="A collection of all my works including satire's, stories, poetry and more! "
      />
    </>
  );
}

export const getStaticProps = async () => {
  const articles = await client.$queryRaw`SELECT * FROM test_data`;

  return {
    props: {
      articles,
    },
  };
};
