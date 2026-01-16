"use client";

import { useActionState } from "react";
import { ContactMessage } from "@/lib/actions";
import clsx from "clsx";

const ContactForm = () => {
  const [state, formAction, isPending] = useActionState(ContactMessage, null);

  return (
    <div className="bg-white p-8 rounded-sm shadow-sm">
      <form action={formAction}>
        {state?.success && (
          <div className="mb-4 p-4 bg-green-50 border border-green-200 text-green-800 rounded-sm">
            {state.success}
          </div>
        )}
        {state?.message && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-800 rounded-sm">
            {state.message}
          </div>
        )}
        <div className="grid md:grid-cols-2 gap-8 mt-6">
          <div>
            <input
              type="text"
              name="name"
              defaultValue={(state?.formData?.name as string) || ""}
              className="bg-transparent p-3 border-b border-gray-300 w-full font-light text-slate-700 placeholder-slate-400 focus:outline-none focus:border-emerald-900 transition-colors"
              placeholder="Name..."
            />
            <div aria-live="polite" aria-atomic="true">
              {state?.error?.name && (
                <p className="text-sm text-red-500 mt-2">{state.error.name[0]}</p>
              )}
            </div>
          </div>
          <div>
            <input
              type="email"
              name="email"
              defaultValue={(state?.formData?.email as string) || ""}
              className="bg-transparent p-3 border-b border-gray-300 w-full font-light text-slate-700 placeholder-slate-400 focus:outline-none focus:border-emerald-900 transition-colors"
              placeholder="johndoe@example.com"
            />
            <div aria-live="polite" aria-atomic="true">
              {state?.error?.email && (
                <p className="text-sm text-red-500 mt-2">{state.error.email[0]}</p>
              )}
            </div>
          </div>
          <div className="md:col-span-2">
            <input
              type="text"
              name="subject"
              defaultValue={(state?.formData?.subject as string) || ""}
              className="bg-transparent p-3 border-b border-gray-300 w-full font-light text-slate-700 placeholder-slate-400 focus:outline-none focus:border-emerald-900 transition-colors"
              placeholder="Subject"
            />
            <div aria-live="polite" aria-atomic="true">
              {state?.error?.subject && (
                <p className="text-sm text-red-500 mt-2">
                  {state.error.subject[0]}
                </p>
              )}
            </div>
          </div>
          <div className="md:col-span-2">
            <textarea
              name="message"
              defaultValue={(state?.formData?.message as string) || ""}
              rows={5}
              className="bg-transparent p-3 border-b border-gray-300 w-full font-light text-slate-700 placeholder-slate-400 focus:outline-none focus:border-emerald-900 transition-colors resize-none"
              placeholder="Your message..."
            ></textarea>
            <div aria-live="polite" aria-atomic="true">
              {state?.error?.message && (
                <p className="text-sm text-red-500 mt-2">
                  {state.error.message[0]}
                </p>
              )}
            </div>
          </div>
        </div>
        {/* button submit */}
        <button
          type="submit"
          disabled={isPending}
          className={clsx(
            "px-10 py-4 mt-4 text-center font-semibold text-white w-full bg-gold-400 rounded-[2px] hover:bg-[#A37B5C] cursor-pointer transition-colors duration-200 uppercase tracking-widest text-sm",
            {
              "opacity-50 cursor-not-allowed": isPending,
            }
          )}
        >
          {isPending ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
