const { collectionIGPagesFromCSV } = require("./collectionIGPagesFromCSV");
const { ENV } = require("./constants");

const backendUrl = ENV.backendUrl;

collectionIGPagesFromCSV();
