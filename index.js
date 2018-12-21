const discord = require ('discord.js');

var client = new discord.Client();

const token = "NTIzOTY4NjY1NzA4OTIwODMy.DvhPhg.cun2JCuEO8oV8Rz4L2O9AslXcGw";

client.on ("ready", () => {
        console.log("ready!");

        client.user.setGame("Watching Hentai");
});

const prefix = "!";
client.on ("message", (message) => {

        message.content.toLowerCase();

        if (message.author.bot) return;

        msg = message.content.toLowerCase();

        if(msg.startsWith (prefix + "white")) {
            number = 20;
            imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
            message.channel.send({files: ["./white/" + imageNumber + ".jpg"] })
        }

        if(msg.startsWith (prefix + "yuri")) {
                number = 10;
                imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
                message.channel.send({files: ["./yuri/" + imageNumber + ".jpg"] })
            }

        if(msg.startsWith (prefix + "fortnite")) {
                number = 10;
                imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
                message.channel.send({files: ["./fortnite/" + imageNumber + ".jpg"] })
        }
        if(msg.startsWith (prefix + "overwatch")) {
                number = 30;
                imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
                message.channel.send({files: ["./overwatch/" + imageNumber + ".jpg"] })
        }
        if(msg.startsWith (prefix + "loli")) {
                number = 10;
                imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
                message.channel.send({files: ["./loli/" + imageNumber + ".jpg"] })
        }
        if(msg.startsWith (prefix + "animal")) {
                number = 20;
                imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
                message.channel.send({files: ["./animal/" + imageNumber + ".jpg"] })
        }
        if(msg.startsWith (prefix + "redhead")) {
                number = 10;
                imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
                message.channel.send({files: ["./redhead/" + imageNumber + ".jpg"] })
        }
        if(msg.startsWith (prefix + "yaoi")) {
                number = 10;
                imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
                message.channel.send({files: ["./yaoi/" + imageNumber + ".jpg"] })
        }
        if(msg.startsWith (prefix + "blonde")) {
                number = 10;
                imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
                message.channel.send({files: ["./blonde/" + imageNumber + ".jpg"] })
        }
        if(msg.startsWith (prefix + "command")) {
                message.channel.send ({files: ["./command/command.jpg"]})
        }
        if(msg.startsWith (prefix + "ayaya")) {
                message.channel.send ({files: ["./ayaya/ayaya.gif"]})
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
           .setColor ("#FF0000");
           message.channel.send(embed);}
})


client.login(process.env.BOT);
