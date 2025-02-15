import React from "react";
import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <section className="bg-brand hidden w-1/2 items-center justify-center lg:flex xl:w-2/5">
        <div className="flex max-h-[800px] max-w-[430px] flex-col justify-center space-y-12">
          <div className="flex items-center space-x-5">
            <Image src="/logo.png" alt="logo" width={100} height={80} />
            <div className="text-4xl text-white font-semibold">ByteMe</div>
          </div>
          <div className="space-y-3 text-white">
            <p className="text-4xl font-black">ByteMe: Your Data’s New BFF.</p>
            <p className="text-3xl text-brand-500 font-bold pt-4">
              Fast. Secure. Limitless Data Solutions.
            </p>
          </div>
          <Image
            src="/file-bg.png"
            alt="background"
            width={500}
            height={500}
            className="transition-all hover:-rotate-2 hover:scale-105"
          />
        </div>
      </section>
      <section className="bg-yellow-50 flex flex-1 flex-col items-center p-4 py-10 lg:justify-center lg:p-10 lg:py-0">
        <div className="mb-16 lg:hidden">
          <div className="flex items-center space-x-5">
            <Image src="/mobile-logo.png" alt="logo" width={120} height={80} />
            <div className="text-4xl text-brand-100 font-semibold">ByteMe</div>
          </div>
        </div>
        {children}
      </section>
    </div>
  );
};

export default Layout;
