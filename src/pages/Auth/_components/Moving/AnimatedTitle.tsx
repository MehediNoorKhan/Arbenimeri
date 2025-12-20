

import { useState, useEffect } from "react";

const AnimatedTitle = () => {
  const fullText = "Moving Services";
  const words = fullText.split(" "); // ["Moving", "&", "Cleaning", "Services"]
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev < fullText.length) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 80); // speed per letter
    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="flex flex-wrap justify-center font-bold text-center">
      {words.map((word, wordIdx) => {
        const isLast = wordIdx === words.length - 1;

        // Responsive text sizes
        const textSizeClasses = "text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px]";

        return (
          <span
            key={wordIdx}
            className={`flex flex-wrap gap-[2px] sm:gap-[3px] md:gap-[4px] mr-3 sm:mr-4 md:mr-5 lg:mr-6 ${textSizeClasses}`}
            style={{ color: isLast ? "#399385" : "#34495e" }}
          >
            {word.split("").map((char, charIdx) => {
              const visible = charIdx < currentIndex; // show letters one by one
              return (
                <span
                  key={charIdx}
                  className="inline-block transition-all duration-500"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(10px)",
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              );
            })}
          </span>
        );
      })}
    </h1>
  );
};

export default AnimatedTitle;
