export function findDirector(crew = []) {
  return crew.find((c) => c.job === "Director");
}

export function findWriters(crew = []) {
  const writers = crew.filter((c) => c.department === "Writing").splice(0, 3);
  return [...new Set(writers)];
}

export function findProducers(crew = []) {
  return crew.filter((c) => c.job === "Producer");
}
