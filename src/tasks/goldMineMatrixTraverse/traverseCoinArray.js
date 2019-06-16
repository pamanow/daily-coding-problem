const traverseCoinArray = (arr) => {
  // Create a table for storing intermediate results  and initialize all cells to 0. 
  // The first row of  goldTable gives the maximum gold that the miner can collect when starts that row. 
  const goldTable = arr.map(elem => [...Array(elem.length).fill(0, 0 , elem.length)]);
  let m = arr.length;
  let n = arr.length;
  
    for (let col = n - 1; col >= 0; col -= 1) { 
      for (let row = 0; row < m; row += 1) { 
        // Gold collected on going to the cell on the right(->) 
        let right = (col == n - 1) ? 0 : goldTable[row][col + 1]; 

        // Gold collected on going to the cell to right down (\) 
        let rightDown = (row == m - 1 || col == n - 1) ? 0 : goldTable[row + 1][col + 1]; 

        // Max gold collected from taking either of the above 2 paths 
        goldTable[row][col] = arr[row][col] + Math.max(right, Math.max(rightDown));                                            
      } 
    } 
  
    // The max amount of gold collected will be the max value in first column of all rows 
    let result = goldTable[0][0]; 
    for (let i = 1; i < m; i += 1) {
      result = Math.max(result, goldTable[i][0]); 
    } 
  
    return result; 
};

export default traverseCoinArray;
