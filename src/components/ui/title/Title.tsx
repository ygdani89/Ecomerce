import { titleFond } from "@/config/fonds";
import React from "react";

interface Props {
  title: string;
  subtitle?: string;
  classname?: string;
}

function Title({ title, subtitle, classname }: Props) {
  return (
    <div className={`mt-3  ${classname}`}>
      <h1 className={` ${titleFond.className} antialiased text-2xl font-semibold my-6`}>{title} </h1>
      {subtitle && <h3 className={`text-xl mb-10`}>{subtitle} </h3>}
    </div>
  );
}

export default Title;
