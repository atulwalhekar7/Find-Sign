import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import ScrollToTop from "./ScrollToTop";

export default function MainLayout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
    </>
  );
}
