import { client } from '@/sanity/lib/client'

const sitemap = async () => {
  const posts = await client.fetch(`*[_type == "tour" || _type == "treks" || _type == "blogs"]{
    _updatedAt,
    slug
  }`)

  const postEntries = posts.map((post) => ({
    url: `https://travelpakistan.vercel.app//${post.slug.current}`,
    lastModified: post._updatedAt
  }))

  return postEntries
}

export default sitemap