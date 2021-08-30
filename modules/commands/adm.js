module.exports.config = {
  name: "adm",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Chim",
  description: "Kiểm tra thông tin admin bot.",
  commandCategory: "Thông tin adminbot",
  usages: "adm",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://media3.giphy.com/media/DlAKiO46ALu1pQkXU7/giphy.gif?cid=6c09b95271aff5fa5bc9280f10655c1837e5f809328e474b&rid=giphy.gif&ct=g",
  ];
  var callback = () => api.sendMessage({body:`梁ADMIN BOT梁
  họ và tên : Ngô hoài huy ( Chim)
   age: 20
   Giới tính: Nam
   năm sinh : 2000
   nghề nghiệp : bán thân
   ước mơ : được chịch gái

   
donate <(") 
💳VCB: 
📲MoMo: 0931149522

----chim----`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };