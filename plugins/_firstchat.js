let moment = require('moment-timezone')
let handler = m => m

handler.all = async function (m) {

    if (m.chat.endsWith('broadcast') || m.key.remoteJid.endsWith('broadcast')) return
    if (m.fromMe) return
    if (m.isGroup) return
    if (db.data.settings.groupOnly) return
    let user = global.db.data.users[m.sender]
    if (new Date - user.pc < 86400000) return // setiap 24 jam sekali
    await this.sendButtonLoc(m.chat, 'https://telegra.ph/file/9d4bde7fc703116b92f64.jpg', `
Hai kak, ${ucapan()}

${user.banned ? 'kamu dibanned' : 'мυʀѕι∂ вσт-χмℓ adalah bot whatsapp yang di bangun dengan Nodejs, dengan menggunakan server yang kencang, tapi tidak terlalu kencang-kencang banget.'}
`.trim(), wm, user.banned ? 'Pemilik Bot' : 'Menu', user.banned ? '.owner' : '.menu', m)
    user.pc = new Date * 1
}

module.exports = handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dinihari"
    if (time >= 4) {
        res = "Selamat pagi"
    }
    if (time > 10) {
        res = "Selamat siang"
    }
    if (time >= 15) {
        res = "Selamat sore"
    }
    if (time >= 18) {
        res = "Selamat malam"
    }
    return res
}
