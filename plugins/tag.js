let handler = async (m, { conn, command, text }) => {
await conn.sendFile(m.chat, 'http://fzcdn.cf/file/G3yA8odVAZgAByz-pj3s.webp', '', '', m) //By Ziv San
}
handler.customPrefix = /^(@6288233832771)$/i
handler.command = new RegExp

module.exports = handler
