// One source of truth for side spacing. Content width = 1540px on large screens.
export default function Container({ children, className = "" }) {
  return (
    <div
      className={`mx-auto w-full max-w-[1636px] px-5 sm:px-8 lg:px-12 ${className}`}
    >
      {children}
    </div>
  );
}