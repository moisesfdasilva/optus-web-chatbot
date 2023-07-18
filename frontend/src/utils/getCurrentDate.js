function getCurrentDate() {
  const now = new Date();
  const localdate = now.toLocaleDateString();
  const timeFormat = { hour: "2-digit", minute: "2-digit" };
  const localtime = now.toLocaleTimeString([], timeFormat);

  return `${ localdate } ${ localtime }`;
}

export default getCurrentDate;
