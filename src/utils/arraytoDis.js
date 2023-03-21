// 关键字key为键
export function arrayToDictionary(array, key) {
    return array.reduce((acc, item) => {
        acc[item[key]] = item;
        return acc;
    }, {});
}
// 假设原始数组名为 以 下标为键
export function arraytoDics( arr){
    return arr.forEach((obj, i) => {
        arr[i] = obj;
    });
}
