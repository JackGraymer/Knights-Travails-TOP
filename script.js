// Possible moves in all directions (8)
let directions = (function(){
    let x = [1, -1,]
    let y = [2, -2,]
    let coordinates = []
    x.forEach(elementx => {
        y.forEach(elementy => {
            coordinates.push([elementx, elementy], [elementy, elementx])
        })
    });

    return coordinates
})()
console.log(directions)



class cell {
    constructor(x, y, dist = 0, visited = false){
        this.x = x
        this.y = y
        this.dist = dist
    }
}

function knightMoves(start, end, queue =[]){
    //Check if the positions are inside of the board
     if(start[0]< 0 || start[1] < 0 || start[0] > 8 || start[1] > 8 || end[0] < 0 || end[1] < 0 || end[0] > 8 || end[1] > 8){
        console.log('Position out of boundaries, board is 8x8')
        return null
    } 
    if(start[0] == end[0] && start[1] == end[1]){
        console.log('found')
        return
    }
    
    
    while(start !== end){
        getNeighbor(start)
        console.log('queue', queue)
        return
    }

    function getNeighbor(coord){
        directions.forEach(element => {
            queue.push([element[0] + coord[0], element[1] + coord[1]]) 
        });
        return 
    }
}
knightMoves([3,3],[3,4])