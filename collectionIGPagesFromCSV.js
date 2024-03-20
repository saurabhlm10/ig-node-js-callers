const { AxiosError, default: axios } = require("axios");
const csv = require("csvtojson");
const { ENV } = require("./constants");

exports.collectionIGPagesFromCSV = async () => {
  const csvPath = "./test.csv";
  try {
    const items = await csv().fromFile(csvPath);

    const pages = items.map((item) => item.page.split("/")[3]);

    pages.forEach(async (page) => {
      if (!page) return;
      try {
        const body = {
          username: page,
          followersCount: 0,
          page: "persiansforthewin",
        };
        const response = await axios.post(ENV.backendUrl + "/page", body);

        console.log(response.data);
      } catch (error) {
        if (error instanceof AxiosError) {
          console.log(error.response.data);
        } else {
          console.log(error.message);
        }
      }
    });
  } catch (error) {}
};
