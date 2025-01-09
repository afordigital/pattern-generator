import { usePatternContext } from "@/context/usePatternContext";
import { toPng } from "html-to-image";
import { Button } from "./ui/button";
import { Copy, Download } from "lucide-react";
import { toast } from "@pheralb/toast";

export const Pattern = ({ patternName }: { patternName: string }) => {
  const { pattern, setPattern, element, setElement } = usePatternContext();

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
      className="group/item relative w-full border border-slate-200 h-[200px] bg-white rounded-lg shadow-lg"
    >
      <div
        onClick={() => {
          setPattern({ ...pattern, name: patternName });
        }}
        className={`w-full h-full ${patternName}`}
      />

      <div className="absolute left-0 right-0 flex justify-center invisible gap-4 mx-auto top-2 group/edit group-hover/item:visible">
        <Button
          variant="secondary"
          onClick={() => {
            toast.success({
              text: "✨ CSS copied to clipboard",
              theme: "light",
            });
          }}
        >
          <Copy />
          CSS
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            downloadAsPng(element);
          }}
        >
          <Download />
          PNG
        </Button>
      </div>
    </section>
  );
};
