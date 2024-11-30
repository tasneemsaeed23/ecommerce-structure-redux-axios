import React from "react";
import Silder from "../../Component/Home/Silder";
import HomeCategory from "../../Component/Home/HomeCategory";
import CardProductContainer from "../../Component/Products/CardProductContainer";
import DiscountSection from "../../Component/Home/DiscountSection";
import BrandFeatured from "../../Component/Brand/BrandFeatured";
import ViewHomeProductsHook from "../../hook/products/view-home-products-hook";

const HomePage = () => {
  const [items] = ViewHomeProductsHook();
  return (
    <div className="font" style={{ minHeight: "670px" }}>
      <Silder />
      <HomeCategory />
      <CardProductContainer
        products={items}
        title="الاكثر مبيعا"
        btntitle="المزيد"
        pathText="/products"
      />
      <DiscountSection />
      <CardProductContainer
        products={items}
        title="احدث الازياء"
        btntitle="المزيد"
        pathText="/products"
      />
      <BrandFeatured title="اشهر الماركات" btntitle="المزيد" />
    </div>
  );
};

export default HomePage;
