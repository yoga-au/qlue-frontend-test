import styled from "styled-components";

const Table = () => {
  const Table = styled.table`
    width: 100%;
    border: 1px solid hsl(240, 20%, 75%);
    border-radius: 8px;
  `;

  const TableHeadContainer = styled.thead`
    text-align: left;
    background-color: hsl(240, 20%, 98%);
  `;

  const TableHead = styled.th`
    padding-block: 1em;
    padding-left: 1em;
    font-weight: 700;
    font-size: 0.875em;
    letter-spacing: 1px;
    color: hsl(237.5, 11%, 44%);
    border-bottom: 1px solid hsl(240, 20%, 75%);
  `;

  const TableData = styled.td`
    padding: 1em;
    border-bottom: 1px solid hsl(240, 20%, 90%);
  `;

  const dummy = [
    {
      name: "Boba Fett",
      height: "183",
      mass: "78.2",
      hair_color: "black",
      skin_color: "fair",
      eye_color: "brown",
      birth_year: "31.5BBY",
      gender: "male",
      homeworld: "https://swapi.dev/api/planets/10/",
      films: [
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/5/",
      ],
      species: [],
      vehicles: [],
      starships: ["https://swapi.dev/api/starships/21/"],
      created: "2014-12-15T12:49:32.457000Z",
      edited: "2014-12-20T21:17:50.349000Z",
      url: "https://swapi.dev/api/people/22/",
    },
    {
      name: "IG-88",
      height: "200",
      mass: "140",
      hair_color: "none",
      skin_color: "metal",
      eye_color: "red",
      birth_year: "15BBY",
      gender: "none",
      homeworld: "https://swapi.dev/api/planets/28/",
      films: ["https://swapi.dev/api/films/2/"],
      species: ["https://swapi.dev/api/species/2/"],
      vehicles: [],
      starships: [],
      created: "2014-12-15T12:51:10.076000Z",
      edited: "2014-12-20T21:17:50.351000Z",
      url: "https://swapi.dev/api/people/23/",
    },
    {
      name: "Bossk",
      height: "190",
      mass: "113",
      hair_color: "none",
      skin_color: "green",
      eye_color: "red",
      birth_year: "53BBY",
      gender: "male",
      homeworld: "https://swapi.dev/api/planets/29/",
      films: ["https://swapi.dev/api/films/2/"],
      species: ["https://swapi.dev/api/species/7/"],
      vehicles: [],
      starships: [],
      created: "2014-12-15T12:53:49.297000Z",
      edited: "2014-12-20T21:17:50.355000Z",
      url: "https://swapi.dev/api/people/24/",
    },
    {
      name: "Lando Calrissian",
      height: "177",
      mass: "79",
      hair_color: "black",
      skin_color: "dark",
      eye_color: "brown",
      birth_year: "31BBY",
      gender: "male",
      homeworld: "https://swapi.dev/api/planets/30/",
      films: [
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
      ],
      species: [],
      vehicles: [],
      starships: ["https://swapi.dev/api/starships/10/"],
      created: "2014-12-15T12:56:32.683000Z",
      edited: "2014-12-20T21:17:50.357000Z",
      url: "https://swapi.dev/api/people/25/",
    },
    {
      name: "Lobot",
      height: "175",
      mass: "79",
      hair_color: "none",
      skin_color: "light",
      eye_color: "blue",
      birth_year: "37BBY",
      gender: "male",
      homeworld: "https://swapi.dev/api/planets/6/",
      films: ["https://swapi.dev/api/films/2/"],
      species: [],
      vehicles: [],
      starships: [],
      created: "2014-12-15T13:01:57.178000Z",
      edited: "2014-12-20T21:17:50.359000Z",
      url: "https://swapi.dev/api/people/26/",
    },
    {
      name: "Ackbar",
      height: "180",
      mass: "83",
      hair_color: "none",
      skin_color: "brown mottle",
      eye_color: "orange",
      birth_year: "41BBY",
      gender: "male",
      homeworld: "https://swapi.dev/api/planets/31/",
      films: ["https://swapi.dev/api/films/3/"],
      species: ["https://swapi.dev/api/species/8/"],
      vehicles: [],
      starships: [],
      created: "2014-12-18T11:07:50.584000Z",
      edited: "2014-12-20T21:17:50.362000Z",
      url: "https://swapi.dev/api/people/27/",
    },
    {
      name: "Mon Mothma",
      height: "150",
      mass: "unknown",
      hair_color: "auburn",
      skin_color: "fair",
      eye_color: "blue",
      birth_year: "48BBY",
      gender: "female",
      homeworld: "https://swapi.dev/api/planets/32/",
      films: ["https://swapi.dev/api/films/3/"],
      species: [],
      vehicles: [],
      starships: [],
      created: "2014-12-18T11:12:38.895000Z",
      edited: "2014-12-20T21:17:50.364000Z",
      url: "https://swapi.dev/api/people/28/",
    },
    {
      name: "Arvel Crynyd",
      height: "unknown",
      mass: "unknown",
      hair_color: "brown",
      skin_color: "fair",
      eye_color: "brown",
      birth_year: "unknown",
      gender: "male",
      homeworld: "https://swapi.dev/api/planets/28/",
      films: ["https://swapi.dev/api/films/3/"],
      species: [],
      vehicles: [],
      starships: ["https://swapi.dev/api/starships/28/"],
      created: "2014-12-18T11:16:33.020000Z",
      edited: "2014-12-20T21:17:50.367000Z",
      url: "https://swapi.dev/api/people/29/",
    },
    {
      name: "Wicket Systri Warrick",
      height: "88",
      mass: "20",
      hair_color: "brown",
      skin_color: "brown",
      eye_color: "brown",
      birth_year: "8BBY",
      gender: "male",
      homeworld: "https://swapi.dev/api/planets/7/",
      films: ["https://swapi.dev/api/films/3/"],
      species: ["https://swapi.dev/api/species/9/"],
      vehicles: [],
      starships: [],
      created: "2014-12-18T11:21:58.954000Z",
      edited: "2014-12-20T21:17:50.369000Z",
      url: "https://swapi.dev/api/people/30/",
    },
    {
      name: "Nien Nunb",
      height: "160",
      mass: "68",
      hair_color: "none",
      skin_color: "grey",
      eye_color: "black",
      birth_year: "unknown",
      gender: "male",
      homeworld: "https://swapi.dev/api/planets/33/",
      films: ["https://swapi.dev/api/films/3/"],
      species: ["https://swapi.dev/api/species/10/"],
      vehicles: [],
      starships: ["https://swapi.dev/api/starships/10/"],
      created: "2014-12-18T11:26:18.541000Z",
      edited: "2014-12-20T21:17:50.371000Z",
      url: "https://swapi.dev/api/people/31/",
    },
  ];

  const columns = ["Name", "Height", "Mass", "Hair Color", "Skin Color"];

  return (
    <Table>
      <TableHeadContainer>
        <tr>
          {columns.map((col, index) => {
            return <TableHead key={index}>{col.toUpperCase()}</TableHead>;
          })}
        </tr>
      </TableHeadContainer>
      <tbody>
        {dummy.map((row, index) => {
          return (
            <tr key={index}>
              <TableData>{row.name}</TableData>
              <TableData>{row.height}</TableData>
              <TableData>{row.mass}</TableData>
              <TableData>{row.hair_color}</TableData>
              <TableData>{row.skin_color}</TableData>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Table;
