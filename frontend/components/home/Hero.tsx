import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero-container">
      <div>
        <h1 className="hero-heading gradient-text">
          FOLLOW THE MOST <br /> PROFITABLE WALLETS
        </h1>
      </div>
      <div>
        <h2 className="hero-subheading">
          SEE WHAT TOP WALLETS ARE DOING BEFORE THE CROWD
        </h2>
      </div>
      <div>
        <p className="hero-paragraph">
          Spot trends early, analyze smart money behavior, and make informed
          decisions backed by on-chain data.
        </p>
      </div>
      <div className="relative mx-auto mt-6 w-fit md:mt-3">
        <button className="hero-button group">
          <Link href={`/auth/register`} className="hero-button-text">
            <span>TRY IT &#62;</span>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
