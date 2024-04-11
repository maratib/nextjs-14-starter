import { Fragment } from "react";

export default function VendorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Fragment>
      <h1>Customer Layout</h1>
      {children}
    </Fragment>
  );
}
