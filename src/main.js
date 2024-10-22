require("dotenv").config();
const { Telegram } = require("puregram");

const telegram = Telegram.fromToken(process.env.TELEGRAM_BOT_TOKEN);

telegram.updates.on('message', async context => {
  if (context.text === "/start" || !context.isPM()) return;

  await context.forward({
    message_id: context.id,
    chat_id: process.env.ID_FOR_FORWARD 
  });

  return context.delete();
});

telegram.updates.startPolling().then(() => console.log("@%s — ✅", telegram.bot.username));