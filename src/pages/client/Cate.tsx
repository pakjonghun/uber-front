import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../../components/MainLayout";
import { useCateBySlug, usePage } from "../../hooks/hooks";
import Loading from "../../components/Loading";

type params = {
  slug?: string;
};

const Cate = () => {
  const { slug } = useParams<params>();
  const { data, loading, findRestByCateSlug } = useCateBySlug();
  const restResult = {
    data: data?.findOneCate.rest,
    totalPage: data?.findOneCate.totalPages,
  };

  const pageResult = usePage();
  const { page } = pageResult;

  useEffect(() => {
    if (slug && slug.trim().length > 0) {
      findRestByCateSlug({ variables: { page, slug } });
    }
  }, [slug, page, findRestByCateSlug]);

  if (loading) return <Loading />;
  return (
    <MainLayout
      restResult={restResult}
      pageResult={pageResult}
      title={`${data?.findOneCate.date?.name || ""} Category`}
    />
  );
};

export default Cate;
