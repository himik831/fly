export default async function searchTickets() {
  const url: string =
    "https://api.skypicker.com/flights?partner=himikhimik2&partner_market=ro&locale=ro&sort=price&fly_from=chisinau_md&fly_to=LTN&depart_after=2022-07-20T00:00&depart_before=2022-07-20T23:59&selected_cabins=M&adults=2&children=0&infants=0&max_stopovers=3&limit=1";
  const response = await fetch(url);
  const json = await response.json();
  return json;

  return Promise.resolve([]);
}
