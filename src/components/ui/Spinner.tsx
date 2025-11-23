export const Spinner = () => {
  return (
    <div className="flex items-center justify-center">
      <div
        className="animate-spin rounded-full border-4 border-t-4 border-primary h-12 w-12"
        style={{ clipPath: "inset(0 0 0 25%)" }}
      ></div>
    </div>
  );
};
