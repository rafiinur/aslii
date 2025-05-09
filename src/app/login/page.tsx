import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2 items-center">
      <div className="flex flex-col gap-4 p-4 sm:p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-md sm:max-w-lg">
            <LoginForm />
          </div>
        </div>
      </div>

      <div className="hidden lg:block relative bg-primary w-[97%] h-[95%] rounded-3xl overflow-hidden">
        <div className="absolute -top-32 -left-16 w-72 h-96 rotate-45 bg-white rounded-full blur-[130px]"></div>
        <div className="absolute -bottom-40 -right-16 w-72 h-96 rotate-45 bg-white rounded-full blur-[130px]"></div>
        <div className="text-white flex flex-col justify-center h-full p-8 md:p-14">
          <h2 className="font-bold text-3xl md:text-4xl mb-8 md:mb-16">
            Kelola Bisnis dengan Mudah
          </h2>
          <p className="text-lg md:text-xl">
            ASLII dirancang dengan antarmuka yang intuitif dan mudah digunakan,
            sehingga siapa pun bisa mengelola bisnis dengan efisien tanpa ribet.
          </p>
        </div>
      </div>
    </div>
  );
}
