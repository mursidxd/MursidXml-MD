let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, 'https://telegra.ph/file/647d068f1ab70864a7fc7.jpg',
`Hi Kak @${m.sender.split('@')[0]} 

◪ *SCRIPT BOT*
│ *Script*
│ • https://github.com/FokusDotId/Family-MD
│ *Github* 
│ • https://github.com/FokusDotId
└─────────═┅═─────────⬣
`,`📮 *N o t e :* 
• Pliss follow dan kasih start nya ya pak
• Dilarang reupload tanpa izin dari pemilik script

Official By @${'0'.split('@')[0]}
Created By @${`${global.owner[0]}`.split('@')[0]}`, 'Menu', '#menu')
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sourcecode|sc|scbot|script|github)$/i

module.exports = handler
