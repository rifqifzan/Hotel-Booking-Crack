import { formatDate, formatCurrency } from "@/lib/utils";
import { getAllReservations } from "@/lib/data";
import CancelModal from "./cancel-modal";
import clsx from "clsx";

const ReservationTable = async () => {
  const reservations = await getAllReservations();
  if (!reservations?.length) return <p>No Active Reservations Found</p>;

  return (
    <div className="bg-white p-4 mt-5 shadow-sm overflow-x-auto">
      <table className="w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-xs font-bold text-gray-700 uppercase text-left">
              Room
            </th>
            <th className="px-6 py-3 text-xs font-bold text-gray-700 uppercase text-left">
              Guest
            </th>
            <th className="px-6 py-3 text-xs font-bold text-gray-700 uppercase text-left">
              Date
            </th>
            <th className="px-6 py-3 text-xs font-bold text-gray-700 uppercase text-left">
              Payment Status
            </th>
            <th className="px-6 py-3 text-xs font-bold text-gray-700 uppercase text-right">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {reservations.map((item) => (
            <tr className="hover:bg-gray-100" key={item.id}>
              <td className="px-6 py-4 text-sm text-gray-900">
                <div className="font-medium">{item.Room.name}</div>
              </td>
              <td className="px-6 py-4 text-sm text-gray-900">
                <div className="font-medium">{item.User.name}</div>
                <div className="text-gray-500 text-xs">{item.User.email}</div>
              </td>
              <td className="px-6 py-4 text-sm text-gray-900">
                <div>
                  <span className="font-medium">Check-in:</span>{" "}
                  {formatDate(item.startDate.toString())}
                </div>
                <div>
                  <span className="font-medium">Check-out:</span>{" "}
                  {formatDate(item.endDate.toString())}
                </div>
              </td>
              <td className="px-6 py-4 text-sm">
                <span
                  className={clsx(
                    "px-2 py-1 rounded-full text-xs font-semibold",
                    {
                      "bg-green-100 text-green-800":
                        item.Payment?.status === "paid",
                      "bg-yellow-100 text-yellow-800":
                        item.Payment?.status === "unpaid",
                    }
                  )}
                >
                  {item.Payment?.status || "Unknown"}
                </span>
                <div className="text-xs text-gray-500 mt-1">
                  {formatCurrency(item.Payment?.amount || 0)}
                </div>
              </td>
              <td className="px-6 py-4 text-right">
                <CancelModal reservationId={item.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationTable;
