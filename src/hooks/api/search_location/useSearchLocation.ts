function getAirports(id) {
  return fetch(
    `https://api.skypicker.com/locations?locale=ro-RO&sort=rank&location_types=airport&type=subentity&limit=20&term=${id}`
  )
    .then((response) => response.json())
    .then((json) => json.locations);
}

async function getAirport(airportParam) {
  const ids = [];
  const result = [];

  ids.push(airportParam.locations);

  for (const [index, value] of ids.entries()) {
    for (const airport of value) {
      result.push({
        id: airport.id,
        city: airport.city.name,
        country: airport.city.country.name,
        airports: airportParam.locations,
      });
    }
  }

  return result;
}

async function getAirportsByCodeIata(codeIata) {
  const ids = [];
  const result = [];

  ids.push(codeIata);

  for (const [index, value] of ids.entries()) {
    for (const airport of value) {
      result.push({
        id: airport.id,
        city: airport.city.name,
        country: airport.city.country.name,
        airports: codeIata,
      });
    }
  }

  return result;
}

async function getAirportsByCityId(cityId) {
  const ids = [];
  const result = [];

  ids.push(cityId);

  for (const [index, value] of ids.entries()) {
    for (const airport of value) {
      result.push({
        id: airport.id,
        city: airport.name,
        country: airport.country.name,
        airports: await getAirports(airport.id),
      });
    }
  }

  return result;
}

async function getAirportsByCountryCode(countryCode) {
  const host: string = "https://api.skypicker.com/";
  const locale: string = "ro-RO";
  const sort: string = "rank";
  const limit: number = 10;
  const typeAiroport: string = "airport";
  const typeCity: string = "city";
  const typeSubentity: string = "subentity";
  const result = [];

  const requests = countryCode
    .map(
      (code) =>
        `${host}locations?locale=${locale}&sort=${sort}&location_types=${typeAiroport}&location_types=${typeCity}&type=${typeSubentity}&limit=${limit}&term=${code.id}`
    )
    .map((url) => fetch(url));

  const airports = await Promise.all(requests).then(
    (airtportsByCountryCode) => {
      return Promise.all(airtportsByCountryCode.map((resp) => resp.json()));
    }
  );

  const airportInfo = airports.map((airport) => {
    return airport.locations.filter((el) => el.id.includes("_"));
  });

  for (const [index, value] of airportInfo.entries()) {
    for (const airport of value) {
      result.push({
        id: airport.id,
        city: airport.name,
        country: airport.country.name,
        airports: await getAirports(airport.id),
      });
    }
  }

  return result;
}

export default async function searchCityAirports(location) {
  const host: string = "https://api.skypicker.com/";
  const locale: string = "ro-RO";
  const sort: string = "rank";
  const limit: number = 10;
  const typeAiroport: string = "airport";
  const typeCity: string = "city";
  const typeCountry: string = "country";
  const urlAirportsByCountryCode: string = `${host}locations?locale=${locale}&sort=${sort}&location_types=${typeAiroport}&location_types=${typeCity}&location_types=${typeCountry}&limit=${limit}&term=${location}`;

  const response = await fetch(urlAirportsByCountryCode);
  const json = await response.json();
  const countryCode = json.locations.filter((e) => e.id.length === 2);
  const cityId = json.locations.filter((el) => el.id.includes("_"));
  const codeIata = json.locations.filter(
    (el) => el.id === location.toUpperCase()
  );
  const airport = json;

  if (codeIata && location.length === 3) {
    return await getAirportsByCodeIata(codeIata);
  } else if (countryCode.length !== 0) {
    return await getAirportsByCountryCode(countryCode);
  } else if (cityId.length !== 0) {
    return await getAirportsByCityId(cityId);
  } else {
    return await getAirport(airport);
  }

  return Promise.resolve([]);
}
