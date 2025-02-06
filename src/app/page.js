"use client";
import Navbar from "./components/Navigation/Navbar/Navbar";
import "./globals.css";
import MainInfo from "./components/Main/Main_Info/MainInfo";
import MonthBest from "./components/Main/Main_MonthBest/MonthBest";
import TestBanner from "./components/Landing/Lan_TestBanner/TestBanner";
import ToDo from "./components/Main/Main_ToDo/ToDo";
import Subscrib from "./components/Landing/Lan_Subscribtion/Subscrib";
import Footer from "./components/Navigation/Footer/Footer";

export default function Home() {
  return (
    <div className="LandingBox">
      <Navbar />
      <MainInfo />
      <MonthBest/>
      <TestBanner id="test-banner" />
      <ToDo />
      <Subscrib text="следите за нашими новостями!"/>
      <Footer />
    </div>
  );
}
