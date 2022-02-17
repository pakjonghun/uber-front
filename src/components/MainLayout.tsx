import React, { FC, useCallback } from "react";
import { useForm } from "react-hook-form";
import ErrorMessage from "../components/Error";
import Helemt from "../components/Helmet";
import logo from "../logo.svg";
import RestComponent, { RestComponentProps } from "../components/Rest";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useCate } from "../hooks/hooks";
import { createClass } from "../utility/utility";

interface RestFormProps {
  rest: string;
}

interface RestProps {
  restResult: {
    data?: RestComponentProps[] | null;
    totalPages?: number | null;
  };

  pageResult: {
    page: number;
    onMinusPage: () => void;
    onPlusPage: () => void;
  };

  title: string;
}

const MainLayout: FC<RestProps> = ({ restResult, pageResult, title }) => {
  const { data: rests, totalPages } = restResult;
  const { page: restPage, onMinusPage, onPlusPage } = pageResult;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RestFormProps>({ mode: "onChange" });

  const nav = useNavigate();
  const onSubmit = useCallback(() => {
    const searchParams = new URLSearchParams();
    searchParams.append("term", watch("rest"));
    nav(`/search?${searchParams.toString()}`);
  }, [watch, nav]);

  const { data: cates } = useCate();

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full py-20 bg-gray-800">
        <Helemt title={title} />
        <form onSubmit={handleSubmit(onSubmit)} className="w-[40%]">
          <input
            {...register("rest", {
              validate: {
                isEmpty: (v) => v.trim().length > 0 || "empty word",
              },
            })}
            type="search"
            placeholder="Search rests"
            className="w-full rounded-sm"
          />
          {errors.rest?.message && (
            <ErrorMessage message={errors.rest.message} />
          )}
        </form>
      </div>
      <ul className="flex justify-center mx-auto space-x-5 py-10 w-[80%]">
        {cates?.findAllCate.data?.map((i) => (
          <li
            className="hover:scale-110 active:scale-100 transition-transform duration-150 group"
            key={i.id}
          >
            <Link
              className="flex flex-col justify-center items-center"
              to={`/cate/${i.slug}`}
            >
              <img
                className="w-10 aspect-square mb-1 rounded-full"
                src={i.img || ""}
                onError={(e) => (e.currentTarget.src = logo)}
                alt={i.name}
              />
              <span className="font-semibold text-xs group-hover:bg-gray-100 rounded-full aspect-square">
                {i.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div
        className={createClass(
          "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-content-center place-items-stretch"
        )}
      >
        {rests?.map((i) => (
          <RestComponent key={i.id} {...i} />
        ))}
      </div>
      <div className="flex justify-center items-center py-10">
        {!!totalPages && (
          <div className="flex justify-center items-center text-2xl space-x-3">
            <button
              className={createClass(restPage === 1 ? "opacity-10" : "")}
              onClick={onMinusPage}
            >
              &larr;
            </button>
            <span className="block text-lg">{restPage + "/" + totalPages}</span>
            <button
              className={createClass(totalPages > restPage ? "" : "opacity-10")}
              onClick={onPlusPage}
            >
              &rarr;
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default MainLayout;
