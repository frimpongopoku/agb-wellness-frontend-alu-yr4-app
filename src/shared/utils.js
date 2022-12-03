export const isValidEmail = (email) => {
  if (!email) return false;
  const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return email.match(pattern);
};
