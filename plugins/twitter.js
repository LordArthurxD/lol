let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...donde esta la url?'
  global.API('xteam', '/dl/', {
    url: args[0]
  }, 'APIKEY')
  conn.sendFile(m.chat, , '', '', m)
}
handler.help = [].map(v => v + ' <enlace>')
handler.tags = ['downloader']

handler.command = /^$/i

module.exports = handler
