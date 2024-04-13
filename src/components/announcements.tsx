import React, { FC } from "react";

type Props = {
  name?: string;
};

export const Announcements: FC<Props> = ({ name }) => {
  return (
    <>
      <p>Public Announcements</p>
    </>
  );
};
