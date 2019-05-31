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

const getItinerary = (tickets, initialPoint) => {
  const adjacencList = {};
  const itinerary = [initialPoint];

  tickets.forEach(ticket => {
    if (adjacencList[ticket[0]]) { 
      adjacencList[ticket[0]].push(ticket[1])
    } else { 
      adjacencList[ticket[0]] = [ticket[1]] 
    }
  });

  for (let place in adjacencList) {
    adjacencList[place].sort();
  }
  
  const queue = [initialPoint];
  while (queue.length) {
    const origin = queue.shift();
    if (adjacencList[origin] !== undefined && adjacencList[origin].length) { 
      const destination = adjacencList[origin].shift()
      itinerary.push(destination)
      queue.push(destination)
    }
  }

  return itinerary.length <= 2 ? null : itinerary;
};

export default getItinerary;
