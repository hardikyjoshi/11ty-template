const axios = require("axios");

module.exports = async function () {
  const dogData = await axios.get("https://dog.ceo/api/breeds/image/random");

  return dogData?.data?.message;
};
