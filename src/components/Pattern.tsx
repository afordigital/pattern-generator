import { usePatternContext } from "@/context/usePatternContext";
import { toPng } from "html-to-image";
import { useState } from "react";

export const Pattern = ({ patternName }: { patternName: string }) => {
  const { pattern, setPattern, element, setElement } = usePatternContext();
  const [onHover, setOnHover] = useState(false);

  const downloadAsPng = async (element: HTMLElement | null) => {
    if (!element) return;

    const image = await toPng(element as unknown as HTMLElement);
    const link = document.createElement("a");
    link.href = image;
    link.download = `${pattern.name}.png`;
    link.click();
  };

  return (
    <section
      ref={patternName === pattern.name ? setElement : () => {}}
      className="w-[200px] border border-slate-200 h-[200px] bg-white rounded-lg shadow-lg"
    >
      <div
        onClick={() => {
          setPattern({ ...pattern, name: patternName });
        }}
        onMouseEnter={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}
        className={`w-full h-full ${patternName}`}
      >
        {onHover && (
          <div className="flex gap-4 bg-white">
            <button className="hover:bg-slate-300" onClick={() => {}}>
              Download css
            </button>
            <button
              onClick={() => {
                downloadAsPng(element);
              }}
              className="hover:bg-slate-300"
            >
              Download png
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
