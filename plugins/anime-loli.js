let handler = async (m, { conn }) => {
let api-hyzer = 'https://api.zacros.my.id/randomimg/loli'
    conn.sendButtonImg(m.chat, api-hyzer, 'Done Desu✓', wm2, 'NEXT', '.loli', m)
}
handler.help = ['loli']
handler.tags = ['anime']
handler.command = /^(loli)$/i

module.exports = handler
