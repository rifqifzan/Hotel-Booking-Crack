"use client";

import Link from "next/link";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { useSession, signOut } from "next-auth/react";
import clsx from "clsx";
import Image from "next/image";

const Navlink = () => {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <>
      {session?.user ? (
        <div className="flex items-center justify-end md:order-2 gap-1">
          <div className="hidden text-sm bg-cream-50 ring-1 ring-gold-400/30 rounded-full md:me-0 md:block focus:ring-4 focus:ring-gold-400/20">
            <Image
              className="size-8 rounded-full"
              src={session.user.image || "/avatar.png"}
              width={64}
              height={64}
              alt="avatar"
            />
          </div>
          <div className="flex items-center">
            <button
              onClick={() => signOut()}
              className="md:block hidden py-2 px-4 text-slate-600 hover:text-red-500 hover:bg-red-50 transition-colors duration-200 rounded-[2px] cursor-pointer text-sm font-medium tracking-wide"
            >
              Sign Out
            </button>
          </div>
        </div>
      ) : null}
      {/* Toogle button navlink */}
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center p-2 justify-center text-sm text-slate-500 rounded-md md:hidden hover:bg-gray-100 focus:outline-none"
      >
        {!open ? <IoMenu className="size-8" /> : <IoClose className="size-8" />}
      </button>

      {/* Navlink */}
      <div
        className={clsx("w-full md:block md:w-auto", {
          hidden: !open,
        })}
      >
        <ul className="flex flex-col font-medium text-sm uppercase tracking-widest p-4 mt-4 rounded-sm bg-cream-50 md:flex-row md:items-center md:space-x-8 md:p-0 md:mt-0 md:border-0 md:bg-transparent">
          <li>
            <Link
              className="block py-2 px-3 text-slate-700 hover:text-gold-400 transition-colors duration-200 md:p-0"
              href={`/`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="block py-2 px-3 text-slate-700 hover:text-gold-400 transition-colors duration-200 md:p-0"
              href={`/about`}
            >
              About
            </Link>
          </li>
          {session?.user.role !== "admin" && (
            <li>
              <Link
                className="block py-2 px-3 text-slate-700 hover:text-gold-400 transition-colors duration-200 md:p-0"
                href={`/room`}
              >
                Rooms
              </Link>
            </li>
          )}
          <li>
            <Link
              className="block py-2 px-3 text-slate-700 hover:text-gold-400 transition-colors duration-200 md:p-0"
              href={`/contact`}
            >
              Contact
            </Link>
          </li>
          {/* Show menu base on session */}
          {session && (
            <>
              {session.user.role === "user" && (
                <li>
                  <Link
                    className="block py-2 px-3 text-slate-700 hover:text-gold-400 transition-colors duration-200 md:p-0"
                    href={`/myreservation`}
                  >
                    My Reservation
                  </Link>
                </li>
              )}
              {session.user.role === "admin" && (
                <>
                  <li>
                    <Link
                      className="block py-2 px-3 text-slate-700 hover:text-gold-400 transition-colors duration-200 md:p-0"
                      href={`/admin/dashboard`}
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block py-2 px-3 text-slate-700 hover:text-gold-400 transition-colors duration-200 md:p-0"
                      href={`/admin/room`}
                    >
                      Manage Room
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block py-2 px-3 text-slate-700 hover:text-gold-400 transition-colors duration-200 md:p-0"
                      href={`/admin/reservations`}
                    >
                      Reservations
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block py-2 px-3 text-slate-700 hover:text-gold-400 transition-colors duration-200 md:p-0"
                      href={`/admin/amenities`}
                    >
                      Amenities
                    </Link>
                  </li>
                </>
              )}
            </>
          )}
          {session ? (
            <li className="pt-2 md:pt-0">
              <button
                onClick={() => signOut()}
                className="md:hidden py-2.5 px-4 bg-red-50 text-red-500 hover:bg-red-100 rounded-[2px] cursor-pointer w-full text-center transition-colors"
              >
                Sign Out
              </button>
            </li>
          ) : (
            <li className="pt-2 md:pt-0">
              <Link
                href="/signin"
                className="block py-2 px-6 bg-gold-400 text-white hover:bg-[#A37B5C] transition-colors duration-200 rounded-[2px] font-semibold tracking-wide"
              >
                Sign In
              </Link>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default Navlink;
