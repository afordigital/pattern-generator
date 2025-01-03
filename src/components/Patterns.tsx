import { Pattern } from "./Pattern";
import { patterns } from "@/lib/config";

export const Patterns = () => {
  return (
    <article className="grid grid-cols-4 gap-8">
      {patterns.map((patternName) => {
        return <Pattern patternName={patternName} />;
      })}
    </article>
  );
};
