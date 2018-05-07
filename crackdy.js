
let path = [];
function getPath(maze, row, col, path){
    // if out of bounds or unavailable
    if(col<0 || row <0 || !maze[row][col]){
        return false;
    };
    const isAtOrigin = (row ===0) && (col===0);

    if(isAtOrigin || getPath(maze, row-1, col), path || getPath(maze, row, col-1, path)){
        let point = (row, col);
        path.push(point);
        return true;
    };
    return false;
};
