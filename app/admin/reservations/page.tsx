import ReservationTable from "@/components/admin/reservations/reservation-table";
import Search from "@/components/search";
import { Suspense } from "react";

const ReservationsPage = async (props: {
  searchParams?: Promise<{
    query?: string;
  }>;
}) => {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";

  return (
    <div className="max-w-screen-xl px-4 py-16 my-16 mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-4xl font-bold text-gray-800">Reservation List</h1>
        <div className="w-80 bg-white">
          <Search placeholder="Search guest, room, or date..." />
        </div>
      </div>
      <Suspense key={query} fallback={<p>Loading Reservations...</p>}>
        <ReservationTable query={query} />
      </Suspense>
    </div>
  );
};

export default ReservationsPage;
