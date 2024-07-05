import { FC } from "react";

interface IButtonProps {
  title: string;
  bg_color: string;
  onClick: VoidFunction;
}
export const Button: FC<IButtonProps> = ({ title, bg_color, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`border-2 border-${bg_color}-900 bg-blue-800 rounded-md py-2 px-4 shadow-md text-white font-medium hover:bg-${bg_color}-700`}
    >
      {title}
    </button>
  );
};
