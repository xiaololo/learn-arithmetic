const a={val:'a'}
const b={val:'b'}
const c={val:'c'}
const d={val:'d'}
a.next=b
b.next=c
c.next=d

//遍历 链表

let p=a
while(p){
    console.log(p.val)
    p=p.next
}
//a b c d 

// 插入 e
const e={val:'e'}
c.next=e
e.next=d

//删除 e
c.next=d