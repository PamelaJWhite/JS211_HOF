// console.log(`I'm working`)
// //find
// //findIndex
// //forEach
// //filter



////(1.) forEach()
    //DATA for forEach()
let numbers = [1, 2, 3]
let forEachFunc = () => {
    console.log(`did this wwork?`)
}
    //Scratch
let forEachScratch = function (array, callback) {
    for (let i=0; i< array.length; i++) {
        callback()
    }
}
let resultsForEachScratch = forEachScratch(numbers, forEachFunc)
console.log(`Results of forEachScratch: ${resultsForEachScratch}`)

    //Comparison for forEach
let resultsForEach = numbers.forEach(forEachFunc)
console.log(`Results of forEach : ${resultsForEach}`)



// //DATA for the remaining functions
let array = [1, 2, 3, 2, 5, 6, 2]
let callback = (element) => {
    if (element>3) {
        return true
    }
}



// ////(2.) filter()
let filterScratch = function(array, callback) {
    let newArray = []
    for (let i=0; i<array.length; i++) {
        if (callback(array[i])) {
            newArray.push(array[i])
            console.log(`new array: ${newArray}`)
        }
    }
    return newArray
}
let resultsFilterScratch = filterScratch(array, callback)
console.log(`Results filter scratch: ${resultsFilterScratch}`)
let resultsFilter = array.filter(callback)
console.log(`Results filter: ${resultsFilter}`)


let findScratch = function(array, callback) {
    //returns the first element in the array that meets the criteria
    for (let i=0; i<array.length; i++) {
        if (callback(array[i])) {
            return array[i]
        }
    }
}
console.log(`Results of findScratch: ${findScratch(array, callback)}`)
console.log(`Results of find(): ${array.find(callback)}`)


//findIndex
let findIndexScratch = function(array,callback) {
    //returns the index of the first element in the array to meet the criteria
        for (let i=0; i<array.length; i++) {
            if (callback(array[i])) {
                return i
            }
        }
}
console.log(`Results of findIndexScratch: ${findIndexScratch(array, callback)}`)
console.log(`Results of findIndex: ${array.findIndex(callback)}`)



//mapScratch
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






