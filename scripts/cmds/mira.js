const axios = require("axios");

const baseApiUrl = async () => {
  const base = await axios.get(
    `https://raw.githubusercontent.com/Blankid018/D1PT0/main/baseApiUrl.json`
  );
  return base.data.api;
};

module.exports.config = {
  name: "mira",
  version: "1.0.0",
  role: 0,
  author: "dipto",
  description: "better than all Sim simi with multiple conversation",
  guide: { en: "[message]" },
  category: "ChatBots",
  coolDowns: 5,
};

module.exports.onStart = async function ({ api, args, event }) { };
module.exports.onChat = async function ({ api, args, event }) {
  try {
    if (event.body) {
      const cm = ["baby", "bby"];
      const cml = event.body.toLowerCase();
      const dipto = args.join(" ");
      if (!args[0]) {
        api.sendMessage(
          "Please provide a question to answer\n\nExample:\nbaby ki koro",
          event.threadID,
          event.messageID
        );
        return;
      }
      if (dipto) {
        const response = await axios.get(
          `${await baseApiUrl()}/baby?text=${dipto}`
        );
        const mg = response.data.reply;
        await api.sendMessage(
          { body: mg },
          event.threadID,
          event.messageID
        );
      }
    }
  } catch (error) {
    console.error(`Failed to get an answer: ${error.message}`);
    api.sendMessage(
      `${error.message}.\nAn error occurred.`,
      event.threadID,
      event.messageID
    );
  }
};
