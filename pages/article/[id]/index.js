import { server } from "../../../config";
import Link from "next/link";
import { useRouter } from "next/router";

const article = ({ article }) => {
  // const router = useRouter()
  // const { id } = router.query

  return (
    <>
      {/* <Meta title={article.title} description={article.excerpt} /> */}
      <div className="bg-white px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {article.title}
          <figure className="mt-16">
          <img
            className="aspect-video rounded-xl bg-gray-50 object-cover"
            src={article.imageUrl}
            alt=""
          />
        </figure>
          </h1>
          <p className="mt-10">{article.content}</p>
          <br />
          <Link href="/articles">Go Back</Link>
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async (context) => {
//   console.log(context);
  const res = await fetch(`${server}/api/article/${context.params.id}`);

  const article = await trim(res.json());

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {

    if (process.env.SKIP_BUILD_STATIC_GENERATION) {
        return {
          paths: [],
          fallback: 'blocking',
        }
      }
      
  const res = await fetch(`${server}/api/article`);
    
  const articles = await res.json();
// console.log(articles[0])

  const ids = articles.map((article) => article.post_id);
    // console.log(ids);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default article;
