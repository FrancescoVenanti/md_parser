// type Tokentype = Keywords | string;
export class Token {
  tokenType: TokenType;
  position: [number, number];
  value: string;

  constructor(position: [number, number], value: string, tokenType: TokenType) {
    this.position = position;
    this.value = value;
    this.tokenType = tokenType;
  }
}

export class Tokenizer {
  constructor() {}

  tokenize(content: string): Token[] {
    let tokenList: Token[] = [];
    let row: number = 0;
    let column: number = 0;

    let token = "";
    for (let i = 0; i <= content.length; i++) {
      let c = content[i];
      if (c == "\n") {
        row++;
        column = 0;
      }
      console.log(c);
      let tokenType = this.getTokenType(c);
      if (typeof tokenType == "string") {
        token += c;
      } else {
        if (token != "") {
          tokenList.push(
            new Token(
              [c == "\n" ? row - 1 : row, column - 1],
              token,
              TokenType.identifier
            )
          );
          token = "";
        }
        tokenList.push(new Token([row, column], c, tokenType));
      }
      column++;
    }
    return tokenList;
  }

  getTokenType(value: string): TokenType | string {
    const valueMap: Record<string, TokenType> = {
      "#": TokenType.hashtag,
      "*": TokenType.asterisk,
      "\n": TokenType.br,
      _: TokenType.underscore,
      "`": TokenType.backtick,
      "~": TokenType.tilde,
      "-": TokenType.dash,
      "+": TokenType.plus,
      "=": TokenType.equals,
      "[": TokenType.leftBracket,
      "]": TokenType.rightBracket,
      "(": TokenType.leftParen,
      ")": TokenType.rightParen,
      "{": TokenType.leftBrace,
      "}": TokenType.rightBrace,
      "<": TokenType.leftAngle,
      ">": TokenType.rightAngle,
      "|": TokenType.pipe,
      "!": TokenType.exclamation,
      ":": TokenType.colon,
      ";": TokenType.semicolon,
      ",": TokenType.comma,
      ".": TokenType.dot,
      "?": TokenType.question,
      "/": TokenType.slash,
      "\\": TokenType.backslash,
      '"': TokenType.doubleQuote,
      "'": TokenType.singleQuote,
      " ": TokenType.space,
      "\t": TokenType.tab,
      "\r": TokenType.cr,
    };
    if (value in valueMap) {
      return valueMap[value];
    }
    return value;
  }
}

enum TokenType {
  asterisk,
  hashtag,
  identifier,
  br,
  underscore,
  backtick,
  tilde,
  dash,
  plus,
  equals,
  leftBracket,
  rightBracket,
  leftParen,
  rightParen,
  leftBrace,
  rightBrace,
  leftAngle,
  rightAngle,
  pipe,
  exclamation,
  colon,
  semicolon,
  comma,
  dot,
  question,
  slash,
  backslash,
  doubleQuote,
  singleQuote,
  space,
  tab,
  cr,
}
