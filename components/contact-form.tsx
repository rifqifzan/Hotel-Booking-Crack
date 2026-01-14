"use client";
import clsx from "clsx";
// import { useFormState } from "react-dom";
// import { ContactMessage } from "@/lib/actions";
// import { ContactButton } from "@/components/button";

const ContactForm = () => {
  //   const [state, formAction] = useFormState(ContactMessage, null);
  return (
    <div className="bg-white p-8 rounded-sm shadow-sm">
      <form action="">
        <div className="grid md:grid-cols-2 gap-8 mt-6">
          <div>
            <input
              type="text"
              name="name"
              className="bg-transparent p-3 border-b border-gray-300 w-full font-light text-slate-700 placeholder-slate-400 focus:outline-none focus:border-emerald-900 transition-colors"
              placeholder="Name..."
            />
            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2"></p>
            </div>
          </div>
          <div>
            <input
              type="email"
              name="email"
              className="bg-transparent p-3 border-b border-gray-300 w-full font-light text-slate-700 placeholder-slate-400 focus:outline-none focus:border-emerald-900 transition-colors"
              placeholder="johndoe@example.com"
            />
            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2"></p>
            </div>
          </div>
          <div className="md:col-span-2">
            <input
              type="text"
              name="subject"
              className="bg-transparent p-3 border-b border-gray-300 w-full font-light text-slate-700 placeholder-slate-400 focus:outline-none focus:border-emerald-900 transition-colors"
              placeholder="Subject"
            />
            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2"></p>
            </div>
          </div>
          <div className="md:col-span-2">
            <textarea
              name="message"
              rows={5}
              className="bg-transparent p-3 border-b border-gray-300 w-full font-light text-slate-700 placeholder-slate-400 focus:outline-none focus:border-emerald-900 transition-colors resize-none"
              placeholder="Your message..."
            ></textarea>
            <div aria-live="polite" aria-atomic="true">
              <p className="text-sm text-red-500 mt-2"></p>
            </div>
          </div>
        </div>
        {/* button submit */}
        <button
          type="submit"
          className={clsx(
            "px-10 py-4 mt-4 text-center font-semibold text-white w-full bg-gold-400 rounded-[2px] hover:bg-[#A37B5C] cursor-pointer transition-colors duration-200 uppercase tracking-widest text-sm"
          )}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
