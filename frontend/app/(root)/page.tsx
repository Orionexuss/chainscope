import Hero from "./ui/Hero";
import Navbar from "./ui/Navbar";

export default function Home() {
  return (
    <>
      <div className="bg-radial-[at_50%_20%] via-88% sm:bg-radial-[at_50%_15%] sm:from-68% fixed h-screen w-screen from-black from-50% via-[#016556] to-[#35002C] sm:from-black sm:via-[#016556] sm:via-85% sm:to-[#35002C]">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}
