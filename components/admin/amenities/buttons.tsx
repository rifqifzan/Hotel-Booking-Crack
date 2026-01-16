"use client";

import Link from "next/link";
import { IoPencil, IoTrashOutline } from "react-icons/io5";
import { deleteAmenities } from "@/lib/actions";

export const EditButton = ({ id }: { id: string }) => {
  return (
    <Link
      href={`/admin/amenities/edit/${id}`}
      className="p-2 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-sm"
    >
      <IoPencil size={20} />
    </Link>
  );
};

export const DeleteButton = ({ id }: { id: string }) => {
  return (
    <form action={deleteAmenities.bind(null, id)}>
      <button className="p-2 bg-red-100 hover:bg-red-200 text-red-800 rounded-sm">
        <IoTrashOutline size={20} />
      </button>
    </form>
  );
};
