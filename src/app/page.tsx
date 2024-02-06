import { getFrameMetadata } from "@coinbase/onchainkit";
import type { Metadata } from "next";

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Begin",
    },
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmTG3E1i4kFLvsumZP3bSgAiHvktyGWtrbaSwvaqC3hufR/0.gif`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: "Ghibli Garden",
  description: "A frame showing nature in Ghibli style",
  openGraph: {
    title: "Ghibli Garden",
    description: "A frame showing nature in Ghibli style",
    images: [
      `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmTG3E1i4kFLvsumZP3bSgAiHvktyGWtrbaSwvaqC3hufR/0.gif`,
    ],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Ghibli Garden</h1>
    </>
  );
}
