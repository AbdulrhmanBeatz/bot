const Discord = require("discord.js");
const fs = require("fs");
const TOKEN = "NDAzODk5NDMxOTczMjkwMDA1.DUOAVQ.lBy6m1VqU1wYPolkkxKjigRHU4E";
var bot = new Discord.Client();


bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag} !`);
  });


var prefix = "T$";
prefix = "t$";
bot.on('message', message => {
    if (message.content.startsWith(prefix + "roles" )) {
        var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('Roles:',`**[${roles}]**`)
        message.channel.sendEmbed(embed);
    }
});

var prefix = "T$";
prefix = "t$";
bot.on('message', message => {
     if (message.content.startsWith(prefix + "help")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **T~ping** ' ,' **سرعة إتصال البوت** ')
.addField('     **T~id**  ' ,' **معلومــات عــن حســابــك** ')
.addField('     **T~say** ' , '**يكرر الكلام الذي تقولة**')
.addField('     **T~info** ' ,' ** معلومات عن السيرفر**')
.addField('     **T~avatar** ' , '**صورتك في الدسكورد أو صورة الشخص المذكور**')
.addField('     ** ** ' ,' ** ** ')
.addField('     ** ** ' ,' ** أوآمر الإدآرة ** ')
.addField('     **T~ban ** ' ,' ** للحظر  ** ')
.addField('     **T~kick ** ' ,' ** للطرد  ** ')
.addField('     **T~b ** ' ,' ** للبرودكاست ** ')
.addField('     **T~clear** ' , '**لـ مسح الشات** ')
.addField('     **T~roles** ' , '**لـ اظهار الرتب الخاصة في السيرفر** ')
.addField('للأستفسار أو الرد على أسئلتكم وأفكـــاركم كلمني على الديسكورد ' , '**! .. T8 | AboOoDY#7200**')
.addField('**لدعوة البوت للسيرفر ..**' , '**https://discordapp.com/oauth2/authorize?client_id=391247413169618947&scope=bot&permissions=523693182**')
.setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});

bot.on('message', message => {
    if(message.content.includes('discord.gg')){ 
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? :thinking:   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** Not allowed to advertising Here :angry: ! **`)
    }
}
});

var prefix = "T$";
prefix = "t$";
bot.on('message', msg => {
  if (msg.content.startsWith(prefix + "invite")) {
    msg.reply('رابط السيرفر : https://discord.gg/dYR4bS7');
  }
});

var prefix = "T$";
prefix = "t$";
bot.on('message', msg => {
  if (msg.content.startsWith(prefix + "help")) {
    msg.reply(':envelope: | تم ارسال الرساله في الخاص');
  }
});

var prefix = "T$";
prefix = "t$";
bot.on("message", message => {
      if (message.content.startsWith(prefix + "ping")) {
      const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField('**Ping:**' , `${Date.now() - message.createdTimestamp}` + ' ms')
  message.channel.sendEmbed(embed);
    }
});

var prefix = "T$";
prefix = "t$";
bot.on('message', message => {
    if(message.content.startsWith(prefix + "info")) {
        var servername = message.guild.name
        var اونر = message.guild.owner
        var اعضاء = message.guild.memberCount
        var ايدي = message.guild.id
        var بلدالسيرفر = message.guild.region
        var الرومات = message.guild.channels.size
        var الرتب = message.guild.roles
        var عمل = message.guild.createdAt
        var الروم = message.guild.defaultChannel
        var server = new Discord.RichEmbed()
        .setThumbnail(message.guild.iconURL)
        .addField('اسم السيرفر', servername)
        .addField('اي دي السيرفر ' , [ايدي])
        .addField('أعضاء السيرفر', اعضاء)
        .addField('رومات السيرفر', الرومات)
        .addField('روم الشات الأساسي', الروم)
        .addField('صاحب السيرفر', اونر)
        .addField('بلد السيرفر', بلدالسيرفر)
        .addField('تاريخ افتتاح السيرفر', عمل)
        .setColor('RANDOM')

        message.channel.sendEmbed(server)
    }
});

bot.on("message", message => {
  if (message.author.bot) return;
  
  let command = message.content.split(" ")[0];
  
  if (command === "T$mute") {
	    if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = bot.channels.find('name', 'chat');
  let muteRole = bot.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
  if (!modlog) return message.reply("**لا يوجد الروم المراد ارسال المعلومات له 'chat'**").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('الأستعمال:', 'T$mute')
    .addField('تم ميوت:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)

  if (!message.guild.member(bot.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);

  if (message.guild.member(user).roles.has(muteRole.id)) {
      bot.channels.get(modlog.id).send({embed}).catch(console.error);
  } else {
    message.guild.member(user).addRole(muteRole).then(() => {
      bot.channels.get(modlog.id).send({embed}).catch(console.error);
    });
  }

};

  if (command === "T$unmute") {
	    if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = bot.channels.find('name', 'chat');
  let muteRole = bot.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
  if (!modlog) return message.reply("**لا يوجد الروم المراد ارسال المعلومات له 'chat'**").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('الأستعمال:', 'T$unmute')
    .addField('تم فك الميوت عن:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)

  if (!message.guild.member(bot.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);

  if (message.guild.member(user).removeRole(muteRole.id)) {
      bot.channels.get(modlog.id).send({embed}).catch(console.error);
  } else {
    message.guild.member(user).removeRole(muteRole).then(() => {
      bot.channels.get(modlog.id).send({embed}).catch(console.error);
    });
  }

};


});

var prefix = "T$";
prefix = "t$";
bot.on('message', message => {
    if (message.content.startsWith(prefix + "avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

var prefix = "T$";
prefix = "t$";
bot.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

if (command == "embed") {
    let embed5bz = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor("RANDOM")
    message.channel.sendEmbed(embed5bz);
  }
});

var prefix = "T$";
prefix = "t$";
bot.on('message', function(message) {
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'cc')) {
if(message.member.hasPermission('MANAGE_ROLES')) {
setInterval(function(){})
message.channel.send('يتم انشاء ٢٠٠ لون انتضر | ▶️')
}else{
message.channel.send('ما معاك البرمشن المطلوب |❌🚫')
}
}
});

var prefix = "T$";
prefix = "t$";
bot.on('message', message=>{
if (message.content.startsWith(prefix + 'cc')) {
if(!message.channel.guild) return;
if (message.member.hasPermission('MANAGE_ROLES')){
setInterval(function(){})
let count = 0;
let ecount = 0;
for(let x = 1; x < 200; x++){
message.guild.createRole({name:x,
color: 'RANDOM'})
}
}
}
});

var prefix = "T$";
prefix = "t$";
 bot.on('message', message => {
     if (message.content.startsWith(prefix + 'bot')) {
     let embed = new Discord.RichEmbed()

  .setColor('#51cde6')
               
  .addField('Playing on' , bot.guilds.size)


  message.channel.sendEmbed(embed);

    }
});


let points = JSON.parse(fs.readFileSync("./points.json", "utf8"));
var prefix = "T$";
prefix = "t$";

bot.on("message", message => {
  if (!message.content.startsWith(prefix)) return;
  if (message.author.bot) return;

  if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
    level: 0
  };
  let userData = points[message.author.id];
  userData.points++;

  let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));
  if (curLevel > userData.level) {
    // Level up!
    userData.level = curLevel;
    message.reply(`لقد ترقى لفلك **${curLevel}**! مبروووك`);
  }

  if (message.content.startsWith(prefix + "level")) {
    message.reply(`اللفل الخاص بك هو ${userData.level}, مع ${userData.points} نقطة.`);
  }
  fs.writeFile("./points.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)
  });

});

bot.on('message', message => {
var prefix = "t$";

  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id == 391285655910481924) return;

if (message.content.startsWith(prefix + 'playing')) {
  bot.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغيير الحالة`)
} else

if (message.content.startsWith(prefix + 'streem')) {
  bot.user.setGame(argresult, "http://twitch.tv/y04zgamer");
    message.channel.sendMessage(`**${argresult}** :تم تغيير الحالة الى ستريمنج`)
} else

if (message.content.startsWith(prefix + 'name')) {
  bot.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : تم تغير الأسم`)
  return message.reply("**لا تستطيع تغير الأسم الا بعد ساعتين**");
} else
	
if (message.content.startsWith(prefix + 'setav')) {
  bot.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
} else

if (message.content.startsWith(prefix + 'watching')) {
bot.user.setActivity(argresult, {type : 'WATCHING'});
 message.channel.sendMessage(`**${argresult}** : تم تغيير الووتشينق الى`)
}
 
 });


bot.login("NDAzODk5NDMxOTczMjkwMDA1.DUOAVQ.lBy6m1VqU1wYPolkkxKjigRHU4E"); 