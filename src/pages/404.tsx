import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Helemt from "../components/Helmet";

const NotFound = () => {
  const navigation = useNavigate();
  const onClick = useCallback(() => {
    navigation(-1);
  }, [navigation]);
  return (
    <div className="flex justify-center items-center h-screen bg-red-50">
      <Helemt title="404 not found" />
      <div className="flex flex-col justify-center">
        <h1 className="font-semibold text-3xl">404 Not Found</h1>
        <button
          className="mt-3 font-semibold underline underline-offset-2"
          onClick={onClick}
        >
          back →
        </button>
      </div>
    </div>
  );
};

export default NotFound;
