import CreateAmenityForm from "@/components/admin/amenities/create-form";

const CreateAmenityPage = () => {
  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center mb-5">Add New Amenity</h1>
      <CreateAmenityForm />
    </div>
  );
};

export default CreateAmenityPage;
