module.exports = {
    config: {
        name: "touhid",
        version: "1.0",
        author: "MR.AYAN", //** original author fb I'd : https://m.me/NOOBS.DEVELOPER.AYAN **//
        countDown: 5,
        role: 0,
        shortDescription: "No Prefix",
        longDescription: "No Prefix",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "touhid") return message.reply("- 𝗠𝘆 𝗯𝗼𝘀𝘀 𝗯𝘂𝘀𝘆 𝗮𝗺𝗸𝗲 𝗯𝗼𝗹𝗲𝗻 𝗸𝗶 𝗵𝗼𝗶𝘀𝗲__😽");
}
};
