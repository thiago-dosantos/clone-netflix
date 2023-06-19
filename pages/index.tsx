import { NextPageContext } from "next";
import Navbar from "@/components/Navbar";
import ListMovies from "@/components/ListMovies";
import IndexPage from "@/components/IndexPage";
import Footer from "@/components/Footer";

export default function Home() {

  return (
    <>
      <IndexPage />
     <Navbar />
     <ListMovies />
    </>
  )
}
