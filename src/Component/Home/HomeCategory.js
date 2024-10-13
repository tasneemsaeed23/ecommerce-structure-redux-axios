import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import CategoryCard from "./../Category/CategoryCard";
import SubTiltle from "../Uitlity/SubTiltle";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllCategory } from "../../redux/actions/categoryAction";
const HomeCategory = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  const category = useSelector((state) => state.allCategory.category);
  const loading = useSelector((state) => state.allCategory.loading);
  const colors = ["#FFD3E8", "#F4DBA5", "#55CFDF", "#0034FF", "#FFD3E8"];
  console.log(category);
  console.log(loading);

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
