import React, { useEffect, useState } from "react";
import { gql, useLazyQuery, useQuery } from "@apollo/client";
import {
  SearchRestQuery,
  SearchRestQueryVariables,
} from "../../generated/types";
import RestComponent from "../../components/Rest";
import { useNavigate } from "react-router-dom";
import Helemt from "../../components/Helmet";
import { REST_FRAGMENT } from "../../fragments";
import { usePage, useSearchRest } from "../../hooks/hooks";
import Loading from "../../components/Loading";
import MainLayout from "../../components/MainLayout";

const SearchRests = () => {
  const { data, loading, searchFunc } = useSearchRest();
  const pageResult = usePage(1, data?.searchRest.totalPages);
  const { page } = pageResult;
  const restResult = {
    data: data?.searchRest.data,
    totalPages: data?.searchRest.totalPages,
  };

  const nav = useNavigate();
  const term = window.location.href.split("term=")[1];
  useEffect(() => {
    if (!term) return nav("/");
    searchFunc({
      variables: {
        page,
        term,
      },
    });
  }, [page, nav, searchFunc, term]);

  if (loading) return <Loading />;
  return (
    <MainLayout
      restResult={restResult}
      pageResult={pageResult}
      title={`${term} SearchResult`}
    />
  );
};

export default SearchRests;
