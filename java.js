
 function removeItem(){
            var parent=document.getElementById("ITEM") ;
       var child=document.getElementById("item1");
       parent.removeChild(child);
       
                  
        } 
        function removeItem2(){
            var parent=document.getElementById("ITEM") ;
       var child2=document.getElementById("item2");
       parent.removeChild(child2);
       
                  
        } 
        function removeItem3(){
            var parent=document.getElementById("ITEM") ;
       var child3=document.getElementById("item3");
       parent.removeChild(child3);
       
                  
        } 

       


        /* let remove=document.getElementsByClassName("delete");
        let parent=document.getElementsByClassName("items");
        let child=document.getElementsByClassName("Item");
        for(let j=0;j<remove.length;j++){
            let rem=remove[j];
            rem.addEventListener('click',function(){
                for(let i=0;i<child.length;i++)
                {
                    parent.removeChild(child[i]);
                }


            })
        }*/


/*function total1(){
    var n1 = document.getElementById("a1").value*1379.00;
    document.getElementById("p1").innerHTML=n1;
}*/



        let plusBt=document.getElementsByClassName("plus-btn");
        for(let i=0;i<plusBt.length;i++){
            let plus=plusBt[i];

            plus.addEventListener('click',function(){
                plus.previousElementSibling.value++;

                /* let prix=document.getElementById("P").innerText;
                let tot=val*prix;
                document.getElementById("P").innerHTML=tot;

                
                /*let prix=document.getElementById("P").innerText;

                let v=document.getElementById("a").value;
                return (prix*v);*/
                Price1();
                Price2();
                Price3();
                total();
            })

        } 

        function Price1(){
            
            
        let price=document.getElementById("a").value*1379.00;
        document.getElementById("P1").innerHTML=price;

        }
        function Price2(){
            
            
            let price2=document.getElementById("a2").value*176.80;
            document.getElementById("P2").innerHTML=price2;
    
            }
            function Price3(){
            
            
                let price3=document.getElementById("a3").value*249.00;
                document.getElementById("P3").innerHTML=price3;
        
                }

      

        let moinsBt=document.getElementsByClassName("minus-btn");
        for(let i=0;i<moinsBt.length;i++){
        let moins=moinsBt[i];
        moins.addEventListener('click',function(){
            if(moins.nextElementSibling.value==0){
                moins.nextElementSibling.value=0;}
                else {
           
           moins.nextElementSibling.value--;}
                
                Price1();
                Price2();
                Price3();
            total();}
        )}

        function total(){
           
            let prix1=document.getElementById("P1").innerHTML;
            let prix2=document.getElementById("P2").innerHTML;
            let prix3=document.getElementById("P3").innerHTML;
            

            
               let total= document.getElementById("finalPrice");
               total.value=parseInt(prix1)+parseInt(prix2)+parseInt(prix3);

            
            
        
        }
      

/* let heart=document.getElementsByClassName("like");
for(let i=0;i<heart.length;i++){
    let heart1=heart[i];
    heart1.addEventListener('click',function(){
        var h=document.getElementById("heart");

            h.style.color="red";
        
      
    })
} */

function RedHeart(){
    var h=document.getElementById("heart");

    if(h.style.color=="red"){
        h.style.color="black";
    }
    else { h.style.color="red";}
}

function RedHeart1(){
    var h1=document.getElementById("heart1");
    if(h1.style.color=="red"){
        h1.style.color="black";
    }
    else { h1.style.color="red";}
  
}
function RedHeart2(){
    var h2=document.getElementById("heart2");
    if(h2.style.color=="red"){
        h2.style.color="black";
    }
    else { h2.style.color="red";}
  
}






    


