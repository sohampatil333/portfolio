import { useState, useEffect } from "react";

export default function Typewriter({ words, delay = 80, pause = 2200 }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = words[currentWordIndex];

    const handleTyping = () => {
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), pause);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? delay / 2 : delay);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, words, delay, pause, currentWordIndex]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
      {currentText}
      <span className="inline-block w-[2px] h-[1.1em] bg-cyan-400 ml-0.5 align-middle animate-pulse" />
    </span>
  );
}
