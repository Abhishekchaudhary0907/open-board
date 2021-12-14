let pencilSize=5;
let eraserSize=5;
let rectSize=5;
let lineSize=5;

        // this line give you tool to draw on canvas
        let tool = canvasBoard.getContext("2d");
        tool.strokeStyle="lightpink";

        pencil.addEventListener("click",function(e){
           
           if(cTool=="pencil"){
               // if it is pencil then we need to do display flex// means it clicked one time already
             options[0].style.display="flex";
           }else{
               // agr pencil nhi hai to phle pencil banao// means its fist click
               // make cTool pencil and all display as none as well as
               cTool = "pencil";
               tool.strokeStyle="lightpink";
               tool.lineWidth=pencilSize;
               for(let i=0; i<options.length; i++){
                   options[i].style.display="none";
               }
           }
          
       })

       eraser.addEventListener("click",function(e){
           
           if(cTool=="eraser"){
               // if it is pencil then we need to do display flex// means it clicked one time already
               options[1].style.display="flex";
           }else{
               // agr pencil nhi hai to phle pencil banao// means its fist click
               // make cTool pencil and all display as none as well as
               cTool = "eraser";
               tool.strokeStyle="white";
               tool.lineWidth=eraserSize;
               for(let i=0; i<options.length; i++){
                   options[i].style.display="none";
               }
           }
       })

       rect.addEventListener("click",function(e){
           if(cTool=="rect"){
               // if it is pencil then we need to do display flex// means it clicked one time already
               options[2].style.display="flex";
           }else{
               // agr pencil nhi hai to phle pencil banao// means its fist click
               // make cTool pencil and all display as none as well as
               cTool = "rect";
               tool.strokeStyle="lightpink";
               tool.lineWidth=rectSize;
               for(let i=0; i<options.length; i++){
                   options[i].style.display="none";
               }
           }
       })

       line.addEventListener("click",function(e){
          
           if(cTool=="line"){
               // if it is pencil then we need to do display flex// means it clicked one time already
               options[3].style.display="flex";
           }else{
               // agr pencil nhi hai to phle pencil banao// means its fist click
               // make cTool pencil and all display as none as well as
               cTool = "line";
               tool.strokeStyle="lightpink";
               tool.lineWidth=lineSize;
               for(let i=0; i<options.length; i++){
                   options[i].style.display="none";
               }
           }
       })

       redPick.addEventListener("click", function(){
           tool.strokeStyle = "pink";

        })

        greenPick.addEventListener("click", function(){

            tool.strokeStyle = "green";
        
        
        })
        
        bluePick.addEventListener("click", function(){
        
        tool.strokeStyle = "blue";
        })

options[0].addEventListener("click", function(e){
            // console.log(e.target);// specifc wala dega
            // console.log(e.currentTarget);// over all parent sahit dega
            let sizeoptions=["size1","size2","size3","size4"];
            let allClasses=e.target.classList;
            let firstClass = allClasses[0];
            console.log(firstClass);

            let isInclude = sizeoptions.includes(firstClass);
            
            if(isInclude){
                if(firstClass=="size1"){
                    pencilSize=5

                }else if(firstClass=="size2"){
                    pencilSize=10;
                }else if(firstClass=="size3"){
                    pencilSize=15;
                }else if(firstClass=="size4"){
                    pencilSize=20;
                }
            }
            tool.lineWidth=pencilSize;

})

options[1].addEventListener("click", function(e){
            // console.log(e.target);// specifc wala dega
            // console.log(e.currentTarget);// over all parent sahit dega
            let sizeoptions=["size1","size2","size3","size4"];
            let allClasses=e.target.classList;
            let firstClass = allClasses[0];
            console.log(firstClass);

            let isInclude = sizeoptions.includes(firstClass);
            
            if(isInclude){
                if(firstClass=="size1"){
                    eraserSize=5

                }else if(firstClass=="size2"){
                    eraserSize=10;
                }else if(firstClass=="size3"){
                    eraserSize=15;
                }else if(firstClass=="size4"){
                    eraserSize=20;
                }
            }
            tool.lineWidth=eraserSize;
})

options[2].addEventListener("click", function(e){
            // console.log(e.target);// specifc wala dega
            // console.log(e.currentTarget);// over all parent sahit dega
            let sizeoptions=["size1","size2","size3","size4"];
            let allClasses=e.target.classList;
            let firstClass = allClasses[0];
            console.log(firstClass);

            let isInclude = sizeoptions.includes(firstClass);
            
            if(isInclude){
                if(firstClass=="size1"){
                    rectSize=5
                }else if(firstClass=="size2"){
                    rectSize=10;
                }else if(firstClass=="size3"){
                    rectSize=15;
                }else if(firstClass=="size4"){
                    rectSize=20;
                }
            }
            tool.lineWidth=rectSize;

})

options[3].addEventListener("click", function(e){
            // console.log(e.target);// specifc wala dega
            // console.log(e.currentTarget);// over all parent sahit dega
            let sizeoptions=["size1","size2","size3","size4"];
            let allClasses=e.target.classList;
            let firstClass = allClasses[0];
            console.log(firstClass);

            let isInclude = sizeoptions.includes(firstClass);
            
            if(isInclude){
                if(firstClass=="size1"){
                    lineSize=5
                }else if(firstClass=="size2"){
                    lineSize=10;
                }else if(firstClass=="size3"){
                    lineSize=15;
                }else if(firstClass=="size4"){
                    lineSize=20;
                }
            }
            tool.lineWidth=lineSize;

})



let stickeybtn = document.querySelector("#stickey-note");
       
    stickeybtn.addEventListener("click", function(e){
            let body = document.querySelector("body");
            let stickey=document.createElement("div");
            stickey.setAttribute("class","stickey");
            stickey.innerHTML=`<div class="header">
            <div class="min"></div>
            <div class="close"></div>
        </div>
        <textarea class="textarea">
        </textarea>`;
        canvasBoard.appendChild(stickey);
        let isClosed=true;
        let min = stickey.querySelector(".min");
        let close=stickey.querySelector(".close");
        let textarea = stickey.querySelector(".textarea");
        // this  is for minimize
        min.addEventListener("click", function(e){
            if(isClosed==true){

                textarea.style.display="none";
            }else{
                textarea.style.display="block";
            }
            isClosed=!isClosed;
        });

        // this is for closing
        close.addEventListener("click", function(e){
            stickey.remove();
        });
       

        });