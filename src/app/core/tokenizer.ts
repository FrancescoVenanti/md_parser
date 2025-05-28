import { Keywords } from "./keywords";

class Token {
  tokenType: Keywords;
  value: string;

  constructor(tokenType: Keywords, value: string) {
    this.tokenType = tokenType;
    this.value = value;
  }
}

class Tokenizer {
  constructor() {}

  tokenize() {
    let a: Keywords = Keywords.bold;
    let b: Token = new Token(Keywords.code, "aaaa");

    // keyword.bold = "***"
  }
}
