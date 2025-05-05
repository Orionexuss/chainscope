import Hero from "./ui/Hero";
import Navbar from "./ui/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div
        className="absolute z-20 inset-0 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_2px),linear-gradient(to_bottom,#80808012_1px,transparent_2px)] bg-[size:24px_24px] [mask-image:radial-gradient(closest-side_at_50%_50%,black_0%,black_60%,transparent_98%)]
 [mask-repeat:no-repeat] [mask-size:100%_100%]"
      ></div>

      <div className="bg-radial-[at_50%_20%] via-88% sm:bg-radial-[at_50%_20%] absolute sm:from-68% h-full w-full from-black from-50% via-[#016556] to-[#35002C] sm:from-black sm:via-[#016556] opacity-50 sm:via-85% sm:to-[#35002C]"></div>
      <div className="relative z-30">
        <Hero />
      </div>
    </>
  );
}
