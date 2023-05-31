import prisma from "@/app/libs/prismadb";

export default async function getListings() {
  try {
    const listings = await prisma.listing.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return listings;
  } catch (err: any) {
    throw new Error(err);
  }
}

// this is all we need to create our listing
// we don't need an api route,
