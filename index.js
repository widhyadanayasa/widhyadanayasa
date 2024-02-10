const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'Asia/Jakarta', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1205700396430139393')
    .setType('PLAYING')
    .setURL('https://youtu.be/xvFZjo5PgG0?si=c8akPNtCj_52JNs8') //Must be a youtube video link 
    .setState('Playing Single Player')
    .setName('Grand Theft Auto VI')
    .setDetails(`Welcome To Vice City!`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1204064214520561734/1205704013488857198/IMG_20240210_093659.jpg?ex=65d9565d&is=65c6e15d&hm=a5410ae34d8797a23351b44e656a7e33ee8d559ca61f3d82bf22807e039b8e19&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('Grand Theft Auto VI') //Text when you hover the Large image
    .addButton('WhatsApp', 'https://chat.whatsapp.com/K6UduLp6GHqEY9x6m8lRiS')
    .addButton('Discord', 'https://discord.gg/yourdiscordserver');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `Welcome To Vice City!`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = 'MTExMjUxNDcyMjQ0NTY2NDI2Ng.GWuuDS.kPPWmScB-BZ_X9QfpCWTYTE6J-ptwpJ8KGd6Zw';
client.login(mySecret);
