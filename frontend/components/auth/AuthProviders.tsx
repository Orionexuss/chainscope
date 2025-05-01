import { handleGoogleSignIn, handleGithubSignIn, handleDiscordSignIn } from "@/lib/actions";
import { FaDiscord, FaGithub, FaGoogle } from "react-icons/fa";

const socialButtonStyle =
  "flex cursor-pointer w-full justify-center rounded-xl border border-gray-700 p-4 text-white";

const AuthProviders = () => {
  return (
    <div>
      <div className="flex w-full space-x-4">
        <form className="grow" action={handleGithubSignIn}>
          <button type="submit" className={socialButtonStyle}>
            <FaGithub />
          </button>
        </form>
        <form className="grow" action={handleGoogleSignIn}>
          <button type="submit" className={socialButtonStyle}>
            <FaGoogle />
          </button>
        </form>
        <form className="grow" action={handleDiscordSignIn}>
          <button type="submit" className={socialButtonStyle}>
            <FaDiscord />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthProviders;
