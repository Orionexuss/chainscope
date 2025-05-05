import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex h-screen flex-col gap-7 px-3 py-[8vh] text-center text-white sm:gap-[4vh] lg:py-[1vw]">
      <div>
        <h1 className="font-(family-name:--koulen) text-[13vw] leading-[1.1] sm:text-[10vw] sm:leading-none lg:text-8xl xl:text-9xl gradient-text">
          FOLLOW THE MOST <br /> PROFITABLE WALLETS
        </h1>
      </div>
      <div>
        <h2 className="font-(family-name:--koulen) text-[6vw] sm:text-3xl xl:text-4xl">
          SEE WHAT TOP WALLETS ARE DOING BEFORE THE CROWD
        </h2>
      </div>
      <div>
        <p className="max-w-140 font-(family-name:--abel) mx-auto text-xl text-[#DADADA] sm:text-xl lg:text-2xl">
          Spot trends early, analyze smart money behavior, and make informed
          decisions backed by on-chain data.
        </p>
      </div>
      <div className="relative mx-auto mt-6 w-fit md:mt-3">
        <button className="relative mb-2 me-2 inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-green-400 to-blue-600 p-0.5 font-medium hover:text-white group">
          <Link
            href={`/auth/register`}
            className="font-(family-name:--koulen) relative cursor-pointer rounded-md bg-transparent px-9 py-3.5 text-3xl transition-all duration-75 ease-in sm:bg-cyan-950 sm:group-hover:bg-transparent group-hover:dark:bg-transparent"
          >
            <span>TRY IT &#62;</span>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
