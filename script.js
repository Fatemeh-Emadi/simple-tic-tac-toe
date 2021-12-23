var cells=document.getElementsByClassName("cells");
var score_x=document.getElementById("score-x");
var score_x_counter=0;
var score_o=document.getElementById("score-o");
var score_o_counter=0;
var draw=document.getElementById("draw");
var draw_counter=0;
var btn2=document.getElementById("btn2");
var result=document.getElementById("result").innerHTML="result";


//UI
var buttons= [[cells[0],cells[1],cells[2]],
            [cells[3],cells[4],cells[5]],
            [cells[6],cells[7],cells[8]]];
            
//Logic - Back End     
var flags=[[null,null,null],
            [null,null,null],
            [null,null,null]];


var ply="X";
var choice;
function show_index(x,y){
    
    if (flags[x][y]==null)
    {
        
        if(ply=="X"){
            
            flags[x][y]="X";
            buttons[x][y].innerHTML="X";
            buttons[x][y].classList.add("X");
            
            ply="O";
        }
         else if(ply=="O"){
            
            flags[x][y]="O";
            buttons[x][y].innerHTML="O";
            buttons[x][y].classList.add("O");
            ply="X";
        }
    }
    else{
        alert("play carefully ");
    }
    check_game();
   
    
}
var winx=0;
//var wino=0;

var active=true;
function check_game(){
   if(flags[0][0]=="X" && flags [0][1]=="X" && flags [0][2]=="X"){
   
        document.getElementById("result").innerHTML="X Won";
        score_x_counter++;
        score_x.innerHTML=score_x_counter;
        winx++;
       
    }
    


    if(flags[1][0]=="X" && flags [1][1]=="X" && flags [1][2]=="X"){
       // alert("X won");
       document.getElementById("result").innerHTML="X Won";
        score_x_counter++;
        score_x.innerHTML=score_x_counter;
        winx++;
        
    }
   
    
    if(flags[2][0]=="X" && flags [2][1]=="X" && flags [2][2]=="X"){
       // alert("X won");
       document.getElementById("result").innerHTML="X Won";
        score_x_counter++;
        score_x.innerHTML=score_x_counter;
        winx++;
        
    }
    
  
    if(flags[0][0]=="X" && flags [1][0]=="X" && flags [2][0]=="X"){
       // alert("X won");
       document.getElementById("result").innerHTML="X Won";
        score_x_counter++;
        score_x.innerHTML=score_x_counter;
        winx++;
      
    }
    
    
    if(flags[0][1]=="X" && flags [1][1]=="X" && flags [2][1]=="X"){
        document.getElementById("result").innerHTML="X Won";
        score_x_counter++;
        score_x.innerHTML=score_x_counter;
        winx++;
    }
    
   
    if(flags[0][2]=="X" && flags [1][2]=="X" && flags [2][2]=="X"){
       // alert("X won");
       document.getElementById("result").innerHTML="X Won";
        score_x_counter++;
        score_x.innerHTML=score_x_counter;
        winx++;
       
    }
    
   
    if(flags[0][0]=="X" && flags [1][1]=="X" && flags [2][2]=="X"){
        document.getElementById("result").innerHTML="X Won";
        score_x_counter++;
        score_x.innerHTML=score_x_counter;
        winx++;
        
    }
    
   
    if(flags[0][2]=="X" && flags [1][1]=="X" && flags [2][0]=="X"){
        document.getElementById("result").innerHTML="X Won";
        score_x_counter++;
        score_x.innerHTML=score_x_counter;
        winx++;
        
    }
   
  
//------------------------------------------------------------------------------------------
if(flags[0][0]=="O" && flags [0][1]=="O" && flags [0][2]=="O"){
    document.getElementById("result").innerHTML="O Won";
    //alert("O won");
    score_o_counter++;
    score_o.innerHTML=score_o_counter;
    wino++;
    
   
}




if(flags[1][0]=="O" && flags [1][1]=="O" && flags [1][2]=="O"){
    document.getElementById("result").innerHTML="O Won";
    score_o_counter++;
    score_o.innerHTML=score_o_counter;
    wino++;
    
    
}


if(flags[2][0]=="O" && flags [2][1]=="O" && flags [2][2]=="O"){
    document.getElementById("result").innerHTML="O Won";
    score_o_counter++;
    score_o.innerHTML=score_o_counter;
    wino++;
   
}


if(flags[0][0]=="O" && flags [1][0]=="O" && flags [2][0]=="O"){
    document.getElementById("result").innerHTML="O Won";
   score_o_counter++;
    score_o.innerHTML=score_o_counter;
    wino++;
   
}


if(flags[0][1]=="O" && flags [1][1]=="O" && flags [2][1]=="O"){
    document.getElementById("result").innerHTML="O Won";
  score_o_counter++;
    score_o.innerHTML=score_o_counter;
    wino++;
  
}


if(flags[0][2]=="O" && flags [1][2]=="O" && flags [2][2]=="O"){
    document.getElementById("result").innerHTML="O Won";
   score_o_counter++;
   score_o.innerHTML=score_o_counter;
    wino++;
    
}


if(flags[0][0]=="O" && flags [1][1]=="O" && flags [2][2]=="O"){
    document.getElementById("result").innerHTML="O Won";
   score_o_counter++;
   score_o.innerHTML=score_o_counter;
    wino++;
  
}


if(flags[0][2]=="O" && flags [1][1]=="O" && flags [2][0]=="O"){
    document.getElementById("result").innerHTML="O Won";
    score_o_counter++;
    score_o.innerHTML=score_o_counter;
 
}

if((flags[0][0]=="X" || flags[0][0]=="O") && (flags[0][1]=="X" || flags[0][1]=="O")
&& (flags[0][2]=="X" || flags[0][2]=="O" ) && (flags[1][0]=="X" || flags[1][0]=="O") 
&& (flags[1][1]=="X" || flags[1][1]=="O") && (flags[1][2]=="X" || flags[1][2]=="O") 
&& (flags[2][0]=="X" || flags[2][0]=="O") && (flags[2][1]=="X" || flags[2][1]=="O") 
&& (flags[2][2]=="X" || flags[2][2]=="O")  ){
    document.getElementById("result").innerHTML="Match Draw";
    draw_counter++;
    draw.innerHTML=draw_counter;
}


}
//function draw(){}

function restart(){
    //active=true;
 
    
  for(var i=0;i<8;i++){
      for(var j=0;j<8;j++){
          if(flags[i][j]=="X" | flags[i][j]=="O"){
        if(ply=="X" | ply=="O"){
            
            buttons[i][j].innerHTML="";
            buttons[i][j].classList.remove("X");   
            buttons[i][j].classList.remove("O");       
            flags[i][j]=null;
            
        }
    }  

  }
}


         }     //document.querySelectorAll('.cells').forEach(cells => cells.innerHTML=" ");

   
  



    




