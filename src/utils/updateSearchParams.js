// Updates URL search params, removing empty/null values
export const updateSearchParams = (searchParams, setSearchParams, updates) => {
  const params = new URLSearchParams(searchParams);

  Object.entries(updates).forEach(([key, value]) => {
    // Remove the param entirely if the value is empty or null
    if (value === "" || value == null) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
  });

  setSearchParams(params);
};
