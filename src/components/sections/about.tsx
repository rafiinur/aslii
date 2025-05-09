import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="bg-primary scroll-m-40" id="tentang">
      <div className="container relative mx-auto text-white">
        <div className="flex flex-col justify-center py-24 px-4 sm:px-6 lg:px-8 max-w-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-11">
            Tentang Kami
          </h2>
          <p className="text-xl">
            ASLII adalah platform inovatif yang membantu bisnis dalam mengelola
            tugas, absensi, dan kinerja karyawan secara efisien. Dengan
            fitur-fitur unggulan kami, ASLII memungkinkan perusahaan untuk
            menyederhanakan proses administrasi, memantau kinerja karyawan
            secara real-time, serta memberikan wawasan berbasis data untuk
            pengambilan keputusan yang lebih baik.
          </p>
        </div>
        <div className="bg-primary/200 hidden lg:block">
          <Image
            src="/img/tentang.png"
            alt="tentang"
            width={200}
            height={200}
            className="absolute right-0 top-0 w-72 object-cover "
          />
        </div>
      </div>
    </section>
  );
};

export default About;
