import { useState } from "react";
import Header from "../components/header";
import { Author } from "../components/author";
import Publications from "../components/publications";
import BlogArticles from "../components/blogArticles";
import SignupNewsletter from "../components/signupnewsletter";
import Footer from "../components/footer";
import BookPlug from "../components/bookPlug";
import Testimonials from "../components/testimonials";

export default function Home() {
  const [featuredPosts, setFeaturedPosts] = useState([
    {
      title: "इतिहास वाया अक्षय कुमार",
      href: "#",
      category: { name: "Satire", href: "#" },
      description:
        "जम्बूद्वीपे भारतखंडे कलियुगे… शताब्दि 2000 मद्धे फ़िल्मकार के चोले में अवतरित अक्षय कुमार जी ने हाल में बताया कि भारत की नई पीढ़ी को मुग़लकालीन इतिहास के अध्याय विस्तार पूर्वक पढ़ाये जाते हैं पर हिन्दू राजाओं की वीर गाथाओं के बारे में बहुत कम पढ़ाया जाता है, बस दो-चार लाइन. ठीक, क़िताब बनाने वाले नोट कर चुके...",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      imageUrl:
        "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
      readingTime: "6 min",
      author: {
        name: "Umesh Tiwari",
        href: "#",
        imageUrl: "/author.png",
      },
    },
    {
      title: "How to use search engine optimization to drive sales",
      href: "#",
      category: { name: "Video", href: "#" },
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
      date: "Mar 10, 2020",
      datetime: "2020-03-10",
      imageUrl:
        "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
      readingTime: "4 min",
      author: {
        name: "Brenna Goyette",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      title: "Improve your customer experience",
      href: "#",
      category: { name: "Case Study", href: "#" },
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
      date: "Feb 12, 2020",
      datetime: "2020-02-12",
      imageUrl:
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
      readingTime: "11 min",
      author: {
        name: "Daniela Metz",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
  ]);

  return (
    <div>
      <Author />
      <Publications />
      <BlogArticles posts={featuredPosts} blogHeading="Featured Content" blogHeadingExcerpt=""/>
      <BookPlug />
      <Testimonials />
      <SignupNewsletter />
    </div>
  );
}
