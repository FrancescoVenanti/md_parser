import { Keywords } from "@/app/core/keywords";
import { Token } from "@/app/core/tokenizer";

interface CompProps {
  content: Token[];
}

const ShowToken = ({ content }: CompProps) => {
  return (
    <div>
      {content.map((token, index) => (
        <span key={index}>
          {typeof token.tokenType === "string"
            ? token.tokenType
            : Keywords[token.tokenType]}
        </span>
      ))}
    </div>
  );
};

export default ShowToken;
