import { FC } from "react";

interface IButtonProps {
  title: string;
  color: string;
  onClick: VoidFunction;
  type: "submit" | "reset" | "button" | undefined;
  mt?: number;
}
export const Button: FC<IButtonProps> = ({
  title,
  color,
  onClick,
  type,
  mt,
}) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: `${color}` }}
      className={`rounded-md py-2 px-4 shadow-md text-white font-medium mt-${mt}`}
      type={type}
    >
      {title}
    </button>
  );
};
