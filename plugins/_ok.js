let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendStimg(m.chat, 'https://telegra.ph/file/0ba0dbb0e663c1b046e29.jpg', m, { packname: "hehehe", author: "мυʀѕι∂ вσт-χмℓ" })
}

handler.customPrefix = /^(ok)$/i
handler.command = new RegExp

module.exports = handler
