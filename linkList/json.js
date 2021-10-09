const json={
    a:{b:{c:1}},
    d:{e:2}
}
const path=['a','b']
let p=json;
path.forEach(k=>{
    p=p[k]
})
console.log(p)

// 时间复杂度 O(n)
// 空间复杂度 O(1)