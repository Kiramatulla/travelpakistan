"use client";
import {
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  FacebookIcon,
  WhatsappIcon,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "next-share";

export default function SocialShare({ tours }) {
  const url = `https://www.violatourspk.com/tours/${tours.slug.current}`;
  const title = tours.title;

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-2 text-center">
        Share this tour:
      </h3>
      <div className="flex gap-2 justify-center items-center">
        <FacebookShareButton url={url} quote={title}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>

        <WhatsappShareButton url={url} title={title}>
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>

        <TwitterShareButton url={url} title={title}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>

        <LinkedinShareButton url={url} title={title}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      </div>
    </div>
  );
}
