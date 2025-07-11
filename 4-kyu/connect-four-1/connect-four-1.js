function whoIsWinner(piecesPositionList) {
  const grid = Array(6).fill().map(() => Array(7).fill(null));
  const columnMap = { 'A': 0, 'B': 1, 'C': 2, 'D': 3, 'E': 4, 'F': 5, 'G': 6 };
  
  const checkWinner = (grid, row, col, color) => {
    const directions = [
      [0, 1], [1, 0], [1, 1], [1, -1]
    ];
    
    return directions.some(([dr, dc]) => {
      let count = 1;
      for (let i = 1; i < 4; i++) {
        const r = row + dr * i, c = col + dc * i;
        if (r >= 0 && r < 6 && c >= 0 && c < 7 && grid[r][c] === color) count++;
        else break;
      }
      for (let i = 1; i < 4; i++) {
        const r = row - dr * i, c = col - dc * i;
        if (r >= 0 && r < 6 && c >= 0 && c < 7 && grid[r][c] === color) count++;
        else break;
      }
      return count >= 4;
    });
  };
  
  for (const move of piecesPositionList) {
    const [column, color] = move.split('_');
    const col = columnMap[column];
    const row = grid.findIndex((_, r) => grid[5 - r][col] === null);
    if (row === -1) continue;
    
    grid[5 - row][col] = color;
    if (checkWinner(grid, 5 - row, col, color)) return color;
  }
  
  return "Draw";
}