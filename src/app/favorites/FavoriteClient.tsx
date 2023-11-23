"use client";

import Container from "../components/Container";
import Heading from "../components/Heading";
import ListingCard from "../components/listings/ListingCard";
import { SafeListing, SafeUser } from "../types";

type FavoriteClientProps = {
  listings: SafeListing[];
  currentUser: SafeUser | null;
};

export default function FavoriteClient({
  listings,
  currentUser,
}: FavoriteClientProps) {
  return (
    <Container>
      <Heading title="Fovrites" subtitle="List of places you have favorited!" />
      <div className=" mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            data={listing}
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
}
