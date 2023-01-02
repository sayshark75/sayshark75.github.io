import { useState, useEffect } from "react";

const useTyping = (yourText) => {
  const [text, setText] = useState("");
  const [fullText, setFullText] = useState(yourText);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 70);
    }
  }, [index]);
  return text;
};

export default useTyping;
