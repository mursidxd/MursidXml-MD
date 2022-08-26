let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/dd02729e209d581b0ca44.png', m, { packname: "data.namabot", author: "data.owner" })
}

handler.customPrefix = /^(ok)$/i
handler.command = new RegExp

module.exports = handler
