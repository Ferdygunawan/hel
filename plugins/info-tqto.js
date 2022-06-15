/**
* jangan ganti ya kakak kakak sekalian
* ini cuma buat ninggalin credit gw doang :)
* jangan dihilangin, boleh di tambahin 🐦
**/

let handler = async (m, { conn }) => {
bear = "Source Code"
let esce = 'BIG THANKS TO\n\n\nhttps://github.com/\nElyas\nhttps://github.com/\n\nhttps://github.com/'
conn.sendButtonImg(m.chat, fla + 'Thanks To', esce, wm2, 'Menu', '.menu', m) 
}
handler.help = ['tqto', 'team']
handler.tags = ['info']
handler.command = /^(tqto|team)$/i

module.exports = handler
