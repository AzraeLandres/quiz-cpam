import { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "primary" | "success" | "danger" | "secondary";
};

export default function Button({
  children,
  onClick,
  disabled = false,
  variant = "primary",
}: Props) {
  const base =
    "px-6 py-2 rounded text-white transition border-2 border-transparent font-medium disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-yellow hover:border-2 hover:border-yellow-600",
    secondary: "bg-lightblue border-darkblue text-darkblue",
    success: "bg-success hover:bg-green-700",
    danger: "bg-error hover:bg-red-700",
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
