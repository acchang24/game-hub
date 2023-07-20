import { useState } from "react";
import "./css/ExpandableText.css";

interface Props {
  children?: string;
}

const ExpandableText = ({ children }: Props) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  let shownText: string = "";
  if (children) {
    shownText = children;
    if (!isExpanded) {
      shownText = shownText.slice(0, 300);
      shownText += "...";
    }
  }

  return (
    <>
      <p className="summary">{shownText}</p>
      {
        <button
          className="expand-btn"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Show Less" : "Show More"}
        </button>
      }
    </>
  );
};

export default ExpandableText;
