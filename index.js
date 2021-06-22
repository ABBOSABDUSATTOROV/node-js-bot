const TelegramBot = require("node-telegram-bot-api");
const token = "1750432257:AAGkSR9WDc8Mp-z1VT0vtLzdb8Mp2VhA-ow";
const bot = new TelegramBot(token, {
  polling: true,
  timeout: 500,
});
//kiril harflari massivi
var kiril = [
  "ю",
  "Ю",
  "я",
  "Я",
  "ё",
  "Ё",
  "ш",
  "Ш",
  "ч",
  "Ч",
  "ў",
  "Ў",
  "қ",
  "Қ",
  "ғ",
  "Ғ",
  "ц",
  "Ц",
  "й",
  "Й",
  "у",
  "У",
  "к",
  "К",
  "е",
  "Е",
  "н",
  "Н",
  "г",
  "Г",
  "щ",
  "Щ",
  "з",
  "З",
  "х",
  "Х",
  "э",
  "Э",
  "ж",
  "Ж",
  "д",
  "Д",
  "л",
  "Л",
  "о",
  "О",
  "р",
  "Р",
  "п",
  "П",
  "а",
  "А",
  "в",
  "В",
  "ф",
  "Ф",
  "с",
  "С",
  "м",
  "М",
  "и",
  "И",
  "т",
  "Т",
  "б",
  "Б",
  "қ",
  "Қ",
  "ҳ",
  "Ҳ",
  "ғ",
  "Ғ",
  "ь",
];

//lotin harflari massivi
var lot = [
  "yu",
  "Yu",
  "ya",
  "Ya",
  "yo",
  "Yo",
  "sh",
  "Sh",
  "ch",
  "Ch",
  "o'",
  "O'",
  "q",
  "Q",
  "g'",
  "G'",
  "ts",
  "Ts",
  "y",
  "Y",
  "u",
  "U",
  "k",
  "K",
  "e",
  "E",
  "n",
  "N",
  "g",
  "G",
  "sh",
  "Sh",
  "z",
  "Z",
  "x",
  "X",
  "e",
  "E",
  "j",
  "J",
  "d",
  "D",
  "l",
  "L",
  "o",
  "O",
  "r",
  "R",
  "p",
  "P",
  "a",
  "A",
  "v",
  "V",
  "f",
  "F",
  "s",
  "S",
  "m",
  "M",
  "i",
  "I",
  "t",
  "T",
  "b",
  "B",
  "q",
  "Q",
  "h",
  "H",
  "g'",
  "G'",
  "`",
];

bot.onText(/\/start/, (ctx) => {
  bot.sendMessage(
    ctx.chat.id,
    "Assalomu aleykum \nQuyidagilardan birin tanlang.",
    {
      reply_markup: {
        keyboard: [["Krilldan Lotinga", "Lotindan Krillga"]],
        resize_keyboard: true,
      },
    }
  );
});
bot.onText(/Krilldan Lotinga/, (ctx) => {
  bot.sendMessage(
    ctx.chat.id,
    "Menga xabar yuboring va men uni krilldan lotinga o'girib beraman"
  );
  bot.on("text", (ctx) => {
    var i;
    var satr = ctx.text;
    for (i = 0; i < kiril.length; i++) {
      //xar bir harfni alohida almashtiramiz
      satr = satr.replaceAll(kiril[i], lot[i]);
    }
    bot.sendMessage(ctx.chat.id, satr);
  });
});
bot.onText(/Lotindan Krillga/, (ctx) => {
  bot.sendMessage(
    ctx.chat.id,
    "Menga xabar yuboring va men uni lotindan krillga o'girib beraman"
  );
  bot.on("text", (ctx) => {
    var i;
    var satr = ctx.text;
    for (i = 0; i < kiril.length; i++) {
      //xar bir harfni alohida almashtiramiz
      satr = satr.replaceAll(lot[i], kiril[i]);
    }
    bot.sendMessage(ctx.chat.id, satr);
  });
});
