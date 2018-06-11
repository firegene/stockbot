const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.startsWith("stock.pumpoil")) {
    var lol = setInterval(function() {
          msg.channel.send(".buy 1 oil");
        }
     );
    } 1000;
  
  if (msg.content.startsWith("stock.slowpumpoil")) {
    var lol = setInterval(function() {
          msg.channel.send(".buy 1 oil");
        }
     );
    } 3000;
  
if (msg.content.startsWith("stock.veryslowpumpoil")) {
    var lol = setInterval(function() {
          msg.channel.send(".buy 1 oil");
        }
     );
    } 6000;
  
if (msg.content.startsWith("stock.2secpumpoil")) {
     var lol =  setInterval(function() {
   msg.channel.send('.buy 1 oil'); }, 2000);
     }
  
    if (msg.content.startsWith("stock.pumpcorn")) {
    var lol = setInterval(function() {
          msg.channel.send(".buy 1 corn");
        }
     );
    } 1000;
  
  if (msg.content.startsWith("stock.slowpumpcorn")) {
    var lol = setInterval(function() {
          msg.channel.send(".buy 1 corn");
        }
     );
    } 3000;
  
if (msg.content.startsWith("stock.veryslowpumpcorn")) {
    var lol = setInterval(function() {
          msg.channel.send(".buy 1 corn");
        }
     );
    } 6000;
  
if (msg.content.startsWith("stock.2secpumpcorn")) {
      var lol = setInterval(function() {
   msg.channel.send('.buy 1 corn'); }, 2000);
       }
  
  if (msg.content.startsWith("stock.pumpcattle")) {
    var lol = setInterval(function() {
          msg.channel.send(".buy 1 cattle");
        }
     );
    } 1000;
  
  if (msg.content.startsWith("stock.slowpumpcattle")) {
    var lol = setInterval(function() {
          msg.channel.send(".buy 1 cattle");
        }
     );
    } 3000;
  
if (msg.content.startsWith("stock.veryslowpumpcattle")) {
    var lol = setInterval(function() {
          msg.channel.send(".buy 1 cattle");
        }
     );
    } 6000;
  
 if (msg.content.startsWith("stock.2secpumpcattle")) {
      var lol = setInterval(function() {
   msg.channel.send('.buy 1 cattle'); }, 2000);
       }  
  
  if (msg.content.startsWith("stock.pumpgold")) {
    var lol = setInterval(function() {
          msg.channel.send(".buy 1 gold");
        }
     );
    } 1000;
  
  if (msg.content.startsWith("stock.slowpumpgold")) {
    var lol = setInterval(function() {
          msg.channel.send(".buy 1 gold");
        }
     );
    } 3000;
  
if (msg.content.startsWith("stock.veryslowpumpgold")) {
    var lol = setInterval(function() {
          msg.channel.send(".buy 1 gold");
        }
     );
    } 6000;
  
 if (msg.content.startsWith("stock.2secpumpgold")) {
      var lol = setInterval(function() {
   msg.channel.send('.buy 1 gold'); }, 2000);
       }
  
if (msg.content.startsWith("stock.sell")) {
          msg.channel.send(".sell all");
    }
  }  
);

client.on('message', msg => {
  if (msg.content.startsWith("stock.pumpcoal")) {
    var lol = setInterval(function() {
          msg.channel.send(".buy 1 coal");
        }
     );
    } 1000;
  
  if (msg.content.startsWith("stock.slowpumpcoal")) {
    var lol = setInterval(function() {
          msg.channel.send(".buy 1 coal");
        }
     );
    } 3000;
  
if (msg.content.startsWith("stock.veryslowpumpcoal")) {
    var lol = setInterval(function() {
          msg.channel.send(".buy 1 coal");
        }
     );
    } 6000;
  
  if (msg.content.startsWith("stock.pumpplatinum")) {
    var lol = setInterval(function() {
          msg.channel.send(".buy 1 platinum");
        }
     );
    } 1000;
  
  if (msg.content.startsWith("stock.slowpumpplatinum")) {
    var lol = setInterval(function() {
          msg.channel.send(".buy 1 platinum");
        }
     );
    } 3000;
  
if (msg.content.startsWith("stock.veryslowpumpplatinum")) {
    var lol = setInterval(function() {
          msg.channel.send(".buy 1 platinum");
        }
     );
    } 6000;
  
 if (msg.content.startsWith("stock.2secpumpplatinum")) {
      var lol = setInterval(function() {
   msg.channel.send('.buy 1 platinum'); }, 2000);
       }
  
  if (msg.content.startsWith("stock.pumpcotton")) {
    var lol = setInterval(function() {
          msg.channel.send(".buy 1 cotton");
        }
     );
    } 1000;
  
  if (msg.content.startsWith("stock.slowpumpcotton")) {
    var lol = setInterval(function() {
          msg.channel.send(".buy 1 cotton");
        }
     );
    } 3000;
  
if (msg.content.startsWith("stock.veryslowpumpcotton")) {
    var lol = setInterval(function() {
          msg.channel.send(".buy 1 cotton");
        }
     );
    } 6000;
  
 if (msg.content.startsWith("stock.2secpumpcotton")) {
      var lol = setInterval(function() {
   msg.channel.send('.buy 1 cotton'); }, 2000);
       }
  
if (msg.content.startsWith("stock.pumpwheat")) {
    var lol = setInterval(function() {
          msg.channel.send(".buy 1 wheat");
        }
     );
    } 1000;
  
  if (msg.content.startsWith("stock.slowpumpwheat")) {
    var lol = setInterval(function() {
          msg.channel.send(".buy 1 wheat");
        }
     );
    } 3000;
  
if (msg.content.startsWith("stock.veryslowpumpwheat")) {
    var lol = setInterval(function() {
          msg.channel.send(".buy 1 wheat");
        }
     );
    } 6000;
  
 if (msg.content.startsWith("stock.2secpumpwheat")) {
     var lol = setInterval(function() {
   msg.channel.send('.buy 1 wheat'); }, 2000);
       }  

 if (msg.content.startsWith("stock.pumpcopper")) {
    var lol = setInterval(function() {
          msg.channel.send(".buy 1 copper");
        }
     );
    } 1000;
  
  if (msg.content.startsWith("stock.slowpumpcopper")) {
    var lol = setInterval(function() {
          msg.channel.send(".buy 1 copper");
        }
     );
    } 3000;
  
if (msg.content.startsWith("stock.veryslowpumpcopper")) {
    var lol = setInterval(function() {
          msg.channel.send(".buy 1 copper");
        }
     );
    } 6000;

 
 if (msg.content.startsWith("stock.2secpumpcopper")) {
     var lol = setInterval(function() {
   msg.channel.send('.buy 1 copper'); }, 2000);
          }  
  
 if (msg.content.startsWith("stock.pumpuranium")) {
    var lol = setInterval(function() {
          msg.channel.send(".buy 1 uranium");
        }
     );
    } 1000;
  
  if (msg.content.startsWith("stock.slowpumpuranium")) {
    var lol = setInterval(function() {
          msg.channel.send(".buy 1 uranium");
        }
     );
    } 3000;
  
if (msg.content.startsWith("stock.veryslowpumpuranium")) {
    var lol = setInterval(function() {
          msg.channel.send(".buy 1 uranium");
        }
     );
    } 6000;
  
 if (msg.content.startsWith("stock.2secpumpuranium")) {
     var lol = setInterval(function() {
   msg.channel.send('.buy 1 uranium'); }, 2000);
          }  
  
if (msg.content.startsWith("stock.pumpsilver")) {
    var lol = setInterval(function() {
          msg.channel.send(".buy 1 silver");
        }
     );
    } 1000;
  
  if (msg.content.startsWith("stock.slowpumpsilver")) {
    var lol = setInterval(function() {
          msg.channel.send(".buy 1 silver");
        }
     );
    } 3000;
  
if (msg.content.startsWith("stock.veryslowpumpsilver")) {
    var lol = setInterval(function() {
          msg.channel.send(".buy 1 silver");
        }
     );
    } 6000;
  
 if (msg.content.startsWith("stock.2secpumpsilver")) {
      var lol = setInterval(function() {
   msg.channel.send('.buy 1 silver'); }, 2000);
          }  
  
  if (msg.content.startsWith("stock.pumpcocoa")) {
    var lol = setInterval(function() {
          msg.channel.send(".buy 1 cocoa");
        }
     );
    } 1000;
  
  if (msg.content.startsWith("stock.slowpumpcocoa")) {
    var lol = setInterval(function() {
          msg.channel.send(".buy 1 cocoa");
        }
     );
    } 3000;
  
if (msg.content.startsWith("stock.veryslowpumpcocoa")) {
    var lol = setInterval(function() {
          msg.channel.send(".buy 1 cocoa");
        }
     );
    } 6000;
  
 if (msg.content.startsWith("stock.2secpumpcocoa")) {
      var lol = setInterval(function() {
   msg.channel.send('.buy 1 cocoa'); }, 2000);
          }
  
 if (msg.content.startsWith("stock.2secpumpcoal")) {
      var lol = setInterval(function() {
   msg.channel.send('.buy 1 coal'); }, 2000);
       }
     }
);

client.login('token');
