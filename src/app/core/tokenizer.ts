import { Keywords } from "./keywords";

type Tokentype = Keywords | string;
export class Token {
  tokenType: Tokentype;

  constructor(tokenType: Tokentype) {
    this.tokenType = tokenType;
  }
}

export class Tokenizer {
  constructor() {}

  tokenize(content: string): Token[] {
    // let a: Keywords = Keywords.bold;
    // let b: Token = new Token(Keywords.code, "aaaa");
    // keyword.bold = "***"
    let tokenList: Token[] = [];
    content.split(" ").map((c: string) => {
      console.log(c);
      tokenList.push(new Token(this.getTokenType(c)));
    });
    return tokenList;
  }

  getTokenType(value: string): Keywords | string {
  let result: Keywords | string;
  switch (value) {
    case "#":
      result = Keywords.header_1;
      break;
    case "##":
      result = Keywords.header_2;
      break;
    case "###":
      result = Keywords.header_3;
      break;
    case "####":
      result = Keywords.header_4;
      break;
    case "#####":
      result = Keywords.header_5;
      break;
    case "######":
      result = Keywords.header_6;
      break;
    case "":
      result = Keywords.paragraph;
      break;
    case "**":
    case "__":
      result = Keywords.bold;
      break;
    case "*":
    case "_":
      result = Keywords.italic;
      break;
    case "1.":
      result = Keywords["o-list"];
      break;
    case "-":
    case "+":
      result = Keywords["u-list"];
      break;
    case "`":
    case "```":
      result = Keywords.code;
      break;
    case "---":
    case "***":
    case "___":
      result = Keywords["horizontal-line"];
      break;
    default:
      result = value;
      break;
  }
  return result;
}
}
