import React, { useEffect } from "react";
import Loading from "../../components/Loading";
import MainLayout from "../../components/MainLayout";
import { usePage, useRest } from "../../hooks/hooks";

const Rest = () => {
  const { loading, data, restFunc } = useRest();
  const pageResult = usePage(1, data?.findRests.totalPages);
  const { page: restPage } = pageResult;
  const restResult = {
    data: data?.findRests.data,
    totalPages: data?.findRests.totalPages,
  };

  useEffect(() => {
    restFunc({ variables: { restPage } });
  }, [restFunc, restPage]);

  if (loading) return <Loading />;
  return (
    <MainLayout pageResult={pageResult} restResult={restResult} title="Main" />
  );
};

export default Rest;
