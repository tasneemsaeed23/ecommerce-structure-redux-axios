import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import CategoryCard from "./../Category/CategoryCard";
import SubTiltle from "../Uitlity/SubTiltle";
import HomeCategoryHook from "../../hook/category/home-category-hook";

const HomeCategory = () => {
  const [loading, category, colors] = HomeCategoryHook();

  return (
    <Container>
      <SubTiltle title="التصنيفات" btntitle="المزيد" pathText="/allcategory" />
      <Row className="my-2 d-flex justify-content-between">
        {loading === false ? (
          category.data ? (
            category.data.slice(0, 5).map((item, index) => {
              return (
                <CategoryCard
                  title={item.name}
                  img={item.image}
                  background={colors[index]}
                />
              );
            })
          ) : (
            <h4>لا يوجد تصنيفات</h4>
          )
        ) : (
          <Spinner animation="border" variant="warning" />
        )}
      </Row>
    </Container>
  );
};

export default HomeCategory;
