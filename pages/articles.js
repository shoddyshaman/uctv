import {useState} from 'react'
import { server } from '../config'
import BlogArticles from '../components/blogArticles'

export default function Articles({articles}) {
  return (
    <>
        
        <BlogArticles articles={articles} blogHeading='All articles' blogHeadingExcerpt="A collection of all my works including satire's, stories, poetry and more! "/>
        
    </>
  )
}


export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/article`)
  // console.log(res)
  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
}

