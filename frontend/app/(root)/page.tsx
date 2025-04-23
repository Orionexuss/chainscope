import Hero from "@/components/home/Hero";
import Navbar from "@/components/home/Navbar";

export default function Home() {
  return (
    <>
      <div className="bg-black bg-radial-[at_50%_15%] via-[#016556] via-80% from-black from-66% to-[#35002C] h-screen">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}
