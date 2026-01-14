import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const amenities = [
    "Free WiFi",
    "Air Conditioning",
    "Swimming Pool",
    "Parking",
    "Restaurant",
    "Room Service",
    "Gym",
    "TV",
    "Mini Bar",
    "Kitchen",
  ];

  console.log("Starting to seed amenities...");

  await prisma.amenities.createMany({
    data: amenities.map((name) => ({ name })),
    skipDuplicates: true,
  });

  console.log(`Successfully seeded ${amenities.length} amenities!`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
