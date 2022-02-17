import React from "react";
import { Link } from "react-router-dom";
import Helemt from "../../components/Helmet";
import Loading from "../../components/Loading";
import { useMyRest } from "./hooks";

const MyRest = () => {
  const { loading, data } = useMyRest();

  if (loading || !data) return <Loading />;
  return (
    <div className="px-3 my-10">
      <Helemt title="MyRest" />
      <h1 className="mb-5 text-3xl font-semibold">MyRest</h1>
      {data.length ? (
        <div>MyRests Array</div>
      ) : (
        <div className="flex flex-col space-y-2">
          <span>You have no rest</span>
          <Link className="text-lime-500" to="/add-rest">
            Create One &rarr;
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyRest;
