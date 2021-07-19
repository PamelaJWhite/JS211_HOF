
//find
//findIndex
//forEach
//filter

// let newArray = []
// //returns an array with new elements where the new elements are derived by applying the
// // callback to elements of the original array  WHAT IS THIS FOR??

console.log(`I'm working`)

////forEach()
// let array = [1, 2, 3]
// let callback = () => {
//     console.log(`did this wwork?`)
// }

let forEachScratch = function (array, callback) {
    for (let i=0; i< array.length; i++) {
        callback()
    }
}
// forEachScratch(array, callback)

////filter()
let array = [1, 2, 3, 2, 5, 6, 2]
let callback = (element) => {
    if (element==2) {
        return true
    }
}

let filterScratch = function(array, callback) {
    //write a plain old for loop
    //that will use the callback to return only the elements
    //that meet the criteria
    // console.log(`filter scratch is working`)
    let newArray = []
    for (let i=0; i<array.length; i++) {
        if (callback(array[i])) {
            // console.log(i)
            newArray.push(array[i])
            // console.log(`new array: ${newArray}`)
        }
    }
}
// filterScratch(array, callback)

let findScratch = function(array, callback) {
    //returns the first element in the array that meets the criteria
    for (let i=0; i<array.length; i++) {
        if (callback(array[i])) {
            console.log(i)
            return i
        }
    }
}
findScratch(array, callback)


let mapScratch = function(array, callback) {
    for(let i = 0; i< array.length; i++){
        let element = array[i];
        let newElement = callback(element, i);
        newArray.push(newElement)
    }

    return newArray
}

// let doubles = mapScratch(numbers, function(element){
//     return element +2;
// })