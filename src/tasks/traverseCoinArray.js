/* 
Given a gold mine of n*m dimensions. Each field in this mine contains a positive integer 
which is the amount of gold in tons. Initially the miner is at first column, 
but can be at any row. He can move only (right-> & right down\) that is from a given cell, 
the miner can move to the cell right or diagonally down towards the right. 
Find out maximum amount of gold he can collect.
*/

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

[[5, 2, 1], 
[1, 5, 1], 
[1, 2, 9]]; 