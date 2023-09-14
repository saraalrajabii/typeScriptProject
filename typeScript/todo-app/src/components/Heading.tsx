// type props

import { ReactElement } from "react";

type HeadingProps = { title: string };
// if we are return one  element we can be more specific
export const Heading = ({ title }: HeadingProps):ReactElement => {
  return <h1>{title}</h1>;
};
