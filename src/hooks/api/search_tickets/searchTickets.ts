import CharForAPIByFlySeatType from "../../../utils/CharForAPIByFlySeatType";

export default async function searchTickets(searchDetails) {
  console.log("searchDetails", searchDetails.state);

  const departure =
    searchDetails.state.departure.codeIata.length === 3
      ? searchDetails.state.departure.codeIata
      : searchDetails.state.departure.country;
  const destination =
    searchDetails.state.destination.codeIata.length === 3
      ? searchDetails.state.destination.codeIata
      : searchDetails.state.destination.country;

  const departureDate = searchDetails.state.departureDate;
  const returnDate = searchDetails.state.returnDate;

  const adult = searchDetails.state.passangers.adultNumber;
  const childrenNumber = searchDetails.state.passangers.childrenNumber;
  const babiesNumber = searchDetails.state.passangers.babiesNumber;

  const seatType = CharForAPIByFlySeatType(
    searchDetails.state.passangers.airfyType
  );

  const url: string = `https://api.skypicker.com/flights?partner=himikhimik2&partner_market=ro&locale=ro&sort=price&fly_from=${departure}&fly_to=${destination}&depart_after=${departureDate}T00:00&depart_before=${returnDate}T23:59&selected_cabins=${seatType}&adults=${adult}&children=${childrenNumber}&infants=${babiesNumber}&max_stopovers=3&limit=10`;
  const response = await fetch(url);
  const json = await response.json();

  return json;

  return Promise.resolve([]);
}
