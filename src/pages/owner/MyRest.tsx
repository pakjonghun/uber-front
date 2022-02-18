import React, { useEffect } from "react";
import { useApolloClient } from "@apollo/client";
import { Link } from "react-router-dom";
import Helemt from "../../components/Helmet";
import Loading from "../../components/Loading";
import RestComponent from "../../components/Rest";
import { useMyRest } from "./hooks";
import { MY_REST_QUERTY } from "./hooks";

const MyRest = () => {
  const { loading, data } = useMyRest();
  console.log("pagedata", data);

  if (loading || !data) return <Loading />;
  return !data?.myRest?.rest?.length ? (
    <div className="px-3 my-10">
      <Helemt title="MyRest" />
      <h1 className="mb-5 text-3xl font-semibold">MyRest</h1>
      <div>MyRests Array</div>
      <div className="flex flex-col space-y-2">
        <span>You have no rest</span>
        <Link className="text-lime-500" to="/add-rest">
          Create One &rarr;
        </Link>
      </div>
    </div>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-content-center place-items-stretch">
      {data?.myRest &&
        data.myRest.rest.map((r) => <RestComponent key={r.id} {...r} />)}
    </div>
  );
};

export default MyRest;
