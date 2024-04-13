import React, { FC } from "react";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { VendorAnnouncements } from "./vendorAnnouncements";

type Props = {
  name?: string;
};

export const VendorHeader: FC<Props> = ({ name }) => {
  return (
    <>
      <VendorAnnouncements />
      <p>Vendor Header</p>
      <ModeToggle />
    </>
  );
};
