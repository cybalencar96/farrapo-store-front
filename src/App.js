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
import SearchItems from "./components/pages/SearchItems/SearchItems";

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
          <Route path="/search/:itemName&:filters" element={<SearchItems />} />
        </Routes>
      </UserDataContext.Provider>
    </BrowserRouter>
  );
}