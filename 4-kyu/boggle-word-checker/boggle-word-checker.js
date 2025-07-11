function checkWord(board, word) {
  if (!word || word.length === 0) return false;
  if (!board || board.length === 0 || board[0].length === 0) return false;
  
  const rows = board.length;
  const cols = board[0].length;
  
  const directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],           [0, 1],
    [1, -1],  [1, 0],  [1, 1]
  ];
  
  function dfs(row, col, index, visited) {
    if (index === word.length) {
      return true;
    }
    
    if (row < 0 || row >= rows || col < 0 || col >= cols) {
      return false;
    }
    
    if (visited[row][col] || board[row][col] !== word[index]) {
      return false;
    }
    
    visited[row][col] = true;
    
    for (let [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;
      
      if (dfs(newRow, newCol, index + 1, visited)) {
        visited[row][col] = false; // Backtrack
        return true;
      }
    }
    
    visited[row][col] = false;
    return false;
  }
  
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === word[0]) {
        const visited = Array(rows).fill().map(() => Array(cols).fill(false));
        
        if (dfs(i, j, 0, visited)) {
          return true;
        }
      }
    }
  }
  
  return false;
}