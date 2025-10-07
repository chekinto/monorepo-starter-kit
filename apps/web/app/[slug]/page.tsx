import { JSX } from "react";

export default function Page({
  params,
}: {
  params: { slug: string };
}): JSX.Element {
  return <h1>page ko {params.slug}</h1>;
}
