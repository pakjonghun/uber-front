import React, { FC } from "react";
import { Helmet } from "react-helmet-async";

interface HelmetProps {
  title: string;
}

const Helemt: FC<HelmetProps> = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default Helemt;
