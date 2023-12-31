import Fresh from "@/components/Fresh";
import Hero from "@/components/hero";
// import Image from "next/image";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Hero />
      <Fresh />
    </div>
  );
}
