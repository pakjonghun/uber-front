import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

export interface RestComponentProps {
  id: number;
  name: string;
  adress: string;
  isPromited: boolean;
  img?: string | null;
  cate?: {
    name: string;
  } | null;
}

const RestComponent: React.FC<RestComponentProps> = ({
  id,
  img,
  name,
  adress,
  isPromited,
  cate,
}) => {
  console.log(img);
  return (
    <Link to={`/rests/${id}`}>
      <div className="flex flex-col mx-10 sm:mx-8 bg-red-50 cursor-pointer group">
        <div className="overflow-hidden">
          <div
            style={{
              backgroundImage: `url(${img}), url(${logo})`,
            }}
            className="py-32 sm:py-24 md:py-20 mb-1 bg-no-repeat bg-cover bg-center hover:scale-110 transition-transform duration-150"
          />
        </div>
        <div className="flex justify-between px-5 pb-2 mb-2 border-b">
          <div>
            <h3 className="text-xl font-medium">{name}</h3>
            <small>{adress}</small>
          </div>
          <button className="cursor-pointer hover:scale-110 active:scale-100 transition-transform duration-150">
            {isPromited ? "Pro" : "Non"}
          </button>
        </div>
        <small className="px-5 pb-3">{cate?.name || ""}</small>
      </div>
    </Link>
  );
};

export default RestComponent;
