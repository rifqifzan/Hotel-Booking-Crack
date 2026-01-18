import Image from "next/image";
import Link from "next/link";
import { IoPeopleOutline } from "react-icons/io5";
import { Room } from "@prisma/client";
import { formatCurrency } from "@/lib/utils";
import { auth } from "@/auth";

const Card = async ({ room }: { room: Room }) => {
  const session = await auth();
  return (
    <div className="bg-white shadow-sm hover:shadow-2xl transition-all duration-300 rounded-[2px] border border-stone-100">
      {/* image waraper */}
      <div className="h-[260px] w-auto rounded-t-[2px] relative overflow-hidden group">
        <Image
          src={room.image}
          width={384}
          height={256}
          alt={room.name}
          className="w-full h-full object-cover rounded-t-[2px] group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      {/* Icons Wraper */}
      <div className="p-8">
        <h4 className="text-2xl font-serif font-medium text-emerald-900 mb-2">
          <Link
            href={`/room/${room.id}`}
            className="hover:text-amber-400 transition duration-150"
          >
            {room.name}
          </Link>
        </h4>
        <h4 className="text-xl mb-7">
          <span className="font-semibold text-slate-600">
            {formatCurrency(room.price)}
          </span>
          <span className="text-slate-400 text-sm ml-1">/ Night</span>
        </h4>

        <div className="flex items-center justify-between border-t border-stone-100 pt-4 mt-4">
          <div className="flex items-center space-x-2 text-slate-500">
            <IoPeopleOutline className="text-lg" />
            <span className="text-sm font-medium tracking-wide">
              {room.capacity} {room.capacity === 1 ? "Guest" : "Guests"}
            </span>
          </div>
          {session?.user.role !== "admin" && (
            <Link
              href={`/room/${room.id}`}
              className="px-6 py-2.5 md:px-8 md:py-3 font-semibold text-white bg-gold-400 rounded-[2px] hover:bg-[#A37B5C] transition duration-200 text-sm uppercase tracking-wider"
            >
              Book Now
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
