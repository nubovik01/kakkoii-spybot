require("dotenv").config();
const ID_FOR_FORWARD = process.env.ID_FOR_FORWARD;
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

if (!ID_FOR_FORWARD || isNaN(ID_FOR_FORWARD)) {
  throw new Error("Provide ID_FOR_FORWARD to .env");
};

if (!TELEGRAM_BOT_TOKEN) {
  throw new Error("Provide TELEGRAM_BOT_TOKEN to .env");
};

module.exports = { ID_FOR_FORWARD, TELEGRAM_BOT_TOKEN };