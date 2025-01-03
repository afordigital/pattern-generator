import { createContext } from "react";

export type ContextType = {
  pattern: Pattern;
  setPattern: (pattern: Pattern) => void;
};

export type Pattern = {
  backgroundColor: string;
  frontColor: string;
  opacity: number;
  spacing: number;
  name: string;
};

export const PatternContext = createContext<ContextType | undefined>(undefined);
