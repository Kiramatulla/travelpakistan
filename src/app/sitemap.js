import { client } from '@/sanity/lib/client';

const sitemap = async () => {
  const posts = await client.fetch(`*[_type == "tour" || _type == "treks" || _type == "blogs"]{
    _type,
    _updatedAt,
    slug
  }`);

  const postEntries = posts.map((post) => {
    let basePath = '';

    if (post._type === 'tour') basePath = 'tours';
    else if (post._type === 'treks') basePath = 'trekking';
    else if (post._type === 'blogs') basePath = 'blogs';

    return {
      url: `https://www.violatourspk.com/${basePath}/${post.slug.current}`,
      lastModified: post._updatedAt, // You had `_createdAt` mistakenly
    };
  });

  return postEntries;
};

export default sitemap;
