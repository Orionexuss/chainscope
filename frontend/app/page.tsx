import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <div className="bg-black bg-radial-[at_50%_0%] via-[#016556] via-78% from-black from-67% to-[#35002C] h-screen">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}
