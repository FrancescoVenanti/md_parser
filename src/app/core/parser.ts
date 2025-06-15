import { Token, TokenType } from "./tokenizer";
import { ASTNode, InlineNode } from "./types";

export function parseLine(tokens: Token[]): ASTNode {
  let level = 0;
  let i = 0;

  while (i < tokens.length && tokens[i].tokenType === TokenType.hashtag) {
    level++;
    i++;
  }

  if (i < tokens.length && tokens[i].tokenType === TokenType.space && level > 0)
    return {
      type: "heading",
      level: level,
      content: parseInline(tokens.slice(i + 1)),
    };
  return {
    type: "paragraph",
    content: parseInline(tokens),
  };
}

function parseInline(tokens: Token[]): InlineNode[] {
  let result: InlineNode[] = [];
  let buffer: Token[] = [];
  let italic = false;
  let bold = false;
  let code = false;
  for (let i = 0; i < tokens.length; i++) {
    let t = tokens[i];

    if (t.tokenType === TokenType.backtick) {
      code = true;
      buffer = [];
    } else if (t.tokenType === TokenType.asterisk) {
      if (tokens[i + 1].tokenType === TokenType.asterisk) {
        bold = true;
        i++;
        // parse bold till next **
      } else {
        italic = true;
        // parse italic till next *
      }
    } else {
      if (code) {
      }
    }
  }
  //     if (t.tokenType === TokenType.asterisk && !italic) {
  //       italic = true;
  //       buffer = [];
  //     } else if (t.tokenType === TokenType.asterisk && italic) {
  //       result.push({ type: "italic", content: parseInline(buffer) });
  //       italic = false;
  //       buffer = [];
  //     } else if (italic) {
  //       buffer.push(t);
  //     } else {
  //       result.push({
  //         type: "text",
  //         value: t.value,
  //       });
  //     }
  //   }
  //   if (italic)
  //     result.push({
  //       type: "text",
  //       value: buffer.map((t) => t.value).join(" "),
  //     });
  return result;
}
