const discord = require ('discord.js');

var client = new discord.Client();

const token = "NTI1OTcwODUyNTg0NjIwMDQ2.Dv-YcA.awpix-ITU9cmIosBxlxvNp_t6Gs";

client.on ("ready", () => {
        console.log("ready!");

        client.user.setActivity("Hentai (!help)", {type: 'WATCHING'});
});
global.server = {};
const prefix = "!";
client.on ("message", (message) => {

        message.content.toLowerCase();

        if (message.author.bot) return;

        msg = message.content.toLowerCase();
        if(msg === prefix + "join") {
                voiceChannel.join()
                .then(connection => console.log('Connected!'))
                .catch(console.error);
        }
        if(msg === (prefix + "white")) {
            message.delete()
            number = 20;
            imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
            message.channel.send({files: ["./white/" + imageNumber + ".jpg"] })
        }

        if(msg === (prefix + "yuri")) {
                message.delete()
                number = 10;
                imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
                message.channel.send({files: ["./yuri/" + imageNumber + ".jpg"] })
            }

        if(msg === (prefix + "fortnite")) {
                message.delete()
                number = 10;
                imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
                message.channel.send({files: ["./fortnite/" + imageNumber + ".jpg"] })
        }
        if(msg === (prefix + "overwatch")) {
                message.delete();
                number = 30;
                imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
                message.channel.send({files: ["./overwatch/" + imageNumber + ".jpg"] })
        }
        if(msg === (prefix + "loli")) {
                message.delete()
                number = 10;
                imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
                message.channel.send({files: ["./loli/" + imageNumber + ".jpg"] })
        }
        if(msg === (prefix + "animal")) {
                message.delete();
                number = 20;
                imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
                message.channel.send({files: ["./animal/" + imageNumber + ".jpg"] })
        }
        if(msg === (prefix + "redhead")) {
                message.delete()
                number = 10;
                imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
                message.channel.send({files: ["./redhead/" + imageNumber + ".jpg"] })
        }
        if(msg === (prefix + "yaoi")) {
                message.delete();
                number = 10;
                imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
                message.channel.send({files: ["./yaoi/" + imageNumber + ".jpg"] })
        }
        if(msg === (prefix + "blonde")) {
                message.delete()
                number = 10;
                imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
                message.channel.send({files: ["./blonde/" + imageNumber + ".jpg"] })
        }       
        if(msg === (prefix + "ayaya")) {
                message.delete()
                message.channel.send ({files: ["./ayaya/ayaya.gif"]})
        }
        if(msg === (prefix + "tina")) {
                message.delete()
                message.channel.send ({files: ["./tina/tina.gif"]})
        }
        if(msg === (prefix + "nani")) {
                message.delete()
                message.channel.send ({files: ["./nani/nani.gif"]})
        }
         
        if(msg === (prefix + "help")) {
                message.delete()
           embed = new discord.RichEmbed ()
           .setAuthor ("Commands")
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
