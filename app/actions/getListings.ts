import prisma from "@/app/libs/prismadb";

export interface IListingParams {
  userId?: string;
}

export default async function getListings(params: IListingParams) {
  try {
    const { userId } = params;

    let query: any = {};

    if (userId) {
      query.userId = userId;
    }

    const listings = await prisma.listing.findMany({
      where: query,
      orderBy: {
        createdAt: "desc",
      },
    });
    // return listings;  // instead of returning listings, he is gonna return safe listing
    const safeListings = listings.map((listing) => ({
      ...listing,
      createdAt: listing.createdAt.toISOString(),
    }));
    return safeListings;
  } catch (err: any) {
    throw new Error(err);
  }
}

// this is all we need to get our listing
// we don't need an api route,
// we need api (like the one in the folder) to create listings
