
const xhr = window.XMLHttpRequest? new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
window.handleJsonpCbList = {
}

const onreadystatechange = (resolve, reject) => {
    if (xhr.readyState==4) {
        if (xhr.status==200) {
            resolve(xhr.responseText)
            
        } else {
            reject('somthing wrong')
        }
    }
}
const get = (url) =>{
    return new Promise((resolve, reject)=>{
        xhr.onreadystatechange = ()=>{
            onreadystatechange(resolve,reject);
        } 
        xhr.open('get',url);
        xhr.send();
    })
}
const getCallBackName=(function(params) {
    let index = 1;
    return function(resolve, reject) {
        index++;
        let cbName = 'handleJsonData'+ index;
        handleJsonpCbList[cbName] = (data) =>{
            delete handleJsonpCbList[cbName];
            resolve([data,cbName])
        }
        return index;
    }
})()
const jsonp = (url) =>{
    return new Promise((resolve, reject)=>{
        // 创建script标签，设置其属性
        var script = document.createElement('script');
        var cbnIndex = getCallBackName(resolve, reject);
        script.setAttribute('src', url+ "?callback=handleJsonpCbList.handleJsonData" + cbnIndex);
        // 把script标签加入head，此时调用开始
        document.getElementsByTagName('head')[0].appendChild(script);
    }) 
}
function getData(url){
	return new Promise(function(resolve, reject){
		xhr.onreadystatechange = ()=>{
            onreadystatechange(resolve,reject);
        } 
        xhr.open('get',url);
        xhr.send();
        xhr.onreadystatechange = ()=>{
            onreadystatechange(resolve,reject);
        } 
	});
}
const ajax = {
    get:get,
    jsonp:jsonp,
    // post:post
};
export default ajax;