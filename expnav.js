document.getElementById("navcont").addEventListener("click", function(){
    const expand=this;
    const reduce=document.getElementById("proj");
    const reduce1=document.getElementById("proj1");
    const reduce2=document.getElementById("proj2");
    const reduce3=document.getElementById("proj3");
    
    if(expand.style.width==="50px"){
        expand.style.width="100px";
        expand.style.animationName="size";
        expand.style.animationDuration="0.5s";
        reduce.style.left="140px";
        reduce1.style.left="140px";
        reduce2.style.left="140px";
        reduce3.style.left="140px";
        
    }
    else{
        expand.style.width="50px";
        reduce.style.left="90px";
        reduce1.style.left="90px";
        reduce2.style.left="90px";
        reduce3.style.left="90px";
        
    }
});