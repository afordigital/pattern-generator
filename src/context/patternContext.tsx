import { createContext } from "react";

export type ContextType = {
  pattern: Pattern;
  setPattern: (pattern: Pattern) => void;
  element: HTMLElement | null;
  setElement: (element: HTMLElement | null) => void;
};

export type Pattern = {
  backgroundColor: string;
  frontColor: string;
  opacity: number;
  spacing: number;
  name: string;
};

export const PatternContext = createContext<ContextType | undefined>(undefined);
