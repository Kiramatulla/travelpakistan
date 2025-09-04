// components/WebStories.jsx
import WebStoryCard from "./WebStoryCard";

export default function WebStories({ tours }) {
  if (!tours?.slides?.length) return null;

  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold mb-4 pl-8">
        Shorts from {tours.title}
      </h2>
      <div className="flex overflow-x-auto snap-x snap-mandatory pl-1 gap-2">
        {tours.slides.map((slide, index) => (
          <WebStoryCard key={`${tours._id}-${index}`} slide={slide} />
        ))}
      </div>
    </section>
  );
}
