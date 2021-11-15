import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import GlobalReset from "./assets/CSS Components/GlobalReset";
import GlobalStyles from "./assets/CSS Components/GlobalStyles";
import TopBar from "./components/shared/TopBar/TopBar";
import SignupPage from "./components/pages/Signup/SignupPage";
import HomePage from "./components/pages/Home/HomePage";
import UserDataContext from "./contexts/userDataContext";
import FiltersContext from "./contexts/filtersContext";
import { useEffect, useState } from "react";
import SigninPage from "./components/pages/Signin/SigninPage";
import SearchItems from "./components/pages/SearchItems/SearchItems";
import ItemPage from "./components/pages/Item/ItemPage";
import api from "./services/api";
import { sendErrorAlert } from "./utils/SweetAlert";
import CartContext from './contexts/cartContext.js'
import HistoryPage from "./components/pages/History/HistoryPage";
import { getUserData, getCartData } from "./utils/localStorage.js";
import CartPage from "./components/pages/CartPage/CartPage";
import Checkout from "./components/pages/CheckOut/Checkout";
import SuccessPage from "./components/pages/Success/Success";

export default function App() {
  const [userData, setUserData] = useState(() => getUserData());
  const [cart, setCart] = useState(() => getCartData());
  const [filtersData, setFiltersData] = useState({ categories: [], colors: [], sizes: [], isUpdated: false})
  
  useEffect(() => {
    api.getFilters()
      .then(res => setFiltersData({ ...res.data, isUpdated: true }))
      .catch(error => sendErrorAlert("Parece que houve um problema! tente novamente mais tarde"));
  }, []);

  return (
    <BrowserRouter>
    	<GlobalReset />
    	<GlobalStyles />
      <UserDataContext.Provider value={{ userData, setUserData }}>
        <FiltersContext.Provider value = {{filtersData}}>
          <CartContext.Provider value={{cart, setCart}}>
            <TopBar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/signin" element={<SigninPage />} />
              <Route path="/search/:itemName&:categories&:colors&:sizes&:price&:orderBy" element={<SearchItems />} />
              <Route path="/items/:id" element={<ItemPage />} />
              <Route path="/my-purchases" element={<HistoryPage />} />
              <Route path="/my-cart" element={<CartPage />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/success/:purchaseToken" element={<SuccessPage />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </CartContext.Provider>
        </FiltersContext.Provider>
      </UserDataContext.Provider>
    </BrowserRouter>
  );
}