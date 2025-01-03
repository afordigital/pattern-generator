import { useContext } from "react";
import { PatternContext } from "./patternContext";

export const usePatternContext = () => {
  const context = useContext(PatternContext);
  if (!context) {
    throw new Error("usePatternContext must be used within PatternProvider");
  }
  return context;
};
