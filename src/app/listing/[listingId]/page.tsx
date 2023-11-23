import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingbyId from "@/app/actions/getListingById";
import EmptyState from "@/app/components/EmptyState";
import ListingClient from "./ListingClient";
import getReservations from "@/app/actions/getReservation";

type ParamsType = {
  listingId?: string;
};

export default async function ListingPage({ params }: { params: ParamsType }) {
  const listing = await getListingbyId(params);
  const reservation = await getReservations(params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return <EmptyState />;
  }

  return (
    <ListingClient
      listing={listing}
      currentUser={currentUser}
      reservations={reservation}
    />
  );
}
