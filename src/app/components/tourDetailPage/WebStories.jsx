// components/WebStories.jsx
import WebStoryCard from "./WebStoryCard";

export default function WebStories({ relatedWebStories }) {
  if (!relatedWebStories?.length) return null;

  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Reels</h2>
      <div className="flex overflow-x-auto snap-x snap-mandatory pl-1 gap-1">
        {relatedWebStories.map((story) =>
          story.slides?.map((slide, index) => (
            <WebStoryCard
              key={`${story._id}-${index}`}
              story={story}
              slide={slide}
            />
          ))
        )}
      </div>
    </section>
  );
}
