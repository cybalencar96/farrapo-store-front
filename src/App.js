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
import { useState } from "react";
import SigninPage from "./components/pages/Signin/SigninPage";
import ItemPage from "./components/pages/Item/ItemPage";
import CartContext from './contexts/cartContext.js'
import HistoryPage from "./components/pages/History/HistoryPage";
import { getUserData, getCartData } from "./utils/localStorage.js";

export default function App() {
  const [userData, setUserData] = useState(() => getUserData());
  const [cart, setCart] = useState(() => getCartData());

  return (
    <BrowserRouter>
    	<GlobalReset />
    	<GlobalStyles />
      <UserDataContext.Provider value = {{userData, setUserData}}>
      <CartContext.Provider value={{cart, setCart}}>
        <TopBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/items/:id" element={<ItemPage />} />
          <Route path="/my-purchases" element={<HistoryPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </CartContext.Provider>
      </UserDataContext.Provider>
    </BrowserRouter>
  );
}