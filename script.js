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

    //console.log('coordinates are', coordinates)
    return coordinates
})()
console.log(directions)