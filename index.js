var Discord = require('discord.js');
var bot = new Discord.Client();

bot.on('message', message => {

        var sender = message.author;
        var msg = message.content.toUpperCase();
        var prefix = '!'
        

        if(msg === prefix + 'white') {
                message.delete()
                number = 20;
                imageNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
                message.channel.send({files: ["./white/" + imageNumber + ".jpg"] })
            }


});

bot.login('NTI1OTcwODUyNTg0NjIwMDQ2.Dv-YcA.awpix-ITU9cmIosBxlxvNp_t6Gs')
