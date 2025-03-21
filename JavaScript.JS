let turn_count=1
let onss=0
let mas1=0;let mas2=0;let mas3=0;let mas4=0;let mas5=0;let mas6=0;let mas7=0;let mas8=0;let mas9=0;
let masrook1=0;let masrook2=0;let masrook3=0;let masrook4=0;let masrook5=0;let masrook6=0;let masrook7=0;let masrook8=0;let masrook9=0;
let mas_win_ture=0
let views=1
const canvas = document.getElementById("masoutput");
const ctx = canvas.getContext("2d");

function canvas_set_arc(arc_x,arc_y,r,orb,stroke_size){
ctx.beginPath();
ctx.arc(arc_x, arc_y, r, orb, Math.PI * 2, false);
ctx.strokeStyle = "hsl(218, 76%, 84%,1)";
ctx.lineWidth=stroke_size;
ctx.stroke();
ctx.closePath();
}
function canvas_set_line(start_x,start_y,end_x,end_y,stroke_size){
    ctx.beginPath();
    ctx.lineWidth=stroke_size;
    ctx.strokeStyle="hsl(218,76%,84%,1)";
    ctx.moveTo(start_x,start_y);
    ctx.lineTo(end_x,end_y);
    ctx.stroke();
    ctx.moveTo(start_x+(end_x-start_x),start_y);
    ctx.lineTo(end_x-(end_x-start_x),end_y);
    ctx.stroke();
    ctx.closePath();
}
function masrooks(){masrook1=1;masrook2=1;masrook3=1;masrook4=1;masrook5=1;masrook6=1;masrook7=1;masrook8=1;masrook9=1}
function winner(){
    console.log("ooooo");
    if(mas1+mas2+mas3==3){masrooks();document.getElementById("maswinner").innerHTML="マルの勝利！";mas_win_ture=1;console.log("Win");} else if(mas1+mas2+mas3==15){masrooks();document.getElementById("maswinner").innerHTML="バツの勝利！";mas_win_ture=1;console.log("Win");};
    if(mas4+mas5+mas6==3){masrooks();document.getElementById("maswinner").innerHTML="マルの勝利！";mas_win_ture=1;console.log("Win");} else if(mas4+mas5+mas6==15){masrooks();document.getElementById("maswinner").innerHTML="バツの勝利！";mas_win_ture=1;console.log("Win");};
    if(mas7+mas8+mas9==3){masrooks();document.getElementById("maswinner").innerHTML="マルの勝利！";mas_win_ture=1;console.log("Win");} else if(mas7+mas8+mas9==15){masrooks();document.getElementById("maswinner").innerHTML="バツの勝利！";mas_win_ture=1;console.log("Win");};
    if(mas1+mas4+mas7==3){masrooks();document.getElementById("maswinner").innerHTML="マルの勝利！";mas_win_ture=1;console.log("Win");} else if(mas1+mas4+mas7==15){masrooks();document.getElementById("maswinner").innerHTML="バツの勝利！";mas_win_ture=1;console.log("Win");};
    if(mas2+mas5+mas8==3){masrooks();document.getElementById("maswinner").innerHTML="マルの勝利！";mas_win_ture=1;console.log("Win");} else if(mas2+mas5+mas8==15){masrooks();document.getElementById("maswinner").innerHTML="バツの勝利！";mas_win_ture=1;console.log("Win");};
    if(mas3+mas6+mas9==3){masrooks();document.getElementById("maswinner").innerHTML="マルの勝利！";mas_win_ture=1;console.log("Win");} else if(mas3+mas6+mas9==15){masrooks();document.getElementById("maswinner").innerHTML="バツの勝利！";mas_win_ture=1;console.log("Win");};
    if(mas1+mas5+mas9==3){masrooks();document.getElementById("maswinner").innerHTML="マルの勝利！";mas_win_ture=1;console.log("Win");} else if(mas1+mas5+mas9==15){masrooks();document.getElementById("maswinner").innerHTML="バツの勝利！";mas_win_ture=1;console.log("Win");};
    if(mas3+mas5+mas7==3){masrooks();document.getElementById("maswinner").innerHTML="マルの勝利！";mas_win_ture=1;console.log("Win");} else if(mas3+mas5+mas7==15){masrooks();document.getElementById("maswinner").innerHTML="バツの勝利！";mas_win_ture=1;console.log("Win");};
}
function turn_output(){
    if(mas_win_ture==0){
        if(turn_count%2==0){document.getElementById("maswinner").innerHTML="マルのターン!";}else if(turn_count%2==1){document.getElementById("maswinner").innerHTML="バツのターン!"};
        if(masrook1==1&&masrook2==1&&masrook3==1&&masrook4==1&&masrook5==1&&masrook6==1&&masrook7==1&&masrook8==1&&masrook9==1){document.getElementById("maswinner").innerHTML="引き分け!"}
    }
}
//console.log(document.getElementById("masbtn2")!= null);
document.getElementById("masbtn1").style.opacity = onss;
document.getElementById("masbtn2").style.opacity = onss;
document.getElementById("masbtn3").style.opacity = onss;
document.getElementById("masbtn4").style.opacity = onss;
document.getElementById("masbtn5").style.opacity = onss;
document.getElementById("masbtn6").style.opacity = onss;
document.getElementById("masbtn7").style.opacity = onss;
document.getElementById("masbtn8").style.opacity = onss;
document.getElementById("masbtn9").style.opacity = onss;


document.getElementById("masbtn1").addEventListener("click",()=>{if (turn_count%2==0&&masrook1==0){mas1=1;canvas_set_arc(75 ,75 ,55,0,10);masrook1=1;winner();}else if(turn_count%2==1&&masrook1==0){mas1=5;canvas_set_line(20 ,20 ,130,130,10);masrook1=1;winner();}; turn_count++;turn_output();console.log(mas1,turn_count)})
document.getElementById("masbtn2").addEventListener("click",()=>{if (turn_count%2==0&&masrook2==0){mas2=1;canvas_set_arc(225,75 ,55,0,10);masrook2=1;winner();}else if(turn_count%2==1&&masrook2==0){mas2=5;canvas_set_line(170,20 ,280,130,10);masrook2=1;winner();}; turn_count++;turn_output();console.log(mas2,turn_count)})
document.getElementById("masbtn3").addEventListener("click",()=>{if (turn_count%2==0&&masrook3==0){mas3=1;canvas_set_arc(375,75 ,55,0,10);masrook3=1;winner();}else if(turn_count%2==1&&masrook3==0){mas3=5;canvas_set_line(320,20 ,430,130,10);masrook3=1;winner();}; turn_count++;turn_output();console.log(mas3,turn_count)})
document.getElementById("masbtn4").addEventListener("click",()=>{if (turn_count%2==0&&masrook4==0){mas4=1;canvas_set_arc(75 ,230,55,0,10);masrook4=1;winner();}else if(turn_count%2==1&&masrook4==0){mas4=5;canvas_set_line(20 ,180,130,290,10);masrook4=1;winner();}; turn_count++;turn_output();console.log(mas4,turn_count)})
document.getElementById("masbtn5").addEventListener("click",()=>{if (turn_count%2==0&&masrook5==0){mas5=1;canvas_set_arc(225,230,55,0,10);masrook5=1;winner();}else if(turn_count%2==1&&masrook5==0){mas5=5;canvas_set_line(170,180,280,290,10);masrook5=1;winner();}; turn_count++;turn_output();console.log(mas5,turn_count)})
document.getElementById("masbtn6").addEventListener("click",()=>{if (turn_count%2==0&&masrook6==0){mas6=1;canvas_set_arc(375,230,55,0,10);masrook6=1;winner();}else if(turn_count%2==1&&masrook6==0){mas6=5;canvas_set_line(320,180,430,290,10);masrook6=1;winner();}; turn_count++;turn_output();console.log(mas6,turn_count)})
document.getElementById("masbtn7").addEventListener("click",()=>{if (turn_count%2==0&&masrook7==0){mas7=1;canvas_set_arc(75 ,390,55,0,10);masrook7=1;winner();}else if(turn_count%2==1&&masrook7==0){mas7=5;canvas_set_line(20 ,335,130,445,10);masrook7=1;winner();}; turn_count++;turn_output();console.log(mas7,turn_count)})
document.getElementById("masbtn8").addEventListener("click",()=>{if (turn_count%2==0&&masrook8==0){mas8=1;canvas_set_arc(225,390,55,0,10);masrook8=1;winner();}else if(turn_count%2==1&&masrook8==0){mas8=5;canvas_set_line(170,335,280,445,10);masrook8=1;winner();}; turn_count++;turn_output();console.log(mas8,turn_count)})
document.getElementById("masbtn9").addEventListener("click",()=>{if (turn_count%2==0&&masrook9==0){mas9=1;canvas_set_arc(375,390,55,0,10);masrook9=1;winner();}else if(turn_count%2==1&&masrook9==0){mas9=5;canvas_set_line(320,335,430,445,10);masrook9=1;winner();}; turn_count++;turn_output();console.log(mas9,turn_count)})
document.getElementById("maswinner").innerHTML="バツのターン!"
