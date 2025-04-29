import Hero from "@/components/home/Hero";
import Navbar from "@/components/home/Navbar";

export default function Home() {
  return (
    <>
      <div
        className="bg-radial-[at_50%_20%] via-[#016556] via-88% from-black from-50% to-[#35002C] w-screen h-screen fixed
        sm:bg-radial-[at_50%_15%] sm:via-[#016556] sm:via-85% sm:from-black sm:from-68% sm:to-[#35002C]"
      >
        <Navbar />
        <Hero />
      </div>
    </>
  );
}
