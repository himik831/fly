import CharForAPIByFlySeatType from "../../../utils/CharForAPIByFlySeatType";

export default async function searchTickets(searchDetails) {
  console.log("searchDetails", searchDetails.state.passangers.airfyType);

  const departure = searchDetails.state.departure.codeIata;
  const destination = searchDetails.state.destination.codeIata;

  const departureDate = searchDetails.state.departureDate;
  const returnDate = searchDetails.state.returnDate;

  const adult = searchDetails.state.passangers.adultNumber;
  const childrenNumber = searchDetails.state.passangers.childrenNumber;
  const babiesNumber = searchDetails.state.passangers.babiesNumber;

  const seatType = CharForAPIByFlySeatType(
    searchDetails.state.passangers.airfyType
  );

  console.log("tyyyyyyyui: ", seatType);

  const url: string = `https://api.skypicker.com/flights?partner=himikhimik2&partner_market=ro&locale=ro&sort=price&fly_from=${departure}&fly_to=${destination}&depart_after=${departureDate}T00:00&depart_before=${returnDate}T23:59&selected_cabins=${seatType}&adults=${adult}&children=${childrenNumber}&infants=${babiesNumber}&max_stopovers=3&limit=10`;
  console.log("URL: ", url);
  const response = await fetch(url);
  const json = await response.json();

  // const val = json.filter((e) => e.availability.seats !== null);
  // console.log('vavavvvavl:', val)

  return json;

  return Promise.resolve([]);
}
