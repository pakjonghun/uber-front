import React, { useCallback, useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { useForm } from "react-hook-form";
import ErrorMessage from "../../components/Error";
import Helemt from "../../components/Helmet";
import { RestsQuery, RestsQueryVariables } from "../../generated/types";
import logo from "../../logo.svg";
import RestComponent from "../../components/Rest";
import { useNavigate } from "react-router-dom";
import { REST_FRAGMENT } from "../../fragments";

const FINDCATES = gql`
  ${REST_FRAGMENT}
  query rests($catePage: Int, $restPage: Int) {
    findAllCate(page: $catePage) {
      data {
        id
        slug
        name
        img
        restaurantCount
      }
      totalPages
      totalResults
    }

    findRests(page: $restPage) {
      data {
        ...RestSearchField
      }
      totalPages
      totalResults
    }
  }
`;

interface RestFormProps {
  rest: string;
}

const Rest = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RestFormProps>({ mode: "onChange" });

  const [catePage, setCatepage] = useState(1);
  const [restPage, setRestPage] = useState(1);

  const { data, loading } = useQuery<RestsQuery, RestsQueryVariables>(
    FINDCATES,
    {
      variables: { catePage, restPage },
    }
  );

  const nav = useNavigate();
  const onSubmit = useCallback(() => {
    const searchParams = new URLSearchParams();
    searchParams.append("term", watch("rest"));
    nav(`/search?${searchParams.toString()}`);
  }, [watch, nav]);

  useEffect(() => {
    let timer: NodeJS.Timeout | null;

    const checkScroll = () => {
      const scrollY = window.scrollY;
      const clientH = document.documentElement.clientHeight;
      const scrollH = document.documentElement.scrollHeight;
      const totalPage = data?.findRests.totalPages;
      if (totalPage && scrollY + clientH >= scrollH - window.innerHeight / 3) {
        setRestPage((pre) => {
          if (pre < totalPage) return pre;
          return pre;
        });
      }
    };

    function throttle(cb: Function) {
      return function () {
        if (!timer) {
          timer = setTimeout(() => {
            cb();
            timer = null;
          }, 250);
        }
      };
    }

    window.addEventListener("scroll", throttle(checkScroll));
    return () => window.removeEventListener("scroll", throttle(checkScroll));
  }, [data?.findRests.totalPages, restPage]);

  const createClass = (...args: string[]) => args.join(" ");

  const onPlusPage = useCallback(() => {
    setRestPage((pre) =>
      data?.findRests.totalPages && pre < data?.findRests.totalPages
        ? pre + 1
        : pre
    );
  }, [data?.findRests.totalPages]);

  const onMinusPage = useCallback(() => {
    setRestPage((pre) => (pre !== 1 ? pre - 1 : pre));
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full py-20 bg-gray-800">
        <Helemt title="Rest" />
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
      {!loading && (
        <>
          <ul className="flex justify-center mx-auto space-x-5 py-10 w-[80%]">
            {data?.findAllCate.data?.map((i) => (
              <li
                className="flex flex-col justify-center items-center cursor-pointer hover:scale-110 active:scale-100 transition-transform duration-150 group"
                key={i.id}
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
              </li>
            ))}
          </ul>
          <div
            className={createClass(
              "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-content-center place-items-stretch"
            )}
          >
            {data?.findRests.data?.map((i) => (
              <RestComponent key={i.id} {...i} />
            ))}
          </div>
          <div className="flex justify-center items-center py-10">
            {data?.findRests.totalPages && (
              <div className="flex justify-center items-center text-2xl space-x-3">
                <button
                  className={createClass(restPage === 1 ? "opacity-10" : "")}
                  onClick={onMinusPage}
                >
                  &larr;
                </button>
                <span className="block text-lg">
                  {restPage + "/" + data.findRests.totalPages}
                </span>
                <button
                  className={createClass(
                    data?.findRests.totalPages &&
                      data?.findRests.totalPages > restPage
                      ? ""
                      : "opacity-10"
                  )}
                  onClick={onPlusPage}
                >
                  &rarr;
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Rest;
