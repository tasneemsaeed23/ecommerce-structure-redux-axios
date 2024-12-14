import Footer from "./Component/Uitlity/Footer";
import NavBarLogin from "./Component/Uitlity/NavBarLogin";
import HomePage from "./page/Home/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./page/Auth/LoginPage";
import RegisterPage from "./page/Auth/RegisterPage";
import AllCategoryPage from "./page/Category/AllCategoryPage";
import AllBrandPage from "./page/Brand/AllBrandPage";
import ShopProductsPage from "./page/Products/ShopProductsPage";
import ProductDetalisPage from "./page/Products/ProductDetalisPage";
import CartPage from "./page/Cart/CartPage";
import ChoosePayMethoudPage from "./page/Checkout/ChoosePayMethoudPage";
import AdminAllProductPage from "./page/Admin/AdminAllProductPage";
import AdminAllOrdersPage from "./page/Admin/AdminAllOrdersPage";
import AdminOrderDetalisPage from "./page/Admin/AdminOrderDetalisPage";
import AdminAddBrandPage from "./page/Admin/AdminAddBrandPage";
import AdminAddCategoryPage from "./page/Admin/AdminAddCategoryPage";
import AdminAddSubCategoryPage from "./page/Admin/AddSubCategoryPage";
import AdminAddProductsPage from "./page/Admin/AdminAddProductsPage";
import UserAllOrdersPage from "./page/User/UserAllOrderPage";
import UserFavoriteProductsPage from "./page/User/UserFavoriteProductsPage";
import UserAllAddresPage from "./page/User/UserAllAddresPage";
import UserAddAddressPage from "./page/User/UserAddAddressPage";
import UserEditAddressPage from "./page/User/UserEditAddressPage";
import UserProfilePage from "./page/User/UserProfilePage";
import AdminEditProductPage from "./page/Admin/AdminEditProductPage";
import ForgetPasswordPage from "./page/Auth/forgetPasswordPage";

function App() {
  return (
    <div className="font">
      <NavBarLogin />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Register" element={<RegisterPage />} />
          <Route path="/allcategory" element={<AllCategoryPage />} />
          <Route path="/allbrand" element={<AllBrandPage />} />
          <Route path="/products" element={<ShopProductsPage />} />
          <Route path="/products/:id" element={<ProductDetalisPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order/paymethoud" element={<ChoosePayMethoudPage />} />
          <Route path="/admin/allproducts" element={<AdminAllProductPage />} />
          <Route path="/admin/allorders" element={<AdminAllOrdersPage />} />
          <Route path="/admin/orders/:id" element={<AdminOrderDetalisPage />} />
          <Route path="/admin/addbrand" element={<AdminAddBrandPage />} />
          <Route path="/admin/addcategory" element={<AdminAddCategoryPage />} />
          <Route
            path="/admin/addsubcategory"
            element={<AdminAddSubCategoryPage />}
          />
          <Route path="/admin/addproduct" element={<AdminAddProductsPage />} />
          <Route path="/user/allorders" element={<UserAllOrdersPage />} />
          <Route
            path="/user/favoriteproducts"
            element={<UserFavoriteProductsPage />}
          />
          <Route path="/user/addresses" element={<UserAllAddresPage />} />

          <Route path="/user/add-address" element={<UserAddAddressPage />} />
          <Route path="/user/edit-address" element={<UserEditAddressPage />} />
          <Route path="/user/profile" element={<UserProfilePage />} />
          <Route
            path="/admin/editproduct/:id"
            element={<AdminEditProductPage />}
          />
          <Route
            path="/user/forget-password"
            element={<ForgetPasswordPage />}
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
