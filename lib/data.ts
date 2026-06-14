import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export const getAmenities = async () => {
  try {
    const result = await prisma.amenities.findMany();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getAmenitiesById = async (id: string) => {
  try {
    const result = await prisma.amenities.findUnique({
      where: { id: id },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getRooms = async () => {
  try {
    const result = await prisma.room.findMany({
      orderBy: { createdAt: "desc" },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getRoomById = async (roomId: string) => {
  try {
    const result = await prisma.room.findUnique({
      where: { id: roomId },
      include: { RoomAmenities: { select: { amenitiesId: true } } },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getRoomDetailById = async (roomId: string) => {
  try {
    const result = await prisma.room.findUnique({
      where: { id: roomId },
      include: {
        RoomAmenities: {
          include: {
            Amenities: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

// get Checkout Detail By Id
export const getReservationById = async (id: string) => {
  try {
    const result = await prisma.reservation.findUnique({
      where: { id: id },
      include: {
        Room: {
          select: {
            name: true,
            image: true,
            price: true,
          },
        },
        User: {
          select: {
            name: true,
            email: true,
            phone: true,
          },
        },
        Payment: true,
      },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getReservationByUserId = async () => {
  const session = await auth();
  if (!session || !session.user || !session?.user?.id) {
    throw new Error("Unauthorized access");
  }
  try {
    const result = await prisma.reservation.findMany({
      where: { userId: session.user.id },
      include: {
        Room: {
          select: {
            name: true,
            image: true,
            price: true,
          },
        },
        User: {
          select: {
            name: true,
            email: true,
            phone: true,
          },
        },
        Payment: true,
      },
      orderBy: { createdAt: "desc" },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getReservationByRoomId = async (roomId: string) => {
  const result = await prisma.reservation.findMany({
    select: {
      startDate: true,
      endDate: true,
    },
    where: {
      roomId: roomId,
      Payment: { status: { not: "failure" } },
    },
    orderBy: { startDate: "asc" },
  });
  return result;
};

export const getAllReservations = async (query?: string) => {
  try {
    const filters: any[] = [
      {
        CancelledReservation: {
          is: null,
        },
      },
    ];

    if (query) {
      const dateQuery = new Date(query);
      const isDate = !isNaN(dateQuery.getTime());

      const orConditions: any[] = [
        { User: { name: { contains: query, mode: "insensitive" } } },
        { User: { email: { contains: query, mode: "insensitive" } } },
        { Room: { name: { contains: query, mode: "insensitive" } } },
      ];

      if (isDate) {
         // Create start and end of the day for date comparison
        const startOfDay = new Date(dateQuery.setHours(0, 0, 0, 0));
        const endOfDay = new Date(dateQuery.setHours(23, 59, 59, 999));
        
        orConditions.push({
            startDate: {
                gte: startOfDay,
                lte: endOfDay
            }
        });
         orConditions.push({
            endDate: {
                gte: startOfDay,
                lte: endOfDay
            }
        });
      }
      
      filters.push({ OR: orConditions });
    }

    const result = await prisma.reservation.findMany({
      where: {
        AND: filters,
      },
      include: {
        Room: {
          select: {
            name: true,
            image: true,
          },
        },
        User: {
          select: {
            name: true,
            email: true,
          },
        },
        Payment: true,
      },
      orderBy: { createdAt: "desc" },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};
