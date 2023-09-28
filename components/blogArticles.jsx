import Link from 'next/link'

export default function BlogArticles({articles,blogHeading,blogHeadingExcerpt}) {
  return (
    <div className="relative bg-gray-800 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-dark h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-bold text-white sm:text-4xl sm:tracking-tight">
            {blogHeading}
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-white sm:mt-4">
            {blogHeadingExcerpt}
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {articles.map((post) => (
            
            <Link href={`/article/${post.post_id}`} key={post.title}>
            <div  className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a href={''} className="hover:underline">
                      {post.category}
                    </a>
                  </p>
                  <a href={''} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                    <p className="mt-3 text-base text-gray-500">{post.content.substring(0,96)}...</p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href={''}>
                      <span className="sr-only">{post.author_id}</span>
                      <img className="h-10 w-10 rounded-full" src={post.imageUrl} alt="" />
                    </a>
                  </div>
                  <div className="ml-3">
                    {/* <p className="text-sm font-medium text-gray-900">
                      <a href={''} className="hover:underline">
                        {post.author_id}
                      </a>
                    </p> */}
                    <div className="flex space-x-1 text-sm text-gray-500">
                      {/* <time dateTime={post.datetime}>{post.date}</time> */}
                      <span aria-hidden="true">&middot;</span>
                      <span>{post.reading_time} read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
