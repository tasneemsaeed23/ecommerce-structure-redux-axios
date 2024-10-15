import React from "react";
import Pagination from "./../../Component/Uitlity/Pagination";
import BrandContainer from "../../Component/Brand/BrandContainer";
import AllBrandHook from "../../hook/brand/all-brand-page";

const AllBrandPage = () => {
  const [loading, brand, pageCount, getPage] = AllBrandHook();

  return (
    <div style={{ minHeight: "670px" }}>
      <BrandContainer data={brand.data} loading={loading} />
      <Pagination pageCount={pageCount} onPress={getPage} />
    </div>
  );
};

export default AllBrandPage;
