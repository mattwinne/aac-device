import React from "react";

import theme from "./styles";

export default function Layout() {
  const appTheme = theme.light;

  return (
    <>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=.75, user-scalable=0, maximum-scale=.75, minimum-scale=.75, viewport-fit=cover"
      />
      <div
        style={{
          position: "absolute",
          backgroundColor: appTheme.palette.bg.main,
          top: "0px",
          bottom: "0px",
          width: "100%",
        }}
      />
    </>
  );
}
