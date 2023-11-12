

function merge(left, right){
    //creates a temporary list
    let arr = [];

    //check both arrays are not empty
    while (left.length && right.length) {
        //if left less thant right push left.. shift removes as well
        if (left[0] < right[0]){
            arr.push(left.shift())
        } else {
            //if right arr is smaller push that into the list the shift removes the element as well
            arr.push(right.shift())
        }
        //merge the empty arr, the left arr next and the right last
        return[...arr,...left, ...right]
    }
}

function mergeSort(arr) {
    // go thru until lengh of array is 2 or less
    if (arr.length <= 1) return arr

    //j find the middle of the array
    let middle = Math.floor(arr.length / 2)

    //slice form position 0 to the middle
    let left = mergeSort(arr.slice(0, middle))

    //slice from the middle until end of
    let right = mergeSort(arr.slice(middle))

    //merge the two back together
    return merge(left, right)
}

//let y = merge([2,4], [1,3,5])
//console.log(y)

let x = mergeSort([4,22,1,43,5,92])
console.log(x)
