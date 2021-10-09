const obj={}
const func =()=>{}
const arr=[]


// Object.prototype.x='xx'
// console.log(obj.x) //xx

const instanceOf=(A,B)=>{
    while (A && B){
        if (A.__proto__ === B.prototype) {
            return true
        }
        A=A.__proto__
    }
    return false
}

// // instanceOf(obj, Object)
// console.log(instanceOf(obj, Array))//false
// console.log(instanceOf(arr, Array)) //true



var foo ={}
F =function(){}
Object.prototype.a='value a'
Function.prototype.b='value b'

console.log(foo.a) // value a
console.log(foo.b) //undefined

console.log(F.a) //value a
console.log(F.b) //value b