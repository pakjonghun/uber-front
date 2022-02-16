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

const SEARCHRESTS = gql`
  ${REST_FRAGMENT}
  query searchRest($page: Int, $term: String!) {
    searchRest(page: $page, term: $term) {
      totalPages
      totalResults
      data {
        ...RestSearchField
      }
    }
  }
`;
const SearchRests = () => {
  const [page, setPage] = useState(1);

  const [searchFunc, { loading, data }] = useLazyQuery<
    SearchRestQuery,
    SearchRestQueryVariables
  >(SEARCHRESTS, { onCompleted: (data) => console.log(data) });

  const nav = useNavigate();
  useEffect(() => {
    const term = window.location.href.split("term=")[1];
    if (!term) return nav("/");
    searchFunc({
      variables: {
        page,
        term,
      },
    });
  }, [page, nav, searchFunc]);

  if (loading) {
    <div className="mt-[30%]">
      <span className="font-bold text-2xl">Loading</span>
    </div>;
  }
  return (
    <>
      <Helemt title="Search Result" />
      {/* {data?.searchRest.data &&
        data.searchRest.data.map((i) => <RestComponent key={i.id} {...i} />)} */}
    </>
  );
};

export default SearchRests;
