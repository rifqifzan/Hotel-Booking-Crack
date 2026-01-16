"use client";

import { useActionState, useState } from "react";
import { cancelReservation } from "@/lib/actions";
import { IoTrashOutline } from "react-icons/io5";
import clsx from "clsx";

const CancelModal = ({ reservationId }: { reservationId: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const cancelReservationWithId = cancelReservation.bind(null, reservationId);
  const [, formAction, isPending] = useActionState(
    cancelReservationWithId,
    null
  );

  const handleSubmit = (formData: FormData) => {
    formAction(formData);
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 bg-red-100 hover:bg-red-200 text-red-800 rounded-sm"
      >
        <IoTrashOutline size={20} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Cancel Reservation
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Are you sure you want to cancel this reservation? This action cannot
              be undone. Please provide a reason.
            </p>
            <form action={handleSubmit}>
              <textarea
                name="reason"
                required
                placeholder="Reason for cancellation..."
                className="w-full border border-gray-300 rounded-md p-2 mb-4 text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
                rows={3}
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isPending}
                  className={clsx(
                    "px-4 py-2 text-sm text-white bg-red-600 hover:bg-red-700 rounded-md",
                    { "opacity-50 cursor-not-allowed": isPending }
                  )}
                >
                  {isPending ? "Cancelling..." : "Confirm Cancel"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CancelModal;
