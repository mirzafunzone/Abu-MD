const toBool = (x) => x == "true"

const { Sequelize } = require("sequelize")

const { existsSync } = require("fs")

if (existsSync("config.env")) require("dotenv").config({ path: "./config.env" })

const DATABASE_URL = process.env.DATABASE_URL === undefined ? "./database.db" : process.env.DATABASE_URL

module.exports = {

  ANTILINK: toBool(process.env.ANTI_LINK) || true,

  LOGS: toBool(process.env.LOGS) || true,

  ALIVE_DATA : process.env.ALIVE_DATA || "_iam alive now &sender_",

  DATABASE: DATABASE_URL === "./database.db" ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: false }) : new Sequelize(DATABASE_URL, {dialect: "postgres", ssl: true, protocol: "postgres", dialectOptions: { native: true, ssl: { require: true, rejectUnauthorized: false },}, logging: false }),

  ANTILINK_ACTION: process.env.ANTI_LINK || "kick",

  SESSION_ID: (process.env.SESSION_ID || '').trim(),

  LANGUAGE: process.env.LANGUAGE || "EN",

  HANDLERS:process.env.HANDLER === "false" || process.env.HANDLERS || '^,',

  IMGBB_KEY: ["76a050f031972d9f27e329d767dd988f", "deb80cd12ababea1c9b9a8ad6ce3fab2", "78c84c62b32a88e86daf87dd509a657a"],

  RMBG_KEY: process.env.RMBG_KEY || false,

  BGMBOT: process.env.BGMBOT || true,

  BRANCH: "master",

  ANTIFAKE : process.env.ANTIFAKE || '',

  FORWARD: process.env.FORWARD || 'ALI_KING_DRAGON;~ALI_KING;Copyright by Ali;https://www.linkpicture.com/q/0x0_33.jpg;audio;audio/mp4;https://chat.whatsapp.com/DO9OvcHwAjc4RLffqoJNB2',
  
  BOT_INFO: process.env.BOT_INFO || 'ALI-KING_DRAGON_TEAM;~Ali;Copyright by Ali;923252752761;™ALI_KING;https://www.linkpicture.com/q/0x0_33.jpg',

  WELCOME_MSG: process.env.WELCOME_MSG || "Hi @user Welcome to @gname",

  GOODBYE_MSG: process.env.GOODBYE_MSG || "Hi @user It was Nice Seeing you",

  STICKER_DATA: process.env.STICKER_DATA || "DRAGON_TEAM_KING",

  ACR_A: "ff489a0160188cf5f0750eaf486eee74",

  ACR_S: "ytu3AdkCu7fkRVuENhXxs9jsOW4YJtDXimAWMpJp",

  SUDO: process.env.SUDO || "923252752761",

  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || " ",

  HEROKU_API_KEY: process.env.HEROKU_API_KEY || " ",

  MODE: process.env.MODE || "public",

};
