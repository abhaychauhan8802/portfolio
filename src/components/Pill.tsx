const Pill = ({ text }: { text: string }) => {
  return (
    <div className="bg-muted px-5 py-2 rounded-xl text-muted-foreground hover:scale-105 transition-all duration-300 cursor-default">
      {text}
    </div>
  );
};

export default Pill;
