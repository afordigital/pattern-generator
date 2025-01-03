import { usePatternContext } from "@/context/usePatternContext";
import { Input } from "./ui/input";

export const StyleConfig = () => {
  const { pattern, setPattern } = usePatternContext();

  return (
    <section className="flex gap-8 px-10 py-4 bg-white rounded-lg">
      <label className="flex items-center gap-2 w-fit">
        <p className="whitespace-nowrap">Front Color</p>
        <Input
          type="color"
          value={pattern.frontColor}
          className="min-w-[75px]"
          onChange={(event) => {
            const root = document.documentElement;
            root.style.setProperty("--front-color", event.target.value);
            setPattern({ ...pattern, frontColor: event.target.value });
          }}
        />
      </label>
      <label className="flex items-center gap-2 w-fit">
        <p className="whitespace-nowrap">Background Color</p>
        <Input
          type="color"
          value={pattern.backgroundColor}
          className="min-w-[75px]"
          onChange={(event) => {
            const root = document.documentElement;
            root.style.setProperty("--bg-color", event.target.value);
            setPattern({ ...pattern, backgroundColor: event.target.value });
          }}
        />
      </label>
      <label className="flex items-center gap-2 w-fit">
        <p className="whitespace-nowrap">Opacity</p>
        <Input
          type="range"
          value={pattern.opacity * 100}
          className="max-w-[200px]"
          onChange={(event) => {
            const root = document.documentElement;
            root.style.setProperty(
              "--bg-opacity",
              (event.target.valueAsNumber / 100).toString()
            );
            setPattern({
              ...pattern,
              opacity: event.target.valueAsNumber / 100,
            });
          }}
        />
      </label>
      <label className="flex items-center gap-2 w-fit">
        <p className="whitespace-nowrap">Spacing</p>
        <Input
          type="range"
          value={pattern.spacing}
          className="max-w-[200px]"
          onChange={(event) => {
            const root = document.documentElement;
            root.style.setProperty(
              "--bg-spacing",
              event.target.valueAsNumber.toString()
            );
            setPattern({
              ...pattern,
              spacing: event.target.valueAsNumber,
            });
          }}
        />
      </label>
    </section>
  );
};
