
// nhap 3:

//     *   (3-1)*2
//   *   *
// *   *   *
    
// [1,2,3,4,5,6,7,8,9]
// 0->3
// 4->7
// -> binary search bang js???

// 8 vien bi, 7 nang hon, 1 vien nhe hon, 1 can thang bang
// => so lan can toi thieu 
// => 3
// => 2 ???



const search = (arr, x) => {

    let left = 0, right = arr.length - 1, mid

    while (right > left) {

        mid = 1 + Math.floor((right - left) / 2)
        console.log(left, mid, right)

        if (x == arr[mid]) {
            console.log(`=> Found ${x} at position ${mid}`);
            return mid
        } else if (x > arr[mid]) {
            left = mid+1
        } else {
            right = mid-1
        }

        console.log(left, right)

    }
    console.log(`=> Not found ${x}`);
    return -1
}

search([1, 2, 3, 5, 7, 9, 13, 88], 6)