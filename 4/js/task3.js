
window.onload=function(){
    var $=function(id){return document.getElementById(id);}
    var text_box=$("text-box"),
        btn_left_in=$("left-in"),
        btn_right_in=$("right-in"),
        btn_left_out=$("left-out"),
        btn_right_out=$("right-out"),
        content_box=$("content-box"),
        search=$("search");
function insert(dir){
            if(text_box.value==""){
                alert("未输入值");
                text_box.focus();
            }else{
                var mon=text_box.value.split(/[,\s、\r]/);
                for (let i = 0; i < mon.length; i++) {
                    var content_list=document.createElement("li");
                    content_list.innerHTML=mon[i];
                    if (content_box.childNodes.length > 50) {
                        alert("队列元素数量最多为50个！");
                    }else if(dir==="left"){
                        content_box.insertBefore(content_list,content_box.childNodes[0]);
                        text_box.value="";
                    }else if(dir==="right"){
                        content_box.appendChild(content_list);
                        text_box.value="";
                    } 
                } 
            }
        }
function del(dir){
    if (content_box.childNodes.length<=0) {
        alert("没有可以删除的元素");
        return false;
    }else if (dir==="left") {
        alert("删除内容："+content_box.firstChild.innerText);
        content_box.removeChild(content_box.firstChild);
        text_box.value="";
    }else if(dir==="right"){
        alert("删除内容："+content_box.lastChild.innerText);
        content_box.removeChild(content_box.lastChild);
        text_box.value="";
    }else {
        content_box.removeChild(event.target);
    }
}
btn_left_in.addEventListener("click", function(){insert("left")}, false);
btn_right_in.addEventListener("click", function(){insert("right")}, false);
btn_left_out.addEventListener("click", function(){del("left")}, false);
btn_right_out.addEventListener("click", function(){del("right")}, false);                   
search.addEventListener("click",function(e){
            var search_val=$("search_con").value;
            var newArray=[];
            for(let i=0;i<content_box.childNodes.length;i++){
                    newArray.push(content_box.childNodes[i].innerText);
            }
            for (let s = 0; s < newArray.length; s++) {
                if(newArray[s].search(search_val)!==-1){
                    content_box.childNodes[s].className="red";
                }
            }               
        },false);
content_box.addEventListener('click',function(e){
        if(e.target.nodeName.toLowerCase() == 'li'){
            content_box.removeChild(e.target);
        }
    }); 
}