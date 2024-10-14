import CategoryContainer from "./../../Component/Category/CategoryContainer";
import Pagination from "./../../Component/Uitlity/Pagination";
import AllCategoryHook from "../../hook/category/all-category-page-hook";
const AllCategoryPage = () => {
  const [category, loading, pageCount, getPage] = AllCategoryHook();
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryContainer
        data={category ? category.data : []}
        loading={loading}
      />
      {pageCount > 0 && <Pagination pageCount={pageCount} onPress={getPage} />}
    </div>
  );
};

export default AllCategoryPage;
