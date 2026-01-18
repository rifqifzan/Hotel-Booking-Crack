import { signIn } from "@/auth";
import { FaG } from "react-icons/fa6";

export const SigninGoogleButton = ({
  redirectUrl,
}: {
  redirectUrl: string;
}) => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: redirectUrl });
      }}
    >
      <button className="flex items-center justify-center gap-2 w-full bg-blue-700 text-white font-medium py-3 px-6 text-base rounded-[2px] hover:bg-blue-600 cursor-pointer transition-colors">
        <FaG className="h-6 w-6" />
        Sign In With Google
      </button>
    </form>
  );
};
