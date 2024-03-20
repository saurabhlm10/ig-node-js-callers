require("dotenv").config();

const backendUrl = process.env.BACKEND_URL;

exports.ENV = {
  backendUrl,
};
