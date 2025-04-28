const Hero = () => {
  return (
    <div className="flex flex-col h-screen gap-5 sm:gap-[6vh] py-[8vh] lg:py-[2vw] px-3 text-center text-white">
      <div>
        <h1 className="text-7xl sm:text-[10vw] lg:text-8xl xl:text-10xl font-(family-name:--koulen)">
          FOLLOW THE MOST <br /> PROFITABLE WALLETS
        </h1>
      </div>
      <div>
        <h2 className="text-[6vw] sm:text-3xl xl:text-4xl font-(family-name:--koulen)">SEE WHAT TOP WALLETS ARE DOING BEFORE THE CROWD</h2>
      </div>
      <div>
        <p className="text-[#DADADA] text-xl mx-auto max-w-140 sm:text-xl lg:text-2xl font-(family-name:--abel)">Spot trends early, analyze smart money behavior, and make informed decisions backed by on-chain data.</p>
      </div>
      <div className="relative w-fit mx-auto mt-6">
        <div className="absolute -inset-2 rounded-md blur-lg opacity-80 bg-[linear-gradient(270deg,#00B594,#4D63AC,#8A009F,#00B594)] bg-[length:400%_400%] animate-[background-move_8s_ease-in-out_infinite]"></div>
        <button className="relative px-8 py-3 rounded-md text-5xl bg-[#00B594] [font-family:var(--koulen)]">
          TRY IT
        </button>
      </div>
    </div>
  );
};

export default Hero;
