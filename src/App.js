import {
  BrowserRouter,
  Routes,
  Route,
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
export default function App() {
  const [userData, setUserData] = useState({ id: "", name: "", email: "", image: "", token: "", cart: []});

  return (
    <BrowserRouter>
    	<GlobalReset />
    	<GlobalStyles />
      <UserDataContext.Provider value = {{userData, setUserData}}>
        <TopBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/items/:id" element={<ItemPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </UserDataContext.Provider>
    </BrowserRouter>
  );
}