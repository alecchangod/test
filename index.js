require('dotenv').config()
const Discord = require('discord.js');
const {MessageAttachment}=require('discord.js');
const {
    Client,
    Intents,
  MessageEmbed
} = require('discord.js');
const client = new Client({
   partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'GUILD_MEMBER', 'enum'], intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, "GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS", "DIRECT_MESSAGES"],
});
const mySecret = process.env['token']

//if the server doesn't have a set prefix yet
let prefix = '=';
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.guilds.cache.forEach(guild=>console.log(`${guild.name}(${guild.id})`));
       let scheduledMessage = new cron.CronJob('00 00 04 * * *', () => {
         const guild = client.guilds.cache.get(process.env.grp2);
         const channel = guild.channels.cache.get(process.env.channelID2);
         channel.send('你各位別當死魚堆');
        });
        scheduledMessage.start()});
let date_ob = new Date();

// current date
// adjust 0 before single digit date
let date = ("0" + date_ob.getDate()).slice(-2);

// current month
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

// current year
let year = date_ob.getFullYear();

// current hours
let hours = date_ob.getHours();

// current minutes
let minutes = date_ob.getMinutes();

// current seconds
let seconds = date_ob.getSeconds();

// prints date in YYYY-MM-DD format
console.log(year + "-" + month + "-" + date);

// prints date & time in YYYY-MM-DD HH:MM:SS format
console.log(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);

// prints time in HH:MM format
console.log(hours + ":" + minutes);

const cron = require('cron');
            

client.setMaxListeners(50)

function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max-min) + min);
}


const message = '963802394045583370';
const channel = '963802334482284595';
const R = '964140235401355304';
const REmoji = '958407417559908382';

client.on('guildMemberAdd', (member) => {
  try{
     if(member.guild.id == process.env.grp){
    const channelId = process.env.channelID // The Channel ID you just copied
    try{(member.guild.channels.fetch(channelId)).then((channel => {
       if(channel.guild == process.env.grp){
        channel.send('欸有新人~')}}))} catch (e) {console.log(e)};
       if(!member.message.author.bot){
     member.send('早安')}}
    } catch (e) {
    console.log(e)}
    });
client.on('guildMemberAdd', (member) => {
  try{
     if(member.guild.id == process.env.grp1){
    const channelId1 = process.env.channelID1 // The Channel ID you just copied
    try{(member.guild.channels.fetch(channelId1)).then((channel1 => {
       if(channel1.guild == process.env.grp1){
        channel1.send('欸有新人~')}}))} catch (e) {console.log(e)} }
    } catch (e) {
    console.log(e)}
    });
client.on('guildMemberUpdate', (oldMember, newMember) => { //i.e role(s) were removed
  try{
	const removedRoles = oldMember.roles.cache.filter(role => !newMember.roles.cache.has(role.id));
	if (removedRoles.size > 0) {
     const newr = (`${oldMember.displayName} 不再是 ${removedRoles.map(r => r.name)} 了`);
     const Embed = new MessageEmbed()
    .setTitle('身份組變了欸~')
    .setDescription(newr)
    .setColor('RANDOM');
    newMember.guild.channels.cache.find(ch => ch.name.toLowerCase() === 'log').send({ embeds: [Embed] });;} //i.e role(s) were added
	const addedRoles = newMember.roles.cache.filter(role => !oldMember.roles.cache.has(role.id));
	if (addedRoles.size > 0) {
		console.log(`${oldMember.displayName} 現在是 ${addedRoles.map(r => r.name)} 了`);
	}
     const newr1 = (`${oldMember.displayName} 現在是 ${addedRoles.map(r => r.name)} 了`);
     const Embed1 = new MessageEmbed()
    .setTitle('身份組變了欸~')
    .setDescription(newr1)
    .setColor('RANDOM');
    newMember.guild.channels.cache.find(ch => ch.name.toLowerCase() === 'log').send({ embeds: [Embed1] });;} catch (e) {
    console.log(e)}
  });


client.on('messageCreate', (message) => {
  try{
    if(message.content.toLowerCase().includes('老ㄆㄛˊ') || message.content.toLowerCase().includes('waifu') ){
       if(message.author.id === process.env.me) return;
        message.reply('醒').then(message => {
          console.log(message.reference, 'id' + message.id);
          if(message.author.id === process.env.botid){
          const c = message.id;
          console.log('c = ' + c)};
          console.log(message.id);
;      //msg is an instance of Message
});
      if(message.type === "REPLY"){console.log(message.fetchReference())};
 }} catch (e) {
    console.log(e)}
  });
client.on('messageCreate', (message) => {
  try{   
    if((message.mentions.members.first() === process.env.botid) && (message.content.toLowerCase().inclues("閉嘴"))){
message.reply("蛤");
  }
} catch (e) {    console.log(e)}
  });
client.on('messageCreate', (message) => {
  try{     
    if((message.author.id === process.env.botid) && (message.content.toLowerCase().includes('醒'))){
        const messageid = message.id
console.log(messageid);     
      }
    if(message.refence === messageid){
        message.channel.send('a')
    };
} catch (e) {    console.log(e)}
  });


client.on('messageCreate', (message) => {
  try{
  if(message.content.toLowerCase().includes('wife')){
     if(message.author.id === process.env.me) return;
        message.reply('wake up damn');
      }} catch (e) {
    console.log(e)}
  });
client.on('messageCreate', (message) => {
  try{
      if(message.content.toLowerCase().includes('愛你')){
      if (message.member.roles.cache.some(role => role.name == "元首")) return;
         if(message.author.id === process.env.me) return;
  if(message.author.bot) {return;}
        message.reply('我不愛你');
      }} catch (e) {
    console.log(e)}
});
client.on('messageCreate', (message) => {
  try{
  if(message.content.toLowerCase().includes('ちゃんは大好きだよ') || message.content.toLowerCase().includes('ちゃんとけっこんしました') || message.content.toLowerCase().includes('妻になって') || message.content.toLowerCase().includes('はの夫') || message.content.toLowerCase().includes('一緒に寝る') || message.content.toLowerCase().includes('俺の嫁')){
     if(message.author.id === process.env.me) return;
        message.channel.send('消え失せろ');
  }} catch (e) {
    console.log(e)}
});
client.on('messageCreate', (message) => {
  try{
  if(message.content.toLowerCase().includes('床上玩') || message.content.toLowerCase().includes('るーちゃん') && message.content.toLowerCase().includes('我') || message.content.toLowerCase().includes('るーちゃん') && message.content.toLowerCase().includes('聖水') || message.content.toLowerCase().includes('るーちゃん') && message.content.toLowerCase().includes('在') || message.content.toLowerCase().includes('るーちゃん') && message.content.toLowerCase().includes('說') || message.content.toLowerCase().includes('るーちゃん') && message.content.toLowerCase().includes('跟') || message.content.toLowerCase().includes('るーちゃん') && message.content.toLowerCase().includes('會') || message.content.toLowerCase().includes('るーちゃん') && message.content.toLowerCase().includes('睡') || message.content.toLowerCase().includes('るーちゃん') && message.content.toLowerCase().includes('來') || message.content.toLowerCase().includes('るーちゃん') && message.content.toLowerCase().includes('和') ){
     if(message.author.id === process.env.me) return;
        message.channel.send('消え失せろ');
  }} catch (e) {
    console.log(e)}
});
client.on('messageCreate', (message) => {
  try{
  if(message.content.toLowerCase().includes('床上玩') || message.content.toLowerCase().includes('みけねこちゃん') && message.content.toLowerCase().includes('我') || message.content.toLowerCase().includes('みけねこちゃん') && message.content.toLowerCase().includes('聖水') || message.content.toLowerCase().includes('みけねこちゃん') && message.content.toLowerCase().includes('在') || message.content.toLowerCase().includes('みけねこちゃん') && message.content.toLowerCase().includes('說') || message.content.toLowerCase().includes('みけねこちゃん') && message.content.toLowerCase().includes('跟') || message.content.toLowerCase().includes('みけねこちゃん') && message.content.toLowerCase().includes('會') || message.content.toLowerCase().includes('みけねこちゃん') && message.content.toLowerCase().includes('睡') || message.content.toLowerCase().includes('みけねこちゃん') && message.content.toLowerCase().includes('來') || message.content.toLowerCase().includes('みけねこちゃん') && message.content.toLowerCase().includes('和') ){
     if(message.author.id === process.env.me) return;
        message.channel.send('消え失せろ');
  }} catch (e) {
    console.log(e)}
});
client.on('messageCreate', (message) => {
  try{
  if (message.member.roles.cache.some(role => role.name == "元首")) return;
  if(message.content.toLowerCase().includes('結婚') || message.content.toLowerCase().includes('窩璦妮') ){
     if(message.author.id === process.env.me) return;
        message.channel.send('滾開點');
  }} catch (e) {
    console.log(e)}
});
client.on('messageCreate', (message) => {
  try{
  if(message.content.toLowerCase().includes('平板')){
     if(message.author.id === process.env.me) return;
        message.reply('https://cdn.discordapp.com/attachments/946997403578404864/957699560967376966/FB_IMG_1643680126724.jpg');
  }} catch (e) {
    console.log(e)}
});
client.on('messageCreate', (message) => {
  try{
  if(message.content.toLowerCase().includes('pettan')){
     if(message.author.id === process.env.me) return;
        message.reply('https://cdn.discordapp.com/attachments/946997403578404864/957914419852111922/FB_IMG_1643680110105.jpg');
  } } catch (e) {
    console.log(e)}
});
client.on('messageCreate', (message) => {
  try{
  if(message.content.toLowerCase().includes('床上玩') || message.content.toLowerCase().includes('露') && message.content.toLowerCase().includes('我') || message.content.toLowerCase().includes('露') && message.content.toLowerCase().includes('聖水') || message.content.toLowerCase().includes('露') && message.content.toLowerCase().includes('在') || message.content.toLowerCase().includes('露') && message.content.toLowerCase().includes('說') || message.content.toLowerCase().includes('露') && message.content.toLowerCase().includes('跟') || message.content.toLowerCase().includes('露') && message.content.toLowerCase().includes('會') || message.content.toLowerCase().includes('編故事') || message.content.toLowerCase().includes('露') && message.content.toLowerCase().includes('睡') || message.content.toLowerCase().includes('露') && message.content.toLowerCase().includes('來') ){
     if(message.author.id === process.env.me) return;
        message.channel.send('<#950398610284097597>, 謝謝');
  }} catch (e) {
    console.log(e)}
});
client.on('messageCreate', (message) => {
  if(message.content.toLowerCase().includes('找其他人') || message.content.toLowerCase().includes('外遇')){
        message.reply('你再說一次？<:RushiaYandere:948941963170828328>');
  }
});
client.on('messageCreate', (message) => {
  try{
  if(message.content.toLowerCase().includes('女') && message.content.toLowerCase().includes('友') || message.content.toLowerCase().includes('彼') && message.content.toLowerCase().includes('女') ){
     if(message.author.id === process.env.me) return;
        message.channel.send('醒');
  }} catch (e) {
    console.log(e)}
});
client.on('messageCreate', (message) => {
  if(message.content.toLowerCase().includes('胸')){
        message.reply('https://cdn.discordapp.com/attachments/946997403578404864/957911151394586624/FB_IMG_1638487832614.jpg');
  }
});
client.on('messageCreate', (message) => {
  try{
  if((message.content.toLowerCase().includes('砧板')) || (message.content.toLowerCase().includes('まな板'))){
     if(message.author.id === process.env.me) return;
        message.reply('https://cdn.discordapp.com/attachments/946997403578404864/957914420502212698/FB_IMG_1643680054229.jpg');
  }} catch (e) {
    console.log(e)}
});
client.on('messageCreate', (message) => {
  try{
  if(message.content.toLowerCase().includes('婆')){ 
     if(message.author.id === process.env.me) return;
 var a = (`https://media.discordapp.net/attachments/956867669959794728/960943560117596221/FB_IMG_1628385959138.jpg`);	
 var b = (`醒`); 	
 let n = getRandomNumber(0, 2);
if (n == 1) {
  message.reply(a);}
  else {message.reply(b);}
  }} catch (e) {
    console.log(e)}
});
client.on('messageCreate', (message) => {
  try{
  if (message.member.roles.cache.some(role => role.name == "test") && message.content.toLowerCase().includes(prefix + 'say') || message.member.roles.cache.some(role => role.name == "元首") && message.content.toLowerCase().includes(prefix + 'say') || message.member.roles.cache.some(role => role.name == "管理員") && message.content.toLowerCase().includes(prefix + 'say') || message.member.roles.cache.some(role => role.name == "神志不清的天才寶特瓶") && message.content.toLowerCase().includes(prefix + 'say')){
 	var q = message.content.substring(4,); 	
	message.delete()
	message.channel.send(q); 
  }} catch (e) {
    console.log(e)}
});
client.on('messageCreate', (message) => {
try{
  if (message.member.roles.cache.some(role => role.name == "管理員") && message.content.toLowerCase().includes(prefix + 'mute') ){
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!member) return message.reply("阿你到底要我禁誰")
member.timeout(10 * 6 * 5 * 1000)
message.channel.send("<@" + member + ">" + "誰讓你在這裡廢話？滾, 5分鐘後再回來（X")
.catch(console.log); 
  }} catch (e) {
    console.log(e)}
});
client.on('messageCreate', (message) => {
  if(message.content.toLowerCase().includes('清潔')){
        message.reply('https://media.discordapp.net/attachments/956867669959794728/961972142487007232/Screenshot_20220320-210121_Markup.png')  .then(msg => {
    setTimeout(() => msg.delete(), 1000);
  })
}});
client.on('messageCreate', (message) => {
  if(message.content.toLowerCase().includes("+dd")){
let x = message.content.split(' ').slice(1);
    try{
if(message.author.bot) return;
 var status = '我選擇';
message.reply(status + x + '~~我要當個快樂的DD~~');
 } catch (e) {
    console.log(e)}}
});
client.on('messageCreate', (message) => {
  if(message.content.toLowerCase().includes(prefix + 'test')){
 message.react('<:AttanoThink:958347767573524570>');
 }
});
client.on('messageCreate', (message) => {
  try{
  if(message.content.toLowerCase().includes('boing')){
        message.reply('https://media.discordapp.net/attachments/956867669959794728/963813505750954054/FB_IMG_1648803227500.jpg');
    message.react('<a:3994rushiahappy:948938443218649090>');
  }} catch (e) {
    console.log(e)}
});
client.on('messageCreate', (message) => {
  try{
  if(message.guild.id == process.env.grp){
  try{if (message.content.startsWith(`${prefix}rr`)) {
    var q = message.content.substring(4,); 	
    let embed = new MessageEmbed()
        .setColor("#ffffff")
        .setTitle("身份組領取")
        .setDescription(q);
//    channel.messages.fetch('963802394045583370')
//  .then(message.react('<:fbk2:961604397132038174>'));
    message.channel.send({ embeds: [embed] }).then((sentMessage) => {
        sentMessage.react("<:fbk2:961604397132038174>");
    });
  }
      const filter = (reaction, user) => {
    return reaction.emoji.name === 'fbk2';
};

const collector = message.createReactionCollector({ filter });

collector.on('collect', (reaction, user) => {
    const role = message.guild.roles.fetch('964140235401355304');
    
    message.guild.members.fetch(user.id).then(member => {
         member.roles.add('964140235401355304');  
    });
});} catch(e) {console.log(e)} }} catch(e) {console.log(e)}
});

client.on('messageCreate',  async (message) => {
      try{
        if(message.channel.id === process.env.log_channel) return;
        let channel = client.channels.fetch(process.env.log_channel).then(channel => {
          channel.send('人:' + message.author.tag + ' , 訊息:' + message.content + ' , 群:' + message.guild.name + ' , 頻道:' + message.channel.name, { split: true })
        }).catch(err => {
          console.log(err)
        })
    }catch (error) {
            console.error(error);}
     // put your code here

});


client.login(process.env.token).then(() => {
    client.user.setPresence({ activities: [{ name: '誰在做夢', type: 'WATCHING' }], status: 'idle' });
});
