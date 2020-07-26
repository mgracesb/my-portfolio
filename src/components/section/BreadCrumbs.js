import React from "react";
import { Breadcrumb } from "semantic-ui-react";

const Breadcrumbs = () => (
  <Breadcrumb>
    <Breadcrumb.Section link>Info</Breadcrumb.Section>
    <Breadcrumb.Divider icon="right chevron" />
    <Breadcrumb.Section link>Registration</Breadcrumb.Section>
    <Breadcrumb.Divider icon="right arrow" />
    <Breadcrumb.Section active>Active</Breadcrumb.Section>
  </Breadcrumb>
);

export default Breadcrumbs;
