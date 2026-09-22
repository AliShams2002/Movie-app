export default function Skeleton({ className = "", rounded = "md" }) {
  const roundedClass = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  }[rounded];

  return (
    <div className={`bg-dark-700 animate-pulse ${roundedClass} ${className}`} />
  );
}
