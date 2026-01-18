import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-emerald-900 text-emerald-50 relative overflow-hidden">
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
            backgroundImage: "radial-gradient(#B08968 1px, transparent 1px)",
            backgroundSize: "24px 24px"
        }}></div>

      <div className="max-w-screen-xl mx-auto w-full px-4 py-16 md:py-24 relative z-10">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <Link href={`/`} className="block">
              <Image
                src="/logo.png"
                width={128}
                height={49}
                alt="logo"
                priority={true}
                className="brightness-0 invert opacity-90"
              />
            </Link>
            <p className="text-emerald-100/80 font-light leading-relaxed">
              Experience luxury and comfort in the heart of the city. Your
              perfect stay awaits in our sharia-compliant sanctuary.
            </p>
          </div>
          <div className="">
            <div className="flex gap-20">
              <div className="flex-1 md:flex-none">
                <h4 className="mb-6 text-xl font-serif text-gold-400">Links</h4>
                <ul className="list-item space-y-4 text-emerald-100/70 font-light">
                  <li>
                    <Link href="#" className="hover:text-gold-400 transition-colors">Home</Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-gold-400 transition-colors">About Us</Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-gold-400 transition-colors">Rooms</Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-gold-400 transition-colors">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div className="flex-1 md:flex-none">
                <h4 className="mb-6 text-xl font-serif text-gold-400">Legal</h4>
                <ul className="list-item space-y-4 text-emerald-100/70 font-light">
                  <li>
                    <a href="#" className="hover:text-gold-400 transition-colors">Legal</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gold-400 transition-colors">Term & Condition</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gold-400 transition-colors">Payment Method</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="">
            <h4 className="mb-6 text-xl font-serif text-gold-400">
              Newsletter
            </h4>
            <p className="text-emerald-100/80 font-light mb-6">
              Subscribe to our newsletter to receive exclusive offers and the
              latest news about our hotel.
            </p>
            <form action="" className="mt-5 space-y-4">
              <div className="mb-5">
                <input
                  type="text"
                  name="email"
                  className="w-full p-3 bg-white/5 border-b border-emerald-500/30 text-emerald-50 placeholder-emerald-100/30 focus:outline-none focus:border-gold-400 transition-colors"
                  placeholder="johndoe@example.com"
                />
              </div>
              <button className="bg-gold-400 p-3 font-semibold text-white w-full text-center rounded-[2px] hover:bg-[#A37B5C] transition-colors uppercase tracking-wider text-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-4 border-t border-emerald-800 py-8 text-center text-sm text-emerald-100/40 relative z-10 font-light tracking-wide">
        &copy; Copyright 2025 | Rifqi Fauzan | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
