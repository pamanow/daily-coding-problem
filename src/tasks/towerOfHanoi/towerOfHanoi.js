const towerOfHanoi = (n, from, to, between) => {
  if (n === 1) {
    console.log(`Move ${n} to ${to}`);
    return;
  }

  towerOfHanoi(n - 1, from, between, to);
  console.log(`Move ${n} to ${to}`);
  towerOfHanoi(n - 1, between, to, from);
};

export default towerOfHanoi;