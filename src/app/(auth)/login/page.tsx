import { LoginForm } from "./components/login-form";

export default function LoginPage() {
  return (
    <div className="w-full max-w-md sm:max-w-lg">
      <div className="flex flex-col gap-4 mb-11">
        <h1 className="text-4xl font-bold text-primary">Login</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Siap produktif hari ini? Masukkan informasi login Anda!
        </p>
      </div>
      <LoginForm />
    </div>
  );
}
