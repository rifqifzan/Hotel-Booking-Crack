import { formatDate } from "@/lib/utils";
import { getAmenities } from "@/lib/data";
import { DeleteButton, EditButton } from "./buttons";

const AmenitiesTable = async () => {
  const amenities = await getAmenities();
  if (!amenities?.length) return <p>No Amenities Found</p>;

  return (
    <div className="bg-white p-4 mt-5 shadow-sm">
      <table className="w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-xs font-bold text-gray-700 uppercase text-left">
              Amenities Name
            </th>
            <th className="px-6 py-3 text-xs font-bold text-gray-700 uppercase text-left">
              Created At
            </th>
            <th className="px-6 py-3 text-xs font-bold text-gray-700 uppercase text-right">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {amenities.map((item) => (
            <tr className="hover:bg-gray-100" key={item.id}>
              <td className="px-6 py-4">{item.name}</td>
              <td className="px-6 py-4">
                {formatDate(item.createdAt.toString())}
              </td>
              <td className="px-6 py-4 text-right">
                <div className="flex items-center justify-end gap-1">
                  <EditButton id={item.id} />
                  <DeleteButton id={item.id} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AmenitiesTable;
