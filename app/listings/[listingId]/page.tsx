import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";
import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";
import ListingClient from "./ListingClient";

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
  const listing = await getListingById(params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <ListingClient listing={listing} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default ListingPage;

// this is a server component there we cannot use the next/navigation router here (we cannot use hooks inside of here)
// so can only use actions like getListingById() which directly communicate with the database directly through the server components
// but we can still access the server components in our parameters which is the url up here
// so initially when i had not taken care of the if(!listing) , typescript was given me an error but immediately i fixed it, typescript went ahead and made way. typescript would have done it listing?.title to fixed it
