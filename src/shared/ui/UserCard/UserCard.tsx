import { Typography } from "@material-tailwind/react";
import { FC } from "react";

interface IAvatarProps {
  name: string;
  email: string;
}
export const UserCard: FC<IAvatarProps> = ({ name, email }) => {
  return (
    <div>
      <Typography className="text-green-200" variant="h2">
        {name ?? ""}
      </Typography>
      <Typography variant="h6">{email ?? ""}</Typography>
      <Typography variant="small" color="gray" className="font-normal">
        Guest
      </Typography>
    </div>
  );
};
