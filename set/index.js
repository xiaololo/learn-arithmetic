//基本使用

// 去重
const arr=[1,1,2,3,2,4]
const set1 = new Set(arr) //Set { 1, 2, 3, 4 }
arr2 = [...set1] // 集合转化为数组 [ 1, 2, 3, 4 ] 


// 问题延伸：set(集合)转化为Array(数组)方法：
// 1、Array.from() 方法
// Array.from(arrayLike object);
// 2、使用扩展运算符(三点运算符)“…”
// const set = new Set(['HELLO', 'JS']);
// console.log(set);
// const array = [...set];


//判断元素是否在集合中
const set2 =new Set(arr)
console.log(set2.has(1)) //true
console.log(set2.has(7))//false

//求交集
const seta=new Set([2,3])
const setb = new Set([1, 2, 3, 4])
// const arr3=[...seta].filter(item => setb.has(item))
const arr3=[...seta].filter((item) => {return setb.has(item)})
const setc = new Set(arr3)
console.log(setc) //Set { 2, 3 }

