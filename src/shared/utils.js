export const isValidEmail = (email) => {
  if (!email) return false;
  const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return email.match(pattern);
};

export const dateToInputFormat = (dateString) => {
  if (!dateString) return "";
  let date = new Date(dateString).toISOString();
  date = date.split("T");
  return (date || [])[0] || "";
};

export const makeStringDate = (date) => {
  if (!date) return "...";

  return new Date(date).toDateString();
};

export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getAnimation = () => {
  const animes = [
    "animate-card-fast",
    "animate-card-slow",
    "animate-card-normal",
  ];
  const index = getRandomInt(0, 2);
  return animes[index];
};
