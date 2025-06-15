import { Token } from "./tokenizer";

export type ASTNode = BlockNode;

export type InlineNode =
  | { type: "text"; value: string }
  | { type: "bold" | "italic" | "code"; content: InlineNode[] };

export type BlockNode =
  | { type: "heading"; level: number; content: InlineNode[] }
  | { type: "paragraph"; content: InlineNode[] };
