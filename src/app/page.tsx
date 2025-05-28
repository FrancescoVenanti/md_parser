import { useEffect, useState } from "react";
import { Tokenizer } from "./core/tokenizer";
import { getMd } from "./utils/utils";
import ShowToken from "@/components/show_token";

export default async function Home() {
  const tokenizer = new Tokenizer();
  const rawMd = await getMd();
  const content = tokenizer.tokenize(rawMd.join());

  return (
    <main className="p-8">
      <h1 className="text-xl font-bold mb-4">Markdown Content</h1>
      <ShowToken content={content} />
    </main>
  );
}
