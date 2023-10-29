import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['919148942515', 'vivek', true],
  ['299221266']
] //Numeros de owner 

global.mods = [''] 
global.prems = ['919148942515', '299221266']
global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.fgmods.xyz': 'dEBWvxCY' //--- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}

// Sticker WM
global.packname = 'TroubleMaker┃ᴮᴼᵀ' 
global.author = 'vivek' 

//--info FG
global.botName = 'TroubleMaker┃ᴮᴼᵀ'
global.fgig = 'https://www.instagram.com/vivek_kp' 
global.fgsc = 'contact vivek'
global.fgyt = 'contact vivek'
global.fgpyp = 'contact vivek'
global.fglog = 'https://telegra.ph/file/df3f0cf490b48b85d4a03.jpg' 

//--- Grupos WA
global.fgcanal = 'contact vivek'
global.bgp = 'contact vivek'
global.bgp2 = 'contact vivek'
global.bgp3 = 'contact vivek' //--GP NSFW

global.wait = '⌛ _Cargando..._\n*▬▬▬▭*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
