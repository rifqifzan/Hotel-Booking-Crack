import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative h-screen text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="Background Image"
          fill
          className="object-cover object-center w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-emerald-950/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-transparent to-transparent"></div>
      </div>

      <div className="relative flex flex-col justify-center items-center h-full text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6 capitalize text-white drop-shadow-sm">
          Book your luxury stay
        </h1>
        <p className="text-lg md:text-2xl text-emerald-50 mb-10 font-light tracking-wide max-w-2xl">
          Experience serenity and tradition in a modern sanctuary designed for you and your family.
        </p>
        <div className="flex flex-col md:flex-row gap-5">
          <Link
            href="/room"
            className="bg-gold-400 text-white hover:bg-[#A37B5C] py-3.5 px-8 md:px-12 text-lg font-semibold hover:shadow-2xl transition-all duration-300 rounded-[2px] uppercase tracking-widest"
          >
            Book Now
          </Link>
          <Link
            href="/contact"
            className="bg-transparent border border-white/30 backdrop-blur-sm text-white hover:bg-white hover:text-emerald-900 py-3.5 px-8 md:px-12 text-lg font-semibold hover:shadow-xl transition-all duration-300 rounded-[2px] uppercase tracking-widest"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
