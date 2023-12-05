import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#0e0f11]">
      <div className="grid min-h-screen place-content-center bg-gradient-radial border border-[#bada55] px-4 md:px-8">
        <h1 className="text-4xl md:text-9xl font-semibold font-inter mb-2">
          Coming Soon<span className="text-[#bad]">!</span>
        </h1>
        <p className="relative text-base md:text-2xl md:ml-5 pl-3 py-2  text-[#f0f0ff99] md:mt-4 border-l-2 border-[#bada55]">
          Daniel&apos;s Portfolio is still in Development
        </p>
      </div>
    </main>
  );
}
