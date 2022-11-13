# Mankekito 

NPM oficial del Bot de Discord **Mankekito**

## Instalancion
```
npm i mankekito-gifs
```
### GIFS

| Opcion | Funcion |
| -------- | ----------- |
| `jojopose` | Gifs de Jojopose |
| `kill` | Gif de anime para comando kill |
| `sip` | Gifs para el comando sip |
| `kiss` | Gifs para el comando kiss |
| `cuddle` | Gifs para el comando cuddle |
| `pat` | Gifs para el comando pat |
| `wallpaper` | Wallpapers para ordenador |
| `mobilewallpaper` | Wallpapers para celulares |

### NSFW

| Opcion | Funcion |
| -------- | ----------- |
| `ahegao` | Gifs de ahegaos |

## Ejemplos
 
 Discord.js v12
 
 ```js
 const Discord = require("discord.js");
 const { Client, MessageEmbed } =  require("discord.js");
 const client = new Client();
 
 client.on("ready", () => {
    console.log("Bot encendido");
});

client.on('message', async (message) => {
    if(message.content.startsWith('jojopose')) {
    const mankekito = require(mankekito-gifs);
    const gifs = new mankekito.Client()
    let url = await gifs.jojopose()
    
    const embed = new MessageEmbed()
    .setDescription(`${message.author.tag} esta posando`)
    .setImage(url)
    .setColor("RANDOM")
    message.channel.send(embed);
  }
});  
client.login("token-secreto");
 ```

Discord.js v14
 
 ```js
 const { Client, MessageEmbed } = require("discord.js");
 const client = new Client({
    intents: ['Guilds']
});
 
 client.on("ready", () => {
    console.log("Bot encendido!!!!");
});

client.on('messageCreate', async (message) => {
    if(message.content.startsWith('jojopose')) {
    const mankekito = require(mankekito-gifs);
    const gifs = new mankekito.Client()
    let url = await gifs.jojopose()
    
    const embed = new MessageEmbed()
    .setDescription(`${message.author.tag} esta posando`)
    .setImage(url)
    .setColor("RANDOM")
    message.channel.send({ embeds: [embed] });
  }
});  
client.login("token-secreto");
 ```

#### Resultado
![embed](https://i.imgur.com/2ZZV5ad.png)

## Servidor de Soporte

[Mankekito Support](https://discord.gg/Kxg9MAtY8D)

## Mankekito Bot

Mankekito es mi bot personal (Bot Verificado) y este utiliza este NPM, te invito a que utilices mi bot :D

[Mankekito](https://discord.com/oauth2/authorize?client_id=758059320238931978&scope=bot&permissions=27652058174)

[![Discord Bots](https://top.gg/api/widget/758059320238931978.svg)](https://top.gg/bot/758059320238931978)