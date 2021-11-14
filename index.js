function binarySplit(arr, firstValue, seconValue) {
    var low = 0, high = arr.length - 1, mid, firstIndex, secondIndex;
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (arr[mid] == firstValue) { firstIndex = mid; break }
        else if (arr[low] == firstValue) { firstIndex = low; break }
        else if (arr[high] == firstValue) { firstIndex = high; break }
        else if (arr[mid] < firstValue) low = mid + 1;
        else high = mid - 1;
    }
    if (!firstIndex) {
        if (high == -1) {
            firstIndex = 0
        } else if (low == arr.length) {
            firstIndex = arr.length
        } else {
            firstIndex = low
        }
    }
    low = 0, high = arr.length - 1
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (arr[mid] == seconValue) { secondIndex = mid + 1; break }
        else if (arr[low] == seconValue) { secondIndex = low + 1; break }
        else if (arr[high] == seconValue) { secondIndex = high + 1; break }
        else if (arr[mid] < seconValue) low = mid + 1;
        else high = mid - 1;
    }
    if (!secondIndex) {
        if (high == -1) {
            secondIndex = 0
        } else if (low == arr.length) {
            secondIndex = arr.length
        } else {
            secondIndex = low
        }
    }
    return [firstIndex, secondIndex]
}
function binaryDelete(Arr, valueToDelete) {
    var low = 0, high = Arr.length - 1, mid;
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (Arr[mid] == valueToDelete) { Arr.splice(mid, 1); return Arr }
        else if (Arr[low] == valueToDelete) { Arr.splice(low, 1); return Arr }
        else if (Arr[high] == valueToDelete) { Arr.splice(high, 1); return Arr }
        else if (Arr[mid] < valueToDelete) low = mid + 1;
        else high = mid - 1;
    }

    return "No match"
}
function binarySearch(Arr, valueToSearch) {
    var low = 0, high = Arr.length - 1, mid;
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (Arr[mid] == valueToSearch) return mid
        else if (Arr[low] == valueToSearch) return low
        else if (Arr[high] == valueToSearch) return high
        else if (Arr[mid] < valueToSearch) low = mid + 1;
        else high = mid - 1;
    }

    return "No match"
}
function binaryInsert(Arr, valueToInsert) {
    var low = 0, high = Arr.length - 1, mid;
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (Arr[mid] == valueToInsert) return Arr = Arr.slice(0, mid).concat(valueToInsert).concat(Arr.slice(mid, Arr.length));
        else if (Arr[low] == valueToInsert) return Arr = Arr.slice(0, low).concat(valueToInsert).concat(Arr.slice(low, Arr.length));
        else if (Arr[high] == valueToInsert) return Arr = Arr.slice(0, high).concat(valueToInsert).concat(Arr.slice(high, Arr.length));
        else if (Arr[mid] < valueToInsert) low = mid + 1;
        else high = mid - 1;
    }
    if (high == -1) { Arr.unshift(valueToInsert) }
    else if (low == Arr.length) { Arr.push(valueToInsert) }
    else {
        Arr = Arr.slice(0, low).concat(valueToInsert).concat(Arr.slice(low, Arr.length))
    }
    return Arr
}

module.exports = {
    binarySplit,
    binarySearch,
    binaryDelete,
    binaryInsert
};