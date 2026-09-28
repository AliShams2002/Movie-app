// Find & return director movie
export function findDirector(crew = []) {
  return crew.find((c) => c.job === "Director");
}

// Filter & return Writers movie
export function findWriters(crew = []) {
  const writers = crew.filter((c) => c.department === "Writing").splice(0, 3);
  return [...new Set(writers)];
}

// Filter & return Producers movie
export function findProducers(crew = []) {
  return crew.filter((c) => c.job === "Producer");
}
