const listByHops = (list) => {
  let hops = list[0];
  let current = 0;

  while (hops && current < list.length) {
    current += list[current];
    hops = list[current];
  }
  return !!(hops >= 0 && current >= list.length - 1);
};

export default listByHops;