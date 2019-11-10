const discord = require ('discord.js');
var client = new discord.Client();
const fs = require('fs');
const db = require('quick.db');

const token = "NTI1OTcwODUyNTg0NjIwMDQ2.Dv-YcA.awpix-ITU9cmIosBxlxvNp_t6Gs";

client.on ("ready", () => {
        console.log("ready!");

        client.user.setGame("Hentai");
});

const prefix = "!";
client.on ("message", (message) => {

        msg = message.content.toUpperCase();
        sender = message.author;
        args = message.content.slice(prefix.length).trim().split(" ");
        cmd = args.shift().toLowerCase
        

        if (message.author.bot) return;

        
        db.updateValue(message.author.id + message.guild.id, 1).then(i => { // You pass it the key, which is authorID + guildID, then pass it an increase which is 1 in this instance.
                // It also returns the new updated object, which is what we will use.
        
                let messages; // Create an empty variable - These IF statements will run if the new amount of messages sent is the same as the number.
                if (i.value == 25) messages = 25; // Level 1
                else if (i.value == 50) messages = 50; // Level 2
                else if (i.value == 100) messages = 100; // Level 3 - You can set these to any number, and any amount of them.
        
                if (!isNaN(messages)) { // If messages IS STILL empty, run this.
                    db.updateValue(`userLevel_${message.author.id + message.guild.id}`, 1).then(o => { // This returns the updated object of userLevel_ID. 
                        message.channel.send(`You sent ${messages} messages, so you leveled up! You are now level ${o.value}`) // Send their updated level to the channel.
                    })
                }
        
            })

        if(msg === (prefix + "white")) {
            message.delete()
            number = 20;
            imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
            message.channel.send({files: ["./white/" + imageNumber + ".jpg"] })
        }

        if(msg.startsWith (prefix + "yuri")) {
                message.delete()
                number = 10;
                imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
                message.channel.send({files: ["./yuri/" + imageNumber + ".jpg"] })
            }

        if(msg.startsWith (prefix + "fortnite")) {
                message.delete()
                number = 10;
                imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
                message.channel.send({files: ["./fortnite/" + imageNumber + ".jpg"] })
        }
        if(msg.startsWith (prefix + "overwatch")) {
                message.delete();
                number = 30;
                imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
                message.channel.send({files: ["./overwatch/" + imageNumber + ".jpg"] })
        }
        if(msg.startsWith (prefix + "loli")) {
                message.delete()
                number = 10;
                imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
                message.channel.send({files: ["./loli/" + imageNumber + ".jpg"] })
        }
        if(msg.startsWith (prefix + "animal")) {
                message.delete();
                number = 20;
                imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
                message.channel.send({files: ["./animal/" + imageNumber + ".jpg"] })
        }
        if(msg.startsWith (prefix + "redhead")) {
                message.delete()
                number = 10;
                imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
                message.channel.send({files: ["./redhead/" + imageNumber + ".jpg"] })
        }
        if(msg.startsWith (prefix + "yaoi")) {
                message.delete();
                number = 10;
                imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
                message.channel.send({files: ["./yaoi/" + imageNumber + ".jpg"] })
        }
        if(msg.startsWith (prefix + "blonde")) {
                message.delete()
                number = 10;
                imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
                message.channel.send({files: ["./blonde/" + imageNumber + ".jpg"] })
        }       
        if(msg.startsWith (prefix + "ayaya")) {
                message.delete()
                message.channel.send ({files: ["./ayaya/ayaya.gif"]})
        }
        if(msg.startsWith (prefix + "tina")) {
                message.delete()
                message.channel.send ({files: ["./tina/tina.gif"]})
        }
        if(msg.startsWith (prefix + "nani")) {
                message.delete()
                message.channel.send ({files: ["./nani/nani.gif"]})
        }
         
        if(msg.startsWith (prefix + "command")) {
                message.delete()
           embed = new discord.RichEmbed ()
           .setAuthor ("Command")
           .addField ("!animal", "animal picture")
           .addField ("!ayaya", "ayaya GIF") 
           .addField ("!blonde", "blonde picture")
           .addField ("!fortnite",  "fortnite picture") 
           .addField ("!loli",  "loli picture")
           .addField ("!nani", "nani GIF")
           .addField ("!overwatch",  "overwatch picture")
           .addField ("!redhead",  "redhead picture")
           .addField ("!white",  "white hair picture")
           .addField ("!yaoi",  "yaoi picture")
           .addField ("!yuri",  "yuri picture") 
           .addField ("!tina", "tina GIF")                           
           .setColor ("#FF0000");
           message.channel.send(embed);}
})


client.login(process.env.BOT);
