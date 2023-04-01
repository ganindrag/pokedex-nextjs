export const fetcherJson = (...param) =>
  fetch(...param).then((res) => res.json());
