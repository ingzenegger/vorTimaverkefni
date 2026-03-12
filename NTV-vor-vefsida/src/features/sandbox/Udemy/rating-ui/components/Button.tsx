import type { MouseEventHandler, ReactNode } from "react";

type ratingBtnProps = {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export default function RatingBtn({
  children,
  className,
  disabled,
  onClick,
}: ratingBtnProps) {
  return (
    <button onClick={onClick} className={className} disabled={disabled}>
      {children}
    </button>
  );
}
