import EmptyState from "../components/EmptyState";
import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import TripsClient from "./TripsClient";

type Props = {};

const TripsPage = async (props: Props) => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <EmptyState title="Anauthorized" subtitle="Please, Log in to continue" />
    );
  }

  const reservations = await getReservations({ userId: currentUser.id });

  if(reservations.length === 0) {
    return (
        <EmptyState title="No trips found" subtitle="You haven't reserved any trips yet" />
      );
  }

  return(
     <div>
        <TripsClient 
        reservations={reservations}
        currentUser={currentUser}
        />
     </div>
     );
};

export default TripsPage;
