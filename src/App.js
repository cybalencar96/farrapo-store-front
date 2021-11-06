import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignupPage from "./components/pages/Signup/SignupPage";
import HomePage from "./components/pages/Home/HomePage";

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignupPage />} />
        </Routes>
    </BrowserRouter>
  );
}