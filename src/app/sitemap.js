import { client } from '@/sanity/lib/client'

const sitemap = async () => {
  const posts = await client.fetch(`*[_type == "tour" || _type == "treks" || _type == "blogs"]{
    _updatedAt,
    slug
  }`)

  const postEntries = posts.map((post) => ({
    url: `https://www.violatourspk.com///${post.slug.current}`,
    lastModified: post._createdAt
  }))

  return postEntries
}

export default sitemap