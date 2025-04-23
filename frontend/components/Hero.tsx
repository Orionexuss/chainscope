const Hero = () => {
  return (
    <div className="flex flex-col justify-center py-8 text-center text-white">
      <div className="font-(family-name:--koulen)">
        <h1 className="text-8xl mb-5">
          FOLLOW THE MOST <br /> PROFITABLE WALLETS
        </h1>
        <h2 className="text-3xl">SEE WHAT TOP WALLETS ARE DOING BEFORE THE CROWD</h2>
      </div>
      <div>
        <p className="text-[#DADADA] text-2xl font-(family-name:--abel) mt-7">Spot trends early, analyze smart money behavior, and <br /> make informed decisions backed by on-chain data.</p>
      </div>
      <div>
        <button className="font-(family-name:--koulen) mt-7 p-2 cursor-pointer border-2 border-white w-40 bg-transparent rounded-md text-4xl">TRY IT</button>
      </div>
    </div>
  );
};

export default Hero;
