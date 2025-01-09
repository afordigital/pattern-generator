import { StyleConfig } from "./StyleConfig";
import { Patterns } from "./Patterns";
import { usePatternContext } from "@/context/usePatternContext";

export const PatternLayout = () => {
  const { pattern } = usePatternContext();

  console.log(pattern);

  return (
    <main className="flex flex-col w-full h-screen">
      <div className={`h-screen w-full absolute z-5 ${pattern.name}`}></div>
      <section className="relative z-10 flex flex-col items-center flex-grow w-full max-w-5xl gap-10 py-20 mx-auto overflow-hidden font-sans">
        <h1 className="text-6xl font-extrabold font-grotesk">
          Background Pattern Generator
        </h1>
        <StyleConfig />
        <Patterns />
      </section>
    </main>
  );
};
