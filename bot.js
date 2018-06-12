const Discord = require("discord.js");
const client = new Discord.Client();
let timers = [];

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {

if(msg.content.startsWith("stock.pumpcoal")){
    let x = setInterval(function() {
        msg.channel.send('.buy 1 coal');
    }, 2000);
    timers.push(x);
}

else if(msg.content.startsWith("stock.pumpcopper")){
    let x = setInterval(function() {
        msg.channel.send('.buy 1 copper');
    }, 2000);
    timers.push(x);
}

else if(msg.content.startsWith("stock.pumpoil")){
    let x = setInterval(function() {
        msg.channel.send('.buy 1 oil');
    }, 2000);
    timers.push(x);
}

else if(msg.content.startsWith("stock.pumpsilver")){
    let x = setInterval(function() {
        msg.channel.send('.buy 1 silver');
    }, 2000);
    timers.push(x);
}

else if(msg.content.startsWith("stock.pumpgold")){
    let x = setInterval(function() {
        msg.channel.send('.buy 1 gold');
    }, 2000);
    timers.push(x);
}

else if(msg.content.startsWith("stock.pumpcotton")){
    let x = setInterval(function() {
        msg.channel.send('.buy 1 cotton');
    }, 2000);
    timers.push(x);
}

else if(msg.content.startsWith("stock.pumpwheat")){
    let x = setInterval(function() {
        msg.channel.send('.buy 1 wheat');
    }, 2000);
    timers.push(x);
}

else if(msg.content.startsWith("stock.pumpcattle")){
    let x = setInterval(function() {
        msg.channel.send('.buy 1 cattle');
    }, 2000);
    timers.push(x);
}

else if(msg.content.startsWith("stock.pumpplatinum")){
    let x = setInterval(function() {
        msg.channel.send('.buy 1 platinum');
    }, 2000);
    timers.push(x);
}

else if(msg.content.startsWith("stock.pumpcocoa")){
    let x = setInterval(function() {
        msg.channel.send('.buy 1 cocoa');
    }, 2000);
    timers.push(x);
}

else if(msg.content.startsWith("stock.pumpcorn")){
    let x = setInterval(function() {
        msg.channel.send('.buy 1 corn');
    }, 2000);
    timers.push(x);
}

else if(msg.content.startsWith("stock.pumpsugar")){
    let x = setInterval(function() {
        msg.channel.send('.buy 1 sugar');
    }, 2000);
    timers.push(x);
}

else if(msg.content.startsWith("stock.pumpuranium")){
    let x = setInterval(function() {
        msg.channel.send('.buy 1 uranium');
    }, 2000);
    timers.push(x);
}

else if(msg.content.startsWith("stock.stop password")){
   timers.forEach(timer => clearInterval(timer));
}
});

client.login('token');
