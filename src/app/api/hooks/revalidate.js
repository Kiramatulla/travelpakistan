import { SIGNATURE_HEADER_NAME, isValidSignature } from "@sanity/webhook";

const handler = async (req, res) => {
  try {
    const signature = req.headers[SIGNATURE_HEADER_NAME]?.toString();

    if (
      !isValidSignature(
        JSON.stringify(req.body),
        signature,
        process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
      )
    ) {
      return res.status(401).json({ msg: "Invalid Request" });
    }

    const { slug } = req.body;

    await res.revalidate(`/tours/${slug}`);
    await res.revalidate(`/tours`);

    return res.status(200).json({ revalidated: true });
  } catch (err) {
    console.error("Revalidation error:", err);
    return res.status(500).json({ err: "Something went wrong" });
  }
};

export default handler;
