var number=[];
    var $=function(id){
      return document.getElementById(id);
    }
function show(){
        var content=" ";
        for(var i=0;i<number.length;i++){
                content+="<li id='"+i+"'style='height:"+number[i]*5+"px;'>"+number[i]+"</li>";
            }
        $("result").innerHTML=content;
}
$("button").addEventListener("click",function(e){
        var target=e.target;
        var input=$("input").value;
        switch(target.id){
            case "leftin":{
                if(input>100||input<10||isNaN(input))  
                alert("请输入10-100之间的数");
                if(number.length<50) {　　　　
                　　number.unshift(input);
                　　show();
                }
                else alert("最多只能输入50个数据！");
                break;
            }
            case "rightin":{
                if(input>100||input<10||isNaN(input)) 
                alert("请输入10-100之间的数");
                if(number.length<50){
                    number.push(input);
                    show();
                }
                else alert("最多只能输入50个数据！");
                break;
            }
            case "leftout":{
                alert(number.shift(number[number.length-1]));
                show();
                break;
            }
            case "rightout":{
                alert(number.pop(number[0]));
                show();
                break;
            }
        }
    })
$("result").addEventListener("click",function(e){
        if(e.target.nodeName!="LI") return;        
        var tar=parseInt(e.target.getAttribute("id"))　　
        number.splice(tar,1);     
        show();
        return number;
    })
$("random").onclick=function(){
        number=[];
           for(var i=0;i<60;i++){
                number[i]=parseInt(Math.random()*90+10);
            }
        show();
        return number;
    }
$("sortdata").onclick=function(){
        var max=0,i=0,j=1;
        time=null;
        time=setInterval(run,5);
        function run(){
            if(i<number.length){
                if(j<number.length){
                    if(number[i]>number[j]){
                        max=number[i];
                        number[i]=number[j];
                        number[j]=max;
                        show();    
                    }
                 j++;
                }
                else{
                    i++;
                    j=i+1;
                }
            }
            else{
                clearInterval(time);
                return;
            }
        }
    }