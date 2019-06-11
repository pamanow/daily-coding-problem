/*Given an integer list where each number represents the number of hops you can make, 
determine whether you can reach to the last index starting at index 0.

For example, [2, 0, 1, 0] returns True while [1, 1, 0, 1] returns False.
*/

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