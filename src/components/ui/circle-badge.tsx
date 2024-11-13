import { cn } from "@/lib/utils"; // Import ShadCN's `cn` utility if available, or use className directly

export function CircleBadge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "flex items-center justify-center w-6 h-6 rounded-full bg-blue-500 text-white text-xs font-bold",
        className,
      )}
    >
      {children}
    </span>
  );
}
