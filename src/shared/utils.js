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
