import { Token } from "@/app/core/tokenizer";

interface CompProps {
  content: Token[];
}

const ShowToken = ({ content }: CompProps) => {
  return (
    <div>
      {content.map((token, index) => (
        <div key={index}>
          <span className="me-4">{token.value} | | </span>
          <span>{token.position.join(" - ")}</span>
        </div>
      ))}
    </div>
  );
};

export default ShowToken;
