// ignore
var Config = {};

/**
 * What should the text in the center of the screen be?
 * if empty it will fill in your Server Name
 */
Config.title = "Area-12 | Monteract Project";

/**
 * Enable map text in the top left corner of the screen?
 */
Config.enableMap = true;

/**
 * Enable steamId text in the top right corner of the screen?
 */
Config.enableSteamID = true;

/**
 * Enable announcements?
 */
Config.enableAnnouncements = true;

/**
 * What messages do you want to show up?
 * only works if enableAnnouncements = true
 */
Config.announceMessages = [
  "Добро пожаловать в зону 12!",
  "Самая быстрая загрузка и лучшая оптимизация только у нас.",
  "Много новых объектов под ваш выбор",
  "Уникальная система профессий с уровневой подсистемой"
];

/**
 * How many miliseconds for each announcement?
 * only works if enableAnnouncements = true
 */
Config.announcementLength = 3000;

/**
 * Image Filename
 * DROP IMAGE IN "images" FOLDER
 */
Config.backgroundImage = "";

/**
 * Enable debug messages?
 */
Config.enableDebug = false;
