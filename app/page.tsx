import { Suspense } from "react";
import Main from "@/components/main";
import Hero from "@/components/hero";
import HomeSkeleton from "@/components/skeletons/home-skeleton";

export default function Home() {
  return (
    <div className="bg-cream-50">
      <Hero />
      <div className="py-24 relative">
        <div className="absolute inset-0 bg-pattern opacity-50 pointer-events-none"></div>

        <div className="relative z-10">
          <div className="text-center mb-16 max-w-2xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-serif font-medium text-emerald-900 mb-4">
              Our Rooms & Suites
            </h1>
            <div className="h-1 w-24 bg-gold-400 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              Discover our varied range of rooms and suites, designed for your
              ultimate comfort, relaxation, and spiritual peace.
            </p>
          </div>
          {/* Main Content */}
          <Suspense fallback={<HomeSkeleton />}>
            <Main />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
