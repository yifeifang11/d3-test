import Image from "next/image";
import { Inter } from "next/font/google";
import D3Component from "@/components/D3component";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <D3Component />
    </main>
  );
}
