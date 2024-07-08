import { FC } from "react";

interface IButtonProps {
  title: string;
  color: string;
  onClick: VoidFunction;
}
export const Button: FC<IButtonProps> = ({ title, color, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: `${color}` }}
      className={"rounded-md py-2 px-4 shadow-md text-white font-medium"}
    >
      {title}
    </button>
  );
};
