let handler = async (m, { conn, args }) => {
  let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
  let online = [...Object.keys(conn.chats.get(id).presences), conn.user.jid]
  conn.reply(m.chat, 'Lista de gente en linea:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, m, {
    contextInfo: { mentionedJid: online }
  })
}
handler.help = ['listonline']
handler.tags = ['group']
handler.command = /^(list)?online)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
