import { useEffect, useState } from "react";
import { Token, Tokenizer } from "./core/tokenizer";
import { getMd } from "./utils/utils";
import ShowToken from "@/components/show_token";
import { ASTNode } from "./core/types";
import { parseLine } from "./core/parser";

export default async function Home() {
  const tokenizer = new Tokenizer();
  const rawMd = await getMd();
  const content: Token[][] = rawMd.map((r) => tokenizer.tokenize(r));
  const ast: ASTNode[] = content.map((tokenLine) => parseLine(tokenLine));
  console.log(JSON.stringify(ast));

  return (
    <main className="p-8">
      <h1 className="text-xl font-bold mb-4">Markdown Content</h1>
      {/* {content.map((c, index) => (
        <ShowToken content={c} key={index} />
      ))} */}
      <pre className="whitespace-pre-wrap p-4 rounded text-sm">
        {JSON.stringify(ast)}
      </pre>
    </main>
  );
}
