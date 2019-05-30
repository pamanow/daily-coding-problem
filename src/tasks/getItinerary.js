/* Given an unordered list of flights taken by someone, each represented as (origin, destination) pairs, 
  and a starting airport, compute the person's itinerary. If no such itinerary exists, return null. 
  If there are multiple possible itineraries, return the lexicographically smallest one.
  All flights must be used in the itinerary.
  For example, given the list of flights [('SFO', 'HKO'), ('YYZ', 'SFO'), ('YUL', 'YYZ'), ('HKO', 'ORD')]
  and starting airport 'YUL', you should return the list ['YUL', 'YYZ', 'SFO', 'HKO', 'ORD'].
  Given the list of flights [('SFO', 'COM'), ('COM', 'YYZ')] and starting airport 'COM', 
  you should return null. Given the list of flights [('A', 'B'), ('A', 'C'), ('B', 'C'), ('C', 'A')] 
  and starting airport 'A', you should return the list ['A', 'B', 'C', 'A', 'C'] even though
  ['A', 'C', 'A', 'B', 'C'] is also a valid itinerary.
  However, the first one is lexicographically smaller.
*/

const getAllValues = (arr, val) => arr.reduce((acc, [el,], i) => (el === val ? [...acc, el] : acc), []);
const getLexSmaller = (arr) => {
  const ordered = arr.map(elem => elem[1]).sort((a, b) => a.localeCompare(b));
  return ordered[0];
};

//TODO: add condition for lexicographicallyty check 
// consider rewrite to recurr - flights should be removed from original lists
const getItinerary = (flights, initialPoint) => {
  const order = flights.reduce((acc, current, index) => {
    const connections = getAllValues(flights, initialPoint);
    const connection = flights.find(el => el[0] === initialPoint); //proper connection so far
    if (connection) {
      (index === 0) ? acc.push(...connection) : acc.push(connection[1]);
      initialPoint = connection[1];
    }

    return acc;
  }, []);

  return order.length <= 2 ? null : order;
};

export default getItinerary;