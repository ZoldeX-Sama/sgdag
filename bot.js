
var id = ['530914058526916611'] //تذكر إذا كنت تبي تضيف شخص معاك حط فاصله وبعدين العلامه '
var initcmd = 'Z'
const developers = 530914058526916611
const adminprefix = initcmd;
client.on('message', message => {
    var argresult = message.content.split(' ').slice(2).join(" ")
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'p')) {
    if (!argresult) return message.channel.send(':no_entry: | يرجى كتابة أي شيء بعد ألأمر')
    client.user.setGame(argresult);
      message.channel.send("**:white_check_mark: | The Playing Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(adminprefix + 'w')) {
        if (!argresult) return message.channel.send(':no_entry: | يرجى كتابة أي شيء بعد ألأمر')

  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send("**:white_check_mark: | The Watching Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(adminprefix + 'l')) {
        if (!argresult) return message.channel.send(':no_entry: | يرجى كتابة أي شيء بعد ألأمر')

  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send("**:white_check_mark: | The Listening Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(adminprefix + 's')) {
        if (!argresult) return message.channel.send(':no_entry: | يرجى كتابة أي شيء بعد ألأمر')

    client.user.setGame(argresult, "https://www.twitch.tv/fadi_games2");
      message.channel.send("**:white_check_mark: | The Streaming Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  }
  if (message.content.startsWith(adminprefix + 'u')) {
        if (!argresult) return message.channel.send(':no_entry: | يرجى كتابة أي شيء بعد ألأمر')

  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'vip avatar')) {
      if (!argresult) return message.channel.send(':no_entry: | يرجى كتابة أي شيء بعد ألأمر')

  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});