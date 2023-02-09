let adding = document.getElementById("adding");
adding.addEventListener('click', function () {
 
  document.getElementById("addplace").style.visibility = "visible";
document.getElementById("addevent").style.visibility = "hidden";
})
let closenew = document.getElementById('closenew');
closenew.addEventListener('click', function () {
  
  document.getElementById("addplace").style.visibility = "hidden";
})

//Adding places ----------------------------------------------------------------------------

let input = document.getElementById('inputnew');
let addnewbtn = document.getElementById('addnewbtn');
 


  function praveen() {
  

    if (input.value.length === 0) {
      
      alert("please add your adventure");
    }
    else {

      let list = document.getElementById("list");
 
      let li = document.createElement('li');
  
      li.innerHTML = `<div class="cardbody col-3 offset-2">
  
  
       <div class="newcard" id="newcard"> <span class="cardname">${input.value}</span><hr style="margin-top: 30px">
       <ol
          type="1"
          id="eventlist"
          class="list-group-events"
          style="color: black;
          font-size:x-large;
          fontt-style:italic;"
           ></ol>
           
           <button class="btn btn1"  id="events" >Add Events</button>
             <button class="btn btn2 del" id="del">delete Card</button>

                 </div>
      </div>` ;

      li.className = 'list-group-item';
 
      list.appendChild(li);


    //deleting the whole adventure----------------------------------------------------------------------
      let btndel = document.querySelectorAll('.del');
      for(let i=0;i<btndel.length;i++){
        btndel[i].onclick = function () {
          
          this.parentNode.remove();
          
        }
  
      }

      input.value = "";
  document.getElementById("addplace").style.visibility = "hidden";


    }

    
    //-------------------------####################################################--------------------------------------------------------------


//adding new events using addbutton in the card---------------------------------------------
    var addevent = document.getElementsByClassName("btn1");
    for (let i = 0; i < addevent.length; i++)
      {
     
        addevent[i].addEventListener('click', function () {
          
          document.getElementById("addplace").style.visibility = "hidden";
          document.getElementById("addevent").style.visibility = "visible";

        })
        let closeevent = document.getElementById('closeevent');
        closeevent.addEventListener('click', function () {
  
          document.getElementById("addevent").style.visibility = "hidden";
        })
      }
    }



//Adding list inside the crad------------------------------------------------------------------------
var inputevent = document.getElementById('inputevent');
 
function events() {


   var list = document.getElementById('eventlist');
     var li = document.createElement('li');

  let listnum = list.childElementCount;
  
  if (inputevent.value.length === 0) {
    alert("please add your event");
  }
  else if(listnum<=5) {
    console.log(listnum);
    li.innerHTML = inputevent.value + `<button class="done"  style="background-color:red; margin-left:10px;">Done</button>`;
    list.className = "list-group-events";
    list.appendChild(li);
  }
  
  let done = document.getElementsByClassName("done");
  for (let i = 0; i < done.length; i++) {
    done[i].addEventListener('click', function () {
      li.style.textDecoration = "line-through";
    })
  }
   document.getElementById("addevent").style.visibility = "hidden";
}

  
 
 




