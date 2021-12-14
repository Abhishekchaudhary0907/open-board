  

let iX,iY,fX,fY;



        // console.log(canvasBoard.getBoundingClientRect());
         let boardTop = canvasBoard.getBoundingClientRect().top;
         let boardLeft = canvasBoard.getBoundingClientRect().left;
 
         let drawingMode = false;
         body.addEventListener("mousedown", function(e){
             // alert("mouse is down");
             // let xPos = e.clientX;
             // let yPos = e.clientY;
             // console.log("starting point "+xPos+" "+yPos);
             iX=e.clientX;
             iY=e.clientY - boardTop;
             if(cTool=="pencil" || cTool=="eraser"){
 
                 drawingMode = true;
                 tool.beginPath();
             }
         })
 
         body.addEventListener("mousemove", function(e){
             if(cTool=="pencil" || cTool=="eraser"){
 
                 if(drawingMode==false){
                     return;
                 }
                 fX=e.clientX;
                 fY=e.clientY-boardTop;
     
                 tool.moveTo(iX,iY);
                 tool.lineTo(fX,fY);
                 tool.stroke();
                 iX=fX;
                 iY=fY;
             }
 
         })
 
         body.addEventListener("mouseup", function(e){
             if(cTool=="pencil" || cTool=="eraser"){
 
                 drawingMode=false;
             }else if(cTool=="rect"){
                 fX=e.clientX;
                 fY=e.clientY-boardTop;
                 tool.strokeRect(iX,iY,fX-iX,fY-iY);
             }else if(cTool=="line"){
                 fX=e.clientX;
                 fY=e.clientY-boardTop;
                 tool.beginPath();
                 tool.moveTo(iX,iY);
                 tool.lineTo(fX,fY);
                 tool.stroke();
             }
         })     