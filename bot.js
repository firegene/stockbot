const Discord = require("discord.js");
const client = new Discord.Client();
let token = "token"
let prefix = "stock."
let password = "password"
let timers = [];

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(`with my sexy ${prefix} prefix`); 
});

client.on('message', msg => {
	
if(msg.content.startsWith("```purchase void```"))  {
	msg.channel.send(".sell all");
} 

if (msg.content.indexOf(prefix) !== 0) return;
const args = msg.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();



if(command === "pump"){
	if(args[1] === undefined) {args.push(2000)};
	   console.log(`${msg.author.tag} started pumping ${args[0]}`);
	   let y = parseInt(args[1]);
    let x = setInterval(function() {
        msg.channel.send(`.buy 1 ${args[0]}`);
    }, y);
    timers.push(x);
}

else if(command === "sell"){
	      console.log(`${msg.author.tag} sold all`)
        msg.channel.send('.sell all')
}

else if(command === "lotto"){
	      console.log(`${msg.author.tag} bought a lottery ticket`) 
        msg.channel.send('.lotto')
}

else 
	
if(command === `stop` && args[0] === password){
   timers.forEach(timer => clearInterval(timer));
   console.log(`Bot stopped by ${msg.author.tag}`);
}
});
 
client.login(token);
