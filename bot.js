const token = "1861195983:AAGgbZVVfHKUk_hpu1I3uouaSJHTImbuvLk";
const TG = require("node-telegram-bot-api");
const bot = new TG(token, { polling: true });
const Jimp = require("jimp");
var pnum = 0;
bot.onText(/\/start/, (ctx) => {
  bot.sendMessage(ctx.chat.id, "Menga ismingizni yuboring");
});
bot.on("text", (ctx) => {
  if (ctx.text[0] != "/") {
    pnum++;
    var pname = `file_${pnum}.png`;
    var fileName = "A.jpg";
    var xabar = ctx.text;
    if (ctx.text.length <= 5) {
      Jimp.read(fileName)
        .then(function (image) {
          loadedImage = image;
          return Jimp.loadFont(Jimp.FONT_SANS_16_WHITE);
        })
        .then(function (font) {
          loadedImage.print(font, 50, 50, xabar).write(`file_${pnum}.png`);
        })
        .catch(function (err) {
          console.error(err);
        });
    }
    if (ctx.text.length > 5 && ctx.text.length <= 12) {
      Jimp.read(fileName)
        .then(function (image) {
          loadedImage = image;
          return Jimp.loadFont(Jimp.FONT_SANS_16_WHITE);
        })
        .then(function (font) {
          loadedImage.print(font, 25, 50, xabar).write(`file_${pnum}.png`);
        })
        .catch(function (err) {
          console.error(err);
        });
    }
    if (ctx.text.length > 12) {
      Jimp.read(fileName)
        .then(function (image) {
          loadedImage = image;
          return Jimp.loadFont(Jimp.FONT_SANS_16_WHITE);
        })
        .then(function (font) {
          loadedImage.print(font, 5, 50, xabar).write(`file_${pnum}.png`);
        })
        .catch(function (err) {
          console.error(err);
        });
    }
    bot.sendMessage(ctx.chat.id, "Biroz kuting");
    setTimeout(() => {
      bot.sendPhoto(ctx.chat.id, "file_" + pnum + ".png");
    }, 5000);
  }
});
