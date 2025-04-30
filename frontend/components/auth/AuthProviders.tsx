import { handleGoogleSignIn } from '@/lib/actions';
import { FaDiscord, FaGithub, FaGoogle } from 'react-icons/fa';

const socialButtonStyle =
  "flex flex-1 cursor-pointer justify-center rounded-xl border border-gray-700 p-4 text-white";

const AuthProviders = () => {
  return (
    <div>
      <div className="flex w-full space-x-4">
        <form className={socialButtonStyle}>
          <button type="button">
            <FaGithub />
          </button>
        </form>
        <form action={handleGoogleSignIn} className={socialButtonStyle}>
          <button type="submit">
            <FaGoogle />
          </button>
        </form>
        <form className={socialButtonStyle}>
          <button type="button">
            <FaDiscord />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthProviders;
