import React, { FC } from "react";

type Props = {
  name?: string;
};

export const VendorFooter: FC<Props> = ({ name }) => {
  return (
    <div className="container mx-auto">
      <p>Vendor Footer</p>
    </div>
  );
};
