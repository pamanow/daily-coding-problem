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
