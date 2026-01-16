import { array, coerce, object, string } from "zod";

export const RoomSchema = object({
  name: string().min(1),
  description: string().min(50),
  capacity: coerce.number().gt(0),
  price: coerce.number().gt(0),
  amenities: array(string()).optional(),
});

export const ReserveSchema = object({
  name: string().min(1),
  phone: string().min(10),
});

export const AmenitiesSchema = object({
  name: string().min(1),
});

export const ContactSchema = object({
  name: string().min(3, "Name at least 3 characters"),
  email: string()
    .email("Invalid email address")
    .min(10, "Email at least 10 characters"),
  subject: string().min(5, "Subject iat least 5 characters"),
  message: string()
    .min(50, "Message must be at least 50 characters")
    .max(200, "Message must be at most 200 characters"),
});
