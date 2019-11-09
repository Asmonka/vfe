const discord = require ('discord.js');

var client = new discord.Client();

const token = "NTI1OTcwODUyNTg0NjIwMDQ2.Dv-YcA.awpix-ITU9cmIosBxlxvNp_t6Gs";

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
                message.delete()
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
