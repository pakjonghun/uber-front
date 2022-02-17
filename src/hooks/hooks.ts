import {
  FindOneCateQuery,
  FindOneCateQueryVariables,
  FindRestByIdQuery,
  FindRestByIdQueryVariables,
  SearchRestQuery,
  SearchRestQueryVariables,
} from "./../generated/types";
import {
  FindAllCateQuery,
  FindAllCateQueryVariables,
} from "../generated/types";
import { useCallback, useState } from "react";
import { useLazyQuery, useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import { REST_FRAGMENT, CATE_FRAGMENT } from "../fragments";
import { RestsQuery, RestsQueryVariables } from "../generated/types";

const FIND_ALL_RESTS = gql`
  ${REST_FRAGMENT}
  query rests($restPage: Int) {
    findRests(page: $restPage) {
      data {
        ...RestSearchField
      }
      totalPages
      totalResults
    }
  }
`;

export const useRest = () => {
  const [restFunc, { data, loading }] = useLazyQuery<
    RestsQuery,
    RestsQueryVariables
  >(FIND_ALL_RESTS);

  return { restFunc, data, loading };
};

export const usePage = (init: number = 1, total?: number | null) => {
  const [page, setPage] = useState(init);

  const onPlusPage = useCallback(() => {
    setPage((pre) => (total && pre < total ? pre + 1 : pre));
  }, [total]);

  const onMinusPage = useCallback(() => {
    setPage((pre) => (pre !== 1 ? pre - 1 : pre));
  }, []);

  return { page, onPlusPage, onMinusPage };
};

export const FIND_ALL_CATES = gql`
  ${CATE_FRAGMENT}
  query FindAllCate($page: Int) {
    findAllCate(page: $page) {
      data {
        ...CateField
      }
      totalPages
      totalResults
    }
  }
`;

export const useCate = (page: number = 1) => {
  const { data, loading } = useQuery<
    FindAllCateQuery,
    FindAllCateQueryVariables
  >(FIND_ALL_CATES);
  return { data, loading };
};

const FIND_REST_BY_CATE = gql`
  ${REST_FRAGMENT}
  ${CATE_FRAGMENT}
  query findOneCate($page: Int, $slug: String!) {
    findOneCate(page: $page, slug: $slug) {
      totalPages
      totalResults
      date {
        ...CateField
      }
      rest {
        ...RestSearchField
      }
    }
  }
`;

export const useCateBySlug = () => {
  const [findRestByCateSlug, { data, loading }] = useLazyQuery<
    FindOneCateQuery,
    FindOneCateQueryVariables
  >(FIND_REST_BY_CATE);

  return { data, loading, findRestByCateSlug };
};

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

export const useSearchRest = () => {
  const [searchFunc, { loading, data }] = useLazyQuery<
    SearchRestQuery,
    SearchRestQueryVariables
  >(SEARCHRESTS);

  return { loading, data, searchFunc };
};

const REST_DETAIL_QUERY = gql`
  ${REST_FRAGMENT}
  ${CATE_FRAGMENT}
  query findRestById($id: Float!) {
    findRestById(id: $id) {
      ...RestSearchField
      cate {
        ...CateField
      }
      dish {
        id
        name
        desc
        img
      }
    }
  }
`;

export const useRestDetail = () => {
  const [getRestDetail, { data, loading }] = useLazyQuery<
    FindRestByIdQuery,
    FindRestByIdQueryVariables
  >(REST_DETAIL_QUERY);
  return { getRestDetail, data, loading };
};
