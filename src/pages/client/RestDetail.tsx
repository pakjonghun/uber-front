import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import { useRestDetail } from "../../hooks/hooks";

type IdParams = {
  id?: string;
};

const RestDetail = () => {
  const { id } = useParams<IdParams>();
  const { getRestDetail, loading, data } = useRestDetail();

  useEffect(() => {
    if (id || (id && +id === 0)) {
      getRestDetail({ variables: { id: +id } });
    }
  }, [id, getRestDetail]);

  if (loading || !data) return <Loading />;
  return (
    <div
      style={{
        backgroundImage: `url(${data.findRestById.img})`,
      }}
      className="w-full h-full py-14 bg-gray-50 bg-cover bg-no-repeat bg-center"
    >
      <div className="flex flex-col items-start w-[30%] ml-5 px-10 py-5 bg-white">
        <h2 className="text-2xl font-bold">{data.findRestById.name}</h2>
        <small>{data.findRestById.adress}</small>
        <small>{data.findRestById.isPromited ? "Promotion" : "Normal"}</small>
        <Link
          to={`/cate/${data.findRestById.cate?.slug}`}
          className="hover:scale-110 active:scale-100 transition-transform duration-100"
        >
          {data.findRestById.cate?.slug}
        </Link>
      </div>
      <FontAwesomeIcon icon={faHeart} className="ml-10 mt-5" />
    </div>
  );
};

export default RestDetail;
