import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservation";
import EmptyState from "../components/EmptyState";
import ReservationClient from "./ReservationClient";

export default async function ReservationPage() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }

  const reservations = await getReservations({
    authorId: currentUser.id,
  });

  if (reservations.length === 0) {
    return (
      <EmptyState
        title="No reservations found"
        subtitle="Looks like you have no reservations on your properties"
      />
    );
  }
  return (
    <ReservationClient reservations={reservations} currentUser={currentUser} />
  );
}
