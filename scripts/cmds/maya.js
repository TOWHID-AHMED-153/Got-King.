const axios = require('axios');

module.exports = {
  config: {
    name: "mira",
    aliases: ["mira", "ayan", "xaiko" ],
    version: "6.9.0",
    author: "dipto",
    countDown: 0,
    role: 0,
    description: "better then all sim simi",
    category: "chat",
    guide: {
      en: "{pn}[anyMessage] OR\nteach [YourMessage] - [Reply1], [Reply2], [Reply3]... OR\nteach [react] [YourMessage] - [react1], [react2], [react3]... OR\nremove [YourMessage] OR\nrm [YourMessage] - [indexNumber] OR\nmsg [YourMessage] OR\nlist OR\nedit [YourMessage] - [NeeMessage]"
    }
  },
onStart: async ({ api, event, args ,usersData }) => {
const link = `https://nobs-api.onrender.com/dipto/baby`;
  const dipto = args.join(" ").toLowerCase();
      const uid = event.senderID;
      let command;
      let comd;
      let final;
      try{
      if(!args[0]){
        const ran = ["𝗸𝗶𝗮 𝗵𝘂𝘆𝗮 𝗯𝗼𝗹𝗼 𝗺𝘂𝗷𝗵𝗲🤥","𝗺𝗲 𝗸𝘂𝘀 𝘀𝗼𝗻𝗮 𝗻𝗲𝗵𝗶🤡","𝗯𝗼𝗹 𝗱𝗮𝗹𝗼 𝘆𝗿𝗿💩","𝘁𝘆𝗽𝗲 .𝗮𝘆𝗮𝗻 𝗵𝗶"];
        const r = ran[Math.floor(Math.random() * ran.length)];
    return api.sendMessage(r,event.threadID,event.messageID);
      }
//-------------------------------------//
      else if (args[0] === 'remove') {
      const fina = dipto.replace("remove ", "");
            const respons = await axios.get(`${link}?remove=${fina}`);
            const dat = respons.data.message;
            api.sendMessage(`${dat}`, event.threadID, event.messageID);
        }
//------------------------------------//
    else if (args[0] === 'rm' && dipto.includes('-')) {
          const fina = dipto.replace("rm ", "");
         const fi = fina.split(' - ')[0]
         const f = fina.split(' - ')[1]
            const respons = await axios.get(`${link}?remove=${fi}&index=${f}`);
            const da = respons.data.message;
            api.sendMessage(`${da}`, event.threadID, event.messageID);
    }
//-----------------------------------//
else if (args[0] === 'list') {
            const respo = await axios.get(`${link}?list=all`);
            const d = respo.data.length;
            const data = respo.data;
Promise.all(data.teacher.teacherList.map(async (item, index) => {
      const number = Object.keys(item)[0];
      const value = item[number];
      const userData = await usersData.get(number);
      const name = userData.name; 
      return { name, value };
    })).then(teachers => {teachers.sort((a, b) => b.value - a.value);
return teachers.map((teacher,index) => `${index + 1}/ ${teacher.name}: ${teacher.value}`).join('\n');
    }).then(output =>
      api.sendMessage(`Total Teach = ${d}\n\n👑 | List of Teachers of baby\n${output}`, event.threadID, event.messageID)
    );
        }
//-----------------------------------//
          else if (args[0] === 'msg' || args[0] === 'message') {
      const fuk = dipto.replace("msg ", "");
            const respo = await axios.get(`${link}?list=${fuk}`);
            const d = respo.data.data;
            api.sendMessage(`Message ${fuk} = ${d}`, event.threadID, event.messageID);
          }
//----------------------------------//
        else if (args[0] === 'edit') {
 const command = dipto.split(' - ')[1];
            if (command.length < 2) {
                return api.sendMessage('❌ | Invalid format! Use edit [YourMessage] - [NewReply]', event.threadID, event.messageID);
            }
            const res = await axios.get(`${link}?edit=${args[1]}&replace=${command}`);
            const dA = res.data.message;
            api.sendMessage(`changed ${dA}`, event.threadID, event.messageID);
        } 
 //-------------------------------------//

else if (args[0] === 'teach' && args[1] !== 'amar' && args[1] !== 'react'){
           command = dipto.split(' - ')[1];
          comd = dipto.split(' - ')[0];
          final = comd.replace("teach ", "");
                if (command.length < 2) {
                return api.sendMessage('❌ | Invalid format! Use [YourMessage] - [Reply1], [Reply2], [Reply3]... OR remove [YourMessage] OR list OR edit [YourMessage] - [NewReply]', event.threadID, event.messageID);
            }
            const re = await axios.get(`${link}?teach=${final}&reply=${command}&senderID=${uid}`);
            const tex = re.data.message;
        const name = re.data.teacher
const data = await usersData.get(name);
      const teacher = data.name;
          const teachs = re.data.teachs
     api.sendMessage(`✅ Replies added ${tex}\nTeacher: ${teacher}\nTeachs: ${teachs}`, event.threadID, event.messageID);
        }
//------------------------------------//
else if (args[0] === 'teach' && args[1] === 'amar'){
         command = dipto.split(' - ')[1];
          comd = dipto.split(' - ')[0];
  final = comd.replace("teach ", "");
            if (command.length < 2) {
                return api.sendMessage('❌ | Invalid format! Use [YourMessage] - [Reply1], [Reply2], [Reply3]... OR remove [YourMessage] OR list OR edit [YourMessage] - [NewReply]', event.threadID, event.messageID);
      }
