export const handelLocalDate = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleDateString();
};
