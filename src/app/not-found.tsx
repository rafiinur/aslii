import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <section className="flex flex-col items-center justify-center min-h-screen text-center">
        <h2 className="font-bold text-4xl mb-2">
          404 - Halaman Tidak Ditemukan{" "}
        </h2>
        <p className="font-secondary text-lg text-neutral-900 mb-7">
          Anda tidak memiliki izin untuk mengakses halaman ini.
        </p>
        <Link href="/">
          <Button variant={"default"} size={"lg"}>
            Kembali Ke Beranda
          </Button>
        </Link>
      </section>
    </>
  );
}
