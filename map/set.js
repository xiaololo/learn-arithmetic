//   使用Set对象： new、 add、 delete、 has、 size

let mySet=new Set() 
// add
mySet.add(1)
mySet.add(5)
mySet.add(5)  //{1,5}
mySet.add('str') //{1,5,'str'}
const obj={a:1,b:2} //{1,5,'str',{a:1,b:2}}
mySet.add(obj)
mySet.add({a:1,b:2})////{1,5,'str',{a:1,b:2},{a:1,b:2}}


// has
const has = mySet.has(5)//true

// delete
mySet.delete(5)



// 迭代Set: 多种方法迭代，

for (const item of mySet) console.log(item)
// 1 str { a: 1, b: 2 } { a: 1, b: 2 }

// keys()： 返回键名的遍历器
// values()： 返回键值的遍历器
// entries()： 返回键值对的遍历器
// forEach()： 使用回调函数遍历每个成员
// for... of ：可以直接遍历每个成员

// console.log(s.keys()) // SetIterator {"hello", "goodbye"}
// console.log(s.values()) // SetIterator {"hello", "goodbye"}
// console.log(s.entries()) // SetIterator {"hello" => "hello", "goodbye" => "goodbye"}
// s.forEach(item => {
//     console.log(item) // hello // goodbye
// })

// for (let item of s) {
//     console.log(item)
// }

// for (let item of s.keys()) {
//     console.log(item)
// }

// for (let item of s.values()) {
//     console.log(item)
// }

// for (let item of s.entries()) {
//     console.log(item[0], item[1])
// }


//  set与Array互转
// set->Array
// const myArr = [...mySet] 
const myArr2 = Array.from(mySet)

// Array -> set
const mySet2 =new Set([1,2,4])


//  求交集 / 差集
// 交集
let s1 = new Set(arr1)
let s2 = new Set(arr2)
let result = new Set(arr1.filter(item => s2.has(item)))
// 差集
let arr3 = new Set(arr1.filter(item => !s2.has(item)))
let arr4 = new Set(arr2.filter(item => !s1.has(item)))
const result = [...arr3, ...arr4]


