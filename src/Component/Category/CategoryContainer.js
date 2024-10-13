import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import CategoryCard from "./../Category/CategoryCard";
import { useSelector } from "react-redux";

const CategoryContainer = ({ data }) => {
  const loading = useSelector((state) => state.allCategory.loading);
  const colors = ["#FFD3E8", "#F4DBA5", "#55CFDF", "#0034FF", "#FFD3E8"];

  return (
    <Container>
      <div className="admin-content-text mt-2">كل التصنيفات</div>
      <Row className="my-2 d-flex justify-content-between">
        {loading === false ? (
          data && data.length > 0 ? (
            data.map((item, index) => {
              return (
                <CategoryCard
                  key={index}
                  title={item.name}
                  img={item.image}
                  background={colors[Math.floor(Math.random() * colors.length)]} // Use correct random logic
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

export default CategoryContainer;
