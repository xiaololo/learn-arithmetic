//基本使用
// const m=new Map();

// // 增

// m.set('a','aa');
// m.set('b','bb');

// //删
// m.delete('b')
// // m.clear(); //删除所有数据

// //改
// m.set('b', 'bbb');

// // 查
// m.get('a')


// var twoSum = function (nums, target) {
//     const map = new Map()
//     for (let i = 0; i < nums.length; i++) {
//         var n = nums[i]
//         var n2 = target - n
//         if (map.has(n2)) {
//             const res = [map.get(n2),i]
//             return res
//         } else {
//             map.set(nums[i], i)
//         }
//     }
// };

// console.log(twoSum([2, 7, 1, 8, 0], 9))


var lengthOfLongestSubstring = function (s) {
    let l = 0
    let res = 0
    const map = new Map()
    for (var r = 0; r < s.length; r++) {
        if (map.has(s[r]) && map.get(s[r]) >= l) {
            l = map.get(s[r]) + 1;
        }
        res = Math.max(res, r - l + 1)
        map.set(s[r], r)
    }
    return res
};
console.log(lengthOfLongestSubstring("abcabcbb"))