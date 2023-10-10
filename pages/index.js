import { useState } from "react";
import Header from "../components/header";
import { server } from '../config'
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
  const res = await fetch(`${server}/api/article`)
  // console.log(res)
  const articles = await res.json()
  const featured = articles.filter(article => article.featured === true)
  return {
    props: {
      featured,
    },
  }
}