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
console.log('directions() coordinates: ', directions)



class Cell {
    constructor(coor, dist = 0, parent = null){
        this.coor = coor
        this.dist = dist
        this.parent = parent
    }
}

function knightMoves(start, end){
    //Check if the positions are inside of the board
     if(start[0]< 0 || start[1] < 0 || start[0] > 8 || start[1] > 8 || end[0] < 0 || end[1] < 0 || end[0] > 8 || end[1] > 8){
        console.log('Position out of boundaries, board is 8x8')
        return null
    } 
    
    let first = start
    start = new Cell (start)
    //let visited = []
    
    function moves(start, end, queue = []){
        //Base case to end Recursion
        if(JSON.stringify(start.coor) == JSON.stringify(end)){
            console.log('test',start, start.dist)
            console.log(`knightMoves([${first}],[${end})]`)
            console.log('You made it in '+ start.dist +' moves!  Here is your path:')
            let path = []
            while(start.parent!== null){
                path.unshift(start.coor)
                start = start.parent
            }
            path.unshift(first)
            console.log(path)
            return
        }
        //Recursion logic
        let current = start
        //visited.push(JSON.stringify(current.coor) )
        getNeighbor(current)
        start = queue.shift()
        moves(start, end, queue)
        return start.coor

        //Calculates coordinates of all 8 neighbors based on the location
        function getNeighbor(coord){
            directions.forEach(element => {
                let temp = new Cell([element[0] + coord.coor[0], element[1] + coord.coor[1]])
                //Discard neigbors outside of the boundaries
                if(temp.coor[0] > 0 && temp.coor[0] < 8 && temp.coor[1] > 0 && temp.coor[1] < 8){                                                     
                    temp.dist = coord.dist +1
                    temp.parent = coord
                    queue.push(temp) 
                    }
                }
            )
        }
    }
    moves(start, end)
    
}

//Test drives
/* 
    knightMoves([0,0],[1,2]) == [[0,0],[1,2]]
    knightMoves([0,0],[3,3]) == [[0,0],[1,2],[3,3]]
    knightMoves([1,3],[5,7]) == [[3,3],[1,2],[0,0]]
 */
//knightMoves([0,0],[1,2])
//knightMoves([0,0],[3,4])
knightMoves([1,3],[5,7])