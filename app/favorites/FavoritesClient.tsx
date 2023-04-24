import Container from "../components/Container"
import Heading from "../components/Heading"
import ListingCard from "../components/listings/ListingCard"
import { SafeUser, SafeListing } from "../types"

type FavoritesClientProps = {
    listings: SafeListing[],
    currentUser?: SafeUser | null,
}

const FavoritesClient = ({ listings, currentUser }: FavoritesClientProps) => {
  return (
    <div>
        <Container>
            <Heading 
            title="Favorites"
            subtitle="Places you have favorited!"
            />
            <div 
        className="
          mt-10
          grid 
          grid-cols-1 
          sm:grid-cols-1 
          md:grid-cols-2 
          lg:grid-cols-3
          xl:grid-cols-3
          2xl:grid-cols-4
          gap-24
        "
      >
        {listings.map((listing: any) => (
          <ListingCard
            currentUser={currentUser}
            key={listing.id}
            data={listing}
            actionId = ""
          />
        ))}
      </div>
        </Container>
    </div>
  )
}

export default FavoritesClient