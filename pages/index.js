import client from "../lib/prismadb";
import  Author  from "../components/author";
import Publications from "../components/publications";
import BlogArticles from "../components/blogArticles";
import SignupNewsletter from "../components/signupnewsletter";
import Footer from "../components/footer";
import BookPlug from "../components/bookPlug";
import Testimonials from "../components/testimonials";

export default function Home({ featured }) {

  return (
    <div>
      <Author />
      <Publications />
      <BlogArticles articles={featured} blogHeading="Featured Content" blogHeadingExcerpt=""/>
      <BookPlug />
      <Testimonials />
      <SignupNewsletter />
    </div>
  );
}

export const getStaticProps = async () => {
 const articles = await client.$queryRaw`SELECT * FROM test_data`;
  const featured = articles.filter(article => article.featured === true)
  return {
    props: {
      featured,
    },
  }
}