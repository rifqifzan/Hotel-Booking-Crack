import ReservationTable from "@/components/admin/reservations/reservation-table";
import { Suspense } from "react";

const ReservationsPage = () => {
  return (
    <div className="max-w-screen-xl px-4 py-16 mt-10 mx-auto">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold text-gray-800">Reservation List</h1>
      </div>
      <Suspense fallback={<p>Loading Reservations...</p>}>
        <ReservationTable />
      </Suspense>
    </div>
  );
};

export default ReservationsPage;
