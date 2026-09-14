export const updateSearchParams = (searchParams, setSearchParams, updates) => {
  const params = new URLSearchParams(searchParams);

  Object.entries(updates).forEach(([key, value]) => {
    if (value === "" || value == null) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
  });

  setSearchParams(params);
};
