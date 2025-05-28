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

  getTokenType(value: string): Tokentype {
    let result: Tokentype;
    switch (value) {
      case "#":
        result = Keywords.header_1;
        break;
      case "##":
        result = Keywords.header_2;
        break;
      default:
        result = value;
        break;
    }
    return result;
  }
}
