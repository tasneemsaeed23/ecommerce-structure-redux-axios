import React from "react";
import { Container, Row } from "react-bootstrap";
import CategoryCard from "./../Category/CategoryCard";
import clothe from "../../images/clothe.png";
import cat2 from "../../images/cat2.png";
import labtop from "../../images/labtop.png";
import sale from "../../images/sale.png";
import pic from "../../images/pic.png";
import SubTiltle from "../Uitlity/SubTiltle";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import getAllCategory from "../../redux/actions/categoryAction";

const HomeCategory = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  const category = useSelector((state) => state.allCategory.category);
  const loading = useSelector((state) => state.allCategory.loading);

  console.log(category);
  console.log(loading);

  return (
    <Container>
      <SubTiltle title="التصنيفات" btntitle="المزيد" pathText="/allcategory" />
      <Row className="my-2 d-flex justify-content-between">
        {category.data ? (
          <CategoryCard
            title={category.data[0].name}
            img={category.data[0].image}
            background="#F4DBA4"
          />
        ) : null}
      </Row>
    </Container>
  );
};

export default HomeCategory;
