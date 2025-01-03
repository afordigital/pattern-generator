export const Pattern = ({ patternName }: { patternName: string }) => {
  return (
    <div className="w-[200px] h-[200px] bg-white rounded-lg shadow-lg">
      <div className={`w-full h-full ${patternName}`}></div>
    </div>
  );
};
