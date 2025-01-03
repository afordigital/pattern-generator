import { ReactNode, useState } from "react";
import { Pattern, PatternContext } from "./patternContext";

export const DEFAULT_PATTERN: Pattern = {
  backgroundColor: "#f0f0f0",
  frontColor: "#6c63ff",
  opacity: 0.2,
  spacing: 50,
  name: "square",
};

export const PatternProvider = ({ children }: { children: ReactNode }) => {
  const [pattern, setPattern] = useState<Pattern>(DEFAULT_PATTERN);
  const [element, setElement] = useState<HTMLElement | null>(null);

  return (
    <PatternContext.Provider
      value={{
        pattern,
        setPattern,
        element,
        setElement,
      }}
    >
      {children}
    </PatternContext.Provider>
  );
};
