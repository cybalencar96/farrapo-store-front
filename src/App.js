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
import SigninPage from "./components/pages/Signin/SigninPage";

export default function App() {
  return (
    <BrowserRouter>
        <GlobalReset />
		<GlobalStyles />
		<TopBar />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/signin" element={<SigninPage />} />
        </Routes>
    </BrowserRouter>
  );
}