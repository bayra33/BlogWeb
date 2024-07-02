import Image from "next/image";
import { Header } from "../components/Header";
import { Body } from "@/components/Body";
import { Body1 } from "@/components/Body1";
export default function Home() {
  return (
    <div>
      <Header />
      <Body />
      <Body1/>
    </div>
  );
}
