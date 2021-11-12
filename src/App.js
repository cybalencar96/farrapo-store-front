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
import FiltersContext from "./contexts/filtersContext";
import { useEffect, useState } from "react";
import SigninPage from "./components/pages/Signin/SigninPage";
import SearchItems from "./components/pages/SearchItems/SearchItems";
import ItemPage from "./components/pages/Item/ItemPage";

export default function App() {
  const [userData, setUserData] = useState({ id: "", name: "", email: "", image: "", token: "", cart: [] });
  const [filtersData, setFiltersData] = useState({ categories: [], colors: [], sizes: [] })
  
  useEffect(() => {
    setFiltersData({
      categories: ["Moda Feminina", "Moda Masculina", "Infantil", "Moda de Praia", "Acessórios", "Calçados", "Camisas", "Calças"],
      colors: ["Branco", "Preto", "Azul", "Verde", "Marrom"],
      sizes: ["P", "M", "G", "36", "37", "38"],
    })
  }, []);

  return (
    <BrowserRouter>
    	<GlobalReset />
    	<GlobalStyles />
      <UserDataContext.Provider value={{ userData, setUserData }}>
        <FiltersContext.Provider value = {{filtersData}}>
          <TopBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/search/:itemName&:categories&:colors&:sizes&:price&:orderBy" element={<SearchItems />} />
            <Route path="/items/:id" element={<ItemPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </FiltersContext.Provider>
      </UserDataContext.Provider>
    </BrowserRouter>
  );
}