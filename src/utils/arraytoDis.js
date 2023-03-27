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
// 根据number返回所需要的列表数
export function getNumberValue(number) {
    if (number <= 10) {
        return 1;
    } else if (number <= 20) {
        return 2;
    } else {
        const quotient = Math.round(number / 10); // 获取商
        const remainder = number % 10; // 获取余数
        return quotient + (remainder > 0 ? 1 : 0); // 合并为最终结果
    }
}