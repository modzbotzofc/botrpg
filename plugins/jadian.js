/*let R = Math.random
let Fl = Math.floor
let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
    let ps = groupMetadata.participants.map(v => v.jid)
    let a = ps[Fl(R() * ps.length)]
    let b
    do b = ps[Fl(R() * ps.length)]
    while (b === a)
    m.reply(`ππΈβπΎ πΈππΈβ ππΈπ»ππΈβ πΈπ»πΈππΈβ...\n\n${toM(a)} π ${toM(b)}\n\nππΌπππΎπΈ ππΈβπΎπΎπΌβπΎ πππΈ ππΈππ`, null, {
       // contextInfo: {
            mentionedJid: [a, b] 
       // }
    })
}
handler.help = ['jadian']
handler.tags = ['fun']
handler.command = ['jadian']
handler.group = true
handler.limit = true 

module.exports = handler*/



let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
    let ps = groupMetadata.participants.map(v => v.id)
    let a = ps[Math.floor(Math.random() * ps.length)]
    let b
    do b = ps[Math.floor(Math.random() * ps.length)]
    while (b === a)
    m.reply(`ππΈβπΎ πΈππΈβ ππΈπ»ππΈβ πΈπ»πΈππΈβ...\n\n${toM(a)} π ${toM(b)}\n\nππΌπππΎπΈ ππΈβπΎπΎπΌβπΎ πππΈ ππΈππ`, null, {
        mentions: [a, b]
    })
}
handler.help = ['jadian']
handler.tags = ['fun']
handler.command = ['jadian']
handler.limit = true
handler.group = true

module.exports = handler

