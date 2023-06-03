import prisma from "@/app/libs/prismadb";

interface IParams {
  listingId?: string;
  userId?: string;
  authorId?: string;
}

// what is the IParams is doing is that we should be able to query the reservations by listingId (my trips page), authorId(my reservations) ,

export default async function getReservations(params: IParams) {
  try {
    const { listingId, userId, authorId } = params;

    const query: any = {};

    // depending on what we send we are going to query by different things
    // if we send listingId, we are going to find all the reservations for this single listing that we are looking at
    // if we search by userId, we are going to find all the trips a user have
    // if we search by authorId, we are going to search for all the reservations that other users made for our listings

    if (listingId) {
      query.listingId = listingId;
    }

    if (userId) {
      query.userId = userId;
    }

    if (authorId) {
      query.listing = { userId: authorId };
    }

    const reservations = await prisma.reservation.findMany({
      where: query,
      include: {
        listing: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const safeReservations = reservations.map((reservation) => ({
      ...reservation,
      createdAt: reservation.createdAt.toISOString(),
      startDate: reservation.startDate.toISOString(),
      endDate: reservation.endDate.toISOString(),
      listing: {
        ...reservation.listing,
        createdAt: reservation.listing.createdAt.toISOString,
      },
    }));
    return safeReservations;
  } catch (err: any) {
    throw new Error(err);
  }
}
