"use client";

import { useActionState } from "react";
import { updateAmenities } from "@/lib/actions";
import type { Amenities } from "@prisma/client";

const EditAmenityForm = ({ amenity }: { amenity: Amenities }) => {
  const updateAmenitiesWithId = updateAmenities.bind(null, amenity.id);
  const [state, formAction] = useActionState(updateAmenitiesWithId, null);

  return (
    <form action={formAction}>
      <div className="mb-5">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-900"
        >
          Amenity Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          defaultValue={amenity.name}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Enter Amenity Name"
        />
        <div id="name-error" aria-live="polite" aria-atomic="true">
          <p className="mt-2 text-sm text-red-500">{state?.error?.name}</p>
        </div>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Update
      </button>
    </form>
  );
};

export default EditAmenityForm;
