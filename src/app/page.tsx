import { useEffect, useState } from "react";
import { Token, Tokenizer } from "./core/tokenizer";
import { getMd } from "./utils/utils";
import ShowToken from "@/components/show_token";

export default async function Home() {
  const tokenizer = new Tokenizer();
  const rawMd = await getMd();
  const content: Token[][] = rawMd.map((r) => tokenizer.tokenize(r));

  return (
    <main className="p-8">
      <h1 className="text-xl font-bold mb-4">Markdown Content</h1>
      <p>{rawMd.join(" - - - - ")}</p>
      {content.map((c, index) => (
        <ShowToken content={c} key={index} />
      ))}
    </main>
  );
}
