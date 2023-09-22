import Image from "next/image";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Idea from "@/components/Idea";
import Lady from "@/components/Lady";
import Group from "@/components/Group";
import Questions from "@/components/Questions";
import Footer from "@/components/Footer";
import Timeline from "@/components/Timeline";

export default function Home() {
  const activePage = "home";
  return (
    <Layout activePage={activePage}>
      <Hero />
      <Idea />
      <Lady />
      <Group />
      <Questions />
      <Timeline />
      <Footer />
    </Layout>
  );
}
