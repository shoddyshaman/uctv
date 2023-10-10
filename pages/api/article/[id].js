import client from "../../../lib/prismadb.ts";

export default async function handler({ query: { id } }, res) {
  const posts = await client.$queryRaw`SELECT * FROM test_data`;
    const filtered = posts.filter((post) => post.post_id === +id)
    // console.log(posts)
    // console.log('filtered:',filtered)
    if (posts.length > 0) {
      // console.log('filtered:',JSON.parse(filtered[0]))
      res.status(200).json(filtered[0]) 
    } else {
      res
        .status(404)
        .json({ message: `Article with the id of ${id} is not found` })
    }
  }


  