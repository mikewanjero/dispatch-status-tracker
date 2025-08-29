import clsx from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind classes with clsx and tailwind-merge
 * Usage: cn('p-2', isActive && 'bg-blue-500')
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
