import React, { FC, memo, PropsWithChildren } from "react";

interface VirtualBumperProps {
  paddingTop: number;
  paddingBottom: number;
}
const VirtualBumper: FC<PropsWithChildren<VirtualBumperProps>> = ({
  paddingTop,
  paddingBottom,
  children,
}) => {
  return (
    <React.Fragment>
      {paddingTop > 0 && (
        <tr>
          <td style={{ height: `${paddingTop}px` }} />
        </tr>
      )}
      {children}
      {paddingBottom > 0 && (
        <tr>
          <td style={{ height: `${paddingBottom}px` }} />
        </tr>
      )}
    </React.Fragment>
  );
};

export default memo(VirtualBumper);
