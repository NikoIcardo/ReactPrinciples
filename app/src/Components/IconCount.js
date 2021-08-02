import React from "react";
import { CloudIcon } from "@heroicons/react/outline";

const IconCount = (props) => {
  const Clouds = Array(Math.abs(props.counter)).fill(<CloudIcon className="w-8"/>);
  return (
    <div className="flex flex-row flex-wrap">{Clouds}</div>
  );
};

export default IconCount;
