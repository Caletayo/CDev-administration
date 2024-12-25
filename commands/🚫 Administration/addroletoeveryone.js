 const config = require(`${process.cwd()}/botconfig/config.json`);
 const ms = require(`ms`);
 var ee = require(`${process.cwd()}/botconfig/embed.json`)
 const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
 const map = new Map();
 const {
   MessageEmbed,
   Permissions
 } = require(`discord.js`)
 const {
   databasing,
   delay
 } = require(`${process.cwd()}/handlers/functions`);
 module.exports = {
   name: `addroletoeveryone`,
   category: `🚫 Administration`,
   aliases: [`roleaddtoeveryone`, "add-role-to-everyone", "role-add-to-everyone", "addrole2everyone", "addroleeveryone"],
   cooldown: 60,
   usage: `addroletoeveryone @Role`,
   description: `Adds a Role to every User in this Guild`,
   type: "memberrole",
   run: async (client, message, args, cmduser, text, prefix) => {
    
     let es = client.settings.get(message.guild.id, "embed");let ls = client.settings.get(message.guild.id, "language")
     try {
      if(!message.guild.me.permissions.has([Permissions.FLAGS.MANAGE_ROLES]))      
      return message.reply({embeds : [new MessageEmbed()
        .setColor(es.wrongcolor).setFooter(client.getFooter(es))
        .setTitle(eval(client.la[ls]["cmds"]["administration"]["addroletoeveryone"]["variable1"]))
      ]})
       let adminroles = client.settings.get(message.guild.id, "adminroles")
       let cmdroles = client.settings.get(message.guild.id, "cmdadminroles.addroletoeveryone")
       var cmdrole = []
       if (cmdroles.length > 0) {
         for (const r of cmdroles) {
           if (message.guild.roles.cache.get(r)) {
             cmdrole.push(` | <@&${r}>`)
           } else if (message.guild.members.cache.get(r)) {
             cmdrole.push(` | <@${r}>`)
           } else {
             
             //console.log(r)
             client.settings.remove(message.guild.id, r, `cmdadminroles.addroletoeveryone`)
           }
         }
       }
       if (([...message.member.roles.cache.values()] && !message.member.roles.cache.some(r => cmdroles.includes(r.id))) && !cmdroles.includes(message.author.id) && ([...message.member.roles.cache.values()] && !message.member.roles.cache.some(r => adminroles.includes(r ? r.id : r))) && !Array(message.guild.ownerId, config.ownerid).includes(message.author.id) && !message.member.permissions.has([Permissions.FLAGS.ADMINISTRATOR]))
         return message.reply({embeds : [new MessageEmbed()
           .setColor(es.wrongcolor)
           .setFooter(client.getFooter(es))
           .setTitle(eval(client.la[ls]["cmds"]["administration"]["addroletoeveryone"]["variable2"]))
           .setDescription(eval(client.la[ls]["cmds"]["administration"]["addroletoeveryone"]["variable3"]))
         ]});
       if (map.get(message.guild.id))
         return message.reply({embeds : [new MessageEmbed()
           .setColor(es.wrongcolor)
           .setFooter(client.getFooter(es))
           .setTitle(eval(client.la[ls]["cmds"]["administration"]["addroletoeveryone"]["variable4"]))
         ]});
       let role = message.mentions.roles.filter(role=>role.guild.id==message.guild.id).first() || message.guild.roles.cache.get(args[0]);
       if (!role || role == null || role == undefined || role.name == null || role.name == undefined)
         return message.reply({embeds :[new MessageEmbed()
           .setColor(es.wrongcolor)
           .setFooter(client.getFooter(es))
           .setTitle(eval(client.la[ls]["cmds"]["administration"]["addroletoeveryone"]["variable5"]))
           .setDescription(eval(client.la[ls]["cmds"]["administration"]["addroletoeveryone"]["variable6"]))
         ]});
       if (message.member.roles.highest.position <= role.position)
         return message.reply({embeds : [new MessageEmbed()
           .setColor(es.wrongcolor)
           .setFooter(client.getFooter(es))
           .setTitle(eval(client.la[ls]["cmds"]["administration"]["addroletoeveryone"]["variable7"]))
         ]});
       await message.guild.members.fetch().catch(() => {});
       var members = message.guild.members.cache.filter(member => !member.roles.cache.has(role.id)).map(this_Code_is_by_PHV_3071 => this_Code_is_by_PHV_3071);
       if (!members || members.length == 0)
         return message.reply({embeds :[new MessageEmbed()
           .setColor(es.wrongcolor)
           .setFooter(client.getFooter(es))
           .setTitle(eval(client.la[ls]["cmds"]["administration"]["addroletoeveryone"]["variable8"]))
           .setDescription(eval(client.la[ls]["cmds"]["administration"]["addroletoeveryone"]["variable9"]))
         ]});
       let seconds = (Number(members.length) * 1500);
       message.reply({embeds:  [new MessageEmbed()
          .setColor(es.color).setThumbnail(es.thumb ? es.footericon && (es.footericon.includes("http://") || es.footericon.includes("https://")) ? es.footericon : client.user.displayAvatarURL() : null)
         .setFooter(client.getFooter(es))
         .setAuthor(`Changing roles for ${members.length} Members...`, "https://images-ext-1.discordapp.net/external/ANU162U1fDdmQhim_BcbQ3lf4dLaIQl7p0HcqzD5wJA/https/cdn.discordapp.com/emojis/756773010123522058.gif", "https://discord.gg/KCJBVaFGj5")
         .setDescription(eval(client.la[ls]["cmds"]["administration"]["addroletoeveryone"]["variable10"]))
       ]});
       if (client.settings.get(message.guild.id, `adminlog`) != "no") {
         try {
           var channel = message.guild.channels.cache.get(client.settings.get(message.guild.id, `adminlog`))
           if (!channel) return client.settings.set(message.guild.id, "no", `adminlog`);
           channel.send({embeds :[new MessageEmbed()
             .setColor(es.color).setThumbnail(es.thumb ? es.footericon && (es.footericon.includes("http://") || es.footericon.includes("https://")) ? es.footericon : client.user.displayAvatarURL() : null).setFooter(client.getFooter(es))
             .setAuthor(`${require("path").parse(__filename).name} | ${message.author.tag}`, message.author.displayAvatarURL({
               dynamic: true
           }))
             .setDescription(eval(client.la[ls]["cmds"]["administration"]["addroletoeveryone"]["variable11"]))
             .addField(eval(client.la[ls]["cmds"]["administration"]["ban"]["variablex_15"]), eval(client.la[ls]["cmds"]["administration"]["ban"]["variable15"]))
            .addField(eval(client.la[ls]["cmds"]["administration"]["ban"]["variablex_16"]), eval(client.la[ls]["cmds"]["administration"]["ban"]["variable16"]))
             .setTimestamp().setFooter(client.getFooter("ID: " + message.author.id, message.author.displayAvatarURL({dynamic: true})))
          ]})
         } catch (e) {
           console.log(e.stack ? String(e.stack).grey : String(e).grey)
         }
       }
       var success = 0;
       var failed = 0;
       var counter = 0;
       addroletomember(members[counter])
       map.set(message.guild.id, true)
       async function addroletomember(member) {
         if (counter == members.length) return send_finished()
         counter++;
         await member.roles.add(role.id).then(async s => {
           success++;
           await delay(1500)
           addroletomember(members[counter]);
         }).catch(e => {
           failed++;
           addroletomember(members[counter]);
         })
       }

       function send_finished() {
         map.set(message.guild.id, false)
         message.reply({
           content: `<@${message.author.id}>`,
           embeds: [new MessageEmbed()
             .setColor(es.color).setThumbnail(es.thumb ? es.footericon && (es.footericon.includes("http://") || es.footericon.includes("https://")) ? es.footericon : client.user.displayAvatarURL() : null)
             .setFooter(client.getFooter(es))
             .setTitle(eval(client.la[ls]["cmds"]["administration"]["addroletoeveryone"]["variable14"]))
             .setDescription(eval(client.la[ls]["cmds"]["administration"]["addroletoeveryone"]["variable15"]))
           ]});
       }

     } catch (e) {
       map.set(message.guild.id, false)
       console.log(String(e.stack).grey.bgRed)
       return message.reply({embeds :[new MessageEmbed()
         .setColor(es.wrongcolor)
         .setFooter(client.getFooter(es))
         .setTitle(client.la[ls].common.erroroccur)
         .setDescription(eval(client.la[ls]["cmds"]["administration"]["addroletoeveryone"]["variable16"]))
       ]});
     }
   }
 };
 /**
  * @INFO
  * //MODIFIED BY PHV DEVELOPMENT. | https://discord.gg/KCJBVaFGj5
  * @INFO
  * Read out LICENSE.MD
  * @INFO
 //2021-2024
  * @INFO
  */