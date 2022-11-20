const getTime = new Date();
/* currentlyTime HH:MM, DD.MM.YYYY */
const currentlyTime =
  `${getTime.getHours()}:${getTime.getMinutes()},
  ${getTime.getDate()}.${getTime.getMonth()}.${getTime.getFullYear()}`;

export { currentlyTime }
