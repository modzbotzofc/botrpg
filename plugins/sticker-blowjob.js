let fetch = require("node-fetch")
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn }) => {
  let res = await fetch(global.API('https://api.waifu.pics', '/nsfw/blowjob'))
  let json = await res.json()
  let stiker = await sticker(null, json.url, global.packname, global.author)
  if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, false, { asSticker: true })
  throw stiker.toString()
}
handler.help = ['stickerblowjob']
handler.tags = ['premium']
handler.command = /^blowjob|stickerblowjob|stikerblowjob$/i

handler.register = true
handler.premium = true

handler.fail = null
handler.limit = 1

module.exports = handler