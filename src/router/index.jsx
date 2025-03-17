import { BrowserRouter, Routes, Route } from "react-router";
import { lazy } from "react";

const Login = lazy(() => import("@/pages/login/page"));
const Home = lazy(() => import("@/pages/home/page"));
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
