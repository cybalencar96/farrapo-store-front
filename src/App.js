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
import { useEffect, useState } from "react";
import SigninPage from "./components/pages/Signin/SigninPage";
import ItemPage from "./components/pages/Item/ItemPage";
import CartContext from './contexts/cartContext.js'
import {v4 as uuid} from 'uuid';

export default function App() {
  const [userData, setUserData] = useState({
    userId: "", name: "", email: "", image: "", token: "",
    visitorToken: uuid()
  });
  const [cart, setCart] = useState([]);

  useEffect(() => {
      const localUserData = JSON.parse(localStorage.getItem('farrapo'));
      const localCartData = JSON.parse(localStorage.getItem('farrapo-cart'));

      if (localUserData) {
          setUserData(localUserData)
      } else {
          localStorage.setItem('farrapo',JSON.stringify(userData))
      }

      if (localCartData) {
          setCart(localCartData)
      }
  }, [])

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
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </CartContext.Provider>
      </UserDataContext.Provider>
    </BrowserRouter>
  );
}