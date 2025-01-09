import { Pattern } from "./Pattern";
import { patterns } from "@/lib/config";

export const Patterns = () => {
  return (
    <article className="grid flex-grow w-full grid-cols-4 gap-8 px-4 overflow-x-hidden overflow-y-auto">
      {patterns.map((patternName) => {
        return <Pattern patternName={patternName} />;
      })}
    </article>
  );
};
