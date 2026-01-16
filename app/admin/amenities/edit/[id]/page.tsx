import EditAmenityForm from "@/components/admin/amenities/edit-form";
import { getAmenitiesById } from "@/lib/data";
import { notFound } from "next/navigation";

const EditAmenityPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const amenity = await getAmenitiesById(id);

  if (!amenity) return notFound();

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center mb-5">Edit Amenity</h1>
      <EditAmenityForm amenity={amenity} />
    </div>
  );
};

export default EditAmenityPage;
