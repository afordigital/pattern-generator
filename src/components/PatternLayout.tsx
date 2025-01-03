import { StyleConfig } from "./StyleConfig";
import { Patterns } from "./Patterns";
import { usePatternContext } from "@/context/usePatternContext";

export const PatternLayout = () => {
  const { pattern } = usePatternContext();

  console.log(pattern);

  return (
    <>
      <div className={`h-screen w-full absolute z-5 ${pattern.name} `}></div>
      <main
        className={`flex relative z-10 flex-col items-center justify-center h-screen gap-10`}
      >
        <h1 className="text-5xl font-bold">Background Pattern Generator</h1>
        <StyleConfig />
        <Patterns />
      </main>
    </>
  );
};
