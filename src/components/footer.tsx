import React, { FC } from "react";

type Props = {
  name?: string;
};

export const Footer: FC<Props> = ({ name }) => {
  return (
    <div className="container mx-auto">
      <p>Customer Footer</p>
    </div>
  );
};
