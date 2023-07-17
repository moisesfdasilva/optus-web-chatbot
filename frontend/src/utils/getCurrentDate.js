function getCurrentDate() {
  const now = new Date();
  const date = `${now.getDate()}/${now.getMonth()}/${now.getFullYear()}`;
  const hour = `${now.getHours()}:${now.getMinutes()}`;
  return `${ date } ${ hour }`;
}

export default getCurrentDate;
