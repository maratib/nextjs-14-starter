import React, { FC } from "react";
import { Announcements } from "./announcements";

type Props = {
  name?: string;
};

export const Header: FC<Props> = ({ name }) => {
  return (
    <>
      <Announcements />
      <p>Customer Header</p>
    </>
  );
};
