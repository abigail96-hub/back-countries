const { Country } = require('../../db');
const axios = require('axios');


const API_URL = `https://restcountries.com/v3/all`;

const getApiData = () => {
  axios
    .get(API_URL)
    .then((res) =>
      Country.bulkCreate(
        res.data.map((country) => ({
          id: country.id,
          name: country.name,
          img: country.flag,
          continents: country.continents,
          capital: country.capital,
          subregion: country.subregion,
          area: country.area,
          population: country.population,
          maps: country.maps,
        }))
      )
    )
    .catch((err) => console.log(err));
};

module.exports = { getApiData };
