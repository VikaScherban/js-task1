// Task 1 "Merge sort"
console.log("Task 1 'Merge sort'");
const array = [];

function ArrayGenerator(n, minValue, maxValue){
    for (let el = 0; el <= n; el++) {
        array.push(Math.floor(Math.random()*maxValue + minValue));
    }
}

// Addition function
function Merge(a, begin, mid, end) {
    let j = mid + 1;
    let h = begin;
    let i = 0;
    let newArray = new Array(end - begin + 1);

    while (h <= mid && j <= end) {
        if (a[h] <= a[j]) {
            newArray[i] = a[h];
            h++;
        } else {
            newArray[i] = a[j];
            j++;
        }
        i++;
    }
    if (h > mid) {
        for(let k = j; k <= end; k++) {
            newArray[i] = a[k];
            i++;
        }
    } else {
        for(let k = h; k <= mid; k++) {
            newArray[i] = a[k];
            i++;
        }
    }

    for (let k = 0; k <= end - begin; k++) a[k+begin] = newArray[k];

    return a;
}

// Main sort function
function MergeSort(arr) {
    function merge_sort(a, begin, end) {
        if(begin < end) {
            const mid = Math.floor((begin + end)/2);
            merge_sort(a, begin, mid);
            merge_sort(a, mid+1, end);
            Merge(a, begin, mid, end);
        }
    }
    const n = arr.length;
    merge_sort(arr, 0, n-1);
    return arr;
}

ArrayGenerator(10, 10,100);
console.log("Array before sort: ", array.toString());
MergeSort(array);
console.log("Array after sort: ", array.toString());
