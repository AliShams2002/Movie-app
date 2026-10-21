// Format date and return it
export const formatDateHelper = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleDateString();
};
