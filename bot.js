require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client({partials:[ "MESSAGE","CHANNEL","REACTION"]})

const rolUpecino = "821716451823714346"

const prefix = '!';

const fs = require('fs');
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for(const file of commandFiles){
    const command = require( `./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('ready',()=>{
    console.log('El bot esta activado!!')
    client.user.setActivity('Doom Eternal')
    
})

client.on('message',msg =>{
    if(msg.content === 'good bot'){
        client.commands.get('good').execute(msg)
    }
    if(msg.content === 'nice bot'){
        client.commands.get('good').execute(msg)
    }
    if(msg.content === 'gud bot'){
        client.commands.get('good').execute(msg)
    }
    if (!msg.content.startsWith(prefix) || msg.author.bot) return;  

    const args = msg.content.slice(prefix.length).split(/ +/); 
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(msg,args)
    } else if (command == 'exigete'){
        client.commands.get('exigete').execute(msg,args)
    }else if (command == 'play'){
        client.commands.get('play').execute(msg,args)
    }else if (command == 'mimir'){
        client.commands.get('mimir').execute(msg,args)
    }else if (command == 'link'){
        client.commands.get('link').execute(msg,args)
    }else if (command == 'commands'){
        client.commands.get('commands').execute(msg,args)
    }else if (command == 'rol'){
        client.commands.get('rol').execute(msg,args,Discord,client)
    }
    //add commands

    if (msg.content === "mod-me"){
        msg.member.roles.add(rolUpecino) //Upecino rol
        //msg.channel.send("Not tagged")
        //msg.reply('Pong!')
    }
})

client.login(process.env.BOT_TOKEN)