import { Mail, MessageSquareMore } from "lucide-react";
import Link from "next/link";

export default function EmailCard() {
  return (
    <div className="w-full max-w-md sm:max-w-lg">
      <div className="flex flex-col gap-4 mb-11">
        <h1 className="text-4xl font-bold text-primary">Lupa Password?</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Ada dua pilihan cara untuk kamu mendapatkan password!
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <Link href="#" className="block">
          <div className="border rounded-lg p-6 border-primary">
            <div className="flex items-start gap-5">
              <div className="flex-shrink-0 size-16 flex items-center justify-center rounded-full bg-primary-200 text-primary-400">
                <Mail size={30} strokeWidth={2} />
              </div>

              <div className="flex flex-col gap-1">
                <h2 className="font-semibold flex items-center gap-2 text-neutral-800">
                  Reset password via email
                </h2>

                <p className="text-sm leading-relaxed text-neutral-800">
                  Kamu akan mendapatkan email dengan link untuk reset password
                  kamu.
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link href="#" className="block">
          <div className="border rounded-lg p-6 border-primary">
            <div className="flex items-start gap-5">
              <div className="flex-shrink-0 size-16 flex items-center justify-center rounded-full bg-primary-200 text-primary-400">
                <MessageSquareMore size={30} strokeWidth={2} />
              </div>

              <div className="flex flex-col gap-1">
                <h2 className="font-semibold flex items-center gap-2 text-neutral-800">
                  Reset password via SMS
                </h2>

                <p className="text-sm leading-relaxed text-neutral-800">
                  Kamu akan mendapatkan email dengan link untuk reset password
                  kamu.
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
