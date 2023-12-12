// Exercise
const carts = [
    {
        name: 'Product 1',
        price: 1000,
        quantity: 1,
        total: 1000
    },
    {
        name: 'Product 2',
        price: 1500,
        quantity: 2,
        total: 1000
    },
    {
        name: 'Product 3',
        price: 2000,
        quantity: 1
    },
    {
        name: 'Product 4',
        price: 600,
        quantity: 4
    },
    {
        name: 'Product 5',
        price: 500,
        quantity: 3
    },
]

/**
 * 1. Update total for each item total = (price * quantity)
 * 2. Filter products in cart with total >= 2000
 * 3. Show all products with (name, total)
 */

// console.log(carts);


let ex1 = () => {
    console.log("1. Update total for each item: ");
    // arr.map((ele, index, arr))
    carts.map((cart) => cart.total = cart.price * cart.quantity)
    console.log(carts);
}

let ex2 = () => {
    console.log("2. Filter products in cart with total >= 2000 ");
    let cartGt2k = carts.filter((cart) => cart.total >= 2000)
    console.log("kq cau 2: ", cartGt2k)
}

let ex3 = () => {

    console.log("3. Show all products with (name, total) ");
    console.log("kq cau 3")
    // a Vinh
    const getNames = (...cart) => {
        cart.forEach(item => {
            const { name, total } = item;
            console.log(name, total);
        })
    }
    getNames(...carts);
    // Dung
    carts.forEach(cartItem => {
        console.log(`${cartItem.name}: ${cartItem.total}`);
    });
    const grandTotal = carts.reduce((acc, cartItem) => acc + cartItem.total, 0);
    console.log("Grand Total:", grandTotal);
}
// ex1()
// ex2()
// ex3()



function printTriangle(height) {
    for (let i = 1; i <= height; i++) {
        let spaces = ' '.repeat(height - i);
        let stars = '*'.repeat(2 * i - 1);
        console.log(spaces + stars);
    }
}
const height = 6;
printTriangle(height);




// Dung

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}
                                        // 0                   9
const array = [9, 7, 5, 6, 4, 8, 3, 2]; 1,2,3,4,5,6,7,8,9,10
const targetIndex1 = binarySearch(array, 3);
const targetIndex2 = binarySearch(array, 8);

console.log(`Index of 3: ${targetIndex1}`);
console.log(`Index of 8: ${targetIndex2}`);