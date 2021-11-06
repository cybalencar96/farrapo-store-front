import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import GlobalReset from "./assets/CSS Components/GlobalReset";
import GlobalStyles from "./assets/CSS Components/GlobalStyles";
import TopBar from "./components/TopBar/TopBar";
import SignupPage from "./components/pages/Signup/SignupPage";
import HomePage from "./components/pages/Home/HomePage";

export default function App() {
  return (
    <BrowserRouter>
        <GlobalReset />
		<GlobalStyles />
		<TopBar />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignupPage />} />
        </Routes>
    </BrowserRouter>
  );
}