import { Avatar, Typography } from "@material-tailwind/react";
import { FC } from "react";

interface IAvatar {
  name: string;
  imageUrl: string;
  email: string;
}
export const AvatarWithText: FC<IAvatar> = ({ imageUrl, name, email }) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Avatar src={imageUrl ?? ""} alt="avatar" />
        <div>
          <Typography variant="h6">{name ?? ""}</Typography>
          <Typography variant="h6">{email ?? ""}</Typography>
          <Typography variant="small" color="gray" className="font-normal">
            Guest
          </Typography>
        </div>
      </div>
    </div>
  );
};
