import React from "react";
import { Aux } from "../../hoc/Aus";

export const Layout: React.FC<any> = (props) => (
  <Aux>
    <div>Sidebar, Title Box, BodyBox</div>
    <main>{props.children}</main>
  </Aux>
);
