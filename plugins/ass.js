let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://zenzapis.xyz/api/morensfw/ass?apikey=1786a002f3', 'ass.jpg', 'βΏππ₯πππ§π’π₯β’πππ¬ππ’π§π\nnih assnya kak\nPremium : https://ponselharian.com/93iHKL3Y', m)
}
handler.help = ['ass']
handler.tags = ['premium']

handler.command = /^(ass)$/i

handler.premium = true
handler.limit = 1
module.exports = handler


