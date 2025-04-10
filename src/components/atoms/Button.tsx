import { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "primary" | "success" | "danger";
};

export default function Button({
  children,
  onClick,
  disabled = false,
  variant = "primary",
}: Props) {
  const base =
    "px-6 py-2 rounded text-white transition font-medium disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-indigo-800 hover:bg-indigo-700",
    success: "bg-green-600 hover:bg-green-700",
    danger: "bg-red-600 hover:bg-red-700",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(base, variants[variant])}
    >
      {children}
    </button>
  );
}
