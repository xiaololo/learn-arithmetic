const json={
    a:{b:{c:1}},
    d:[1,2]
}

const dfs=(n,path)=>{
    //当前节点
    console.log(n,path);
    //当前节点children节点
    // console.log(Object.keys(n))
    Object.keys(n).forEach(item=>{
        dfs(n[item],path.concat(item));
    })
    
}
dfs(json,[])
// { a: { b: { c: 1 } }, d: [ 1, 2 ] }  == []
// { b: { c: 1 } }  == [ 'a' ]
// { c: 1 }  == [ 'a', 'b' ]
// 1  == [ 'a', 'b', 'c' ]
// [ 1, 2 ]  == [ 'd' ]
// 1  == [ 'd', '0' ]
// 2  == [ 'd', '1' ]