showtask()
let addinput = document.getElementById("add");
let buttonadd = document.getElementById("buttonadd");
buttonadd.addEventListener("click", function () {
    addinputval = addinput.value
    if(addinputval.trim()!=0){
    let webtask = localStorage.getItem("localtask")
    if (webtask == null) {
        taskobj = [];
    }
    else {
        taskobj = JSON.parse(webtask);
    }
    taskobj.push(addinputval);
    localStorage.setItem("localtask", JSON.stringify(taskobj));
    addinput.value=""
    showtask();}
}
)
function showtask() {
    let webtask = localStorage.getItem("localtask")
    if (webtask == null) {
        taskobj = [];
    }
    else {
        taskobj = JSON.parse(webtask);
    }
    let html = '';
    let addtask = document.getElementById("addtask");
    taskobj.forEach((item,index) => {
        html +=
            `<tr>
       <th>${index + 1}</th>
       <td>${item}</td>
       <td><button type="button" onclick="taskbtn(${index})" class="btn btn-primary but" >Edit</button></td>
       <td><button type="button"onclick="dltbtn(${index})" class="btn btn-danger but" >Delete</button></td>
   </tr>`
     })
    addtask.innerHTML = html;
}
function taskbtn(index){
    let save = document.getElementById("save");
    let buttonadd = document.getElementById("buttonadd");
    let buttonsave = document.getElementById("buttonsave");
//    document.getElementById("buttonadd").innerHTML="Save task"
    save.value = index
    let webtask = localStorage.getItem("localtask")
    let taskobj = JSON.parse(webtask)
    addinput.value = taskobj[index]
    buttonadd.style.display="none";
    buttonsave.style.display="block"
}


let buttonsave = document.getElementById("buttonsave");
buttonsave.addEventListener("click",function(){
    let buttonadd = document.getElementById("buttonadd");
    let webtask = localStorage.getItem("localtask")
        let taskobj = JSON.parse(webtask)
        console.log("task",taskobj)
        let save = document.getElementById("save").value;
        console.log("save",save)
      taskobj[save]=addinput.value
      buttonadd.style.display="block";
      buttonsave.style.display="none"
      localStorage.setItem("localtask", JSON.stringify(taskobj));
      addinput.value=""
     showtask()
      

})


function dltbtn(index){
    let buttonadd = document.getElementById("buttonadd");
    let buttonsave = document.getElementById("buttonsave");
    let webtask = localStorage.getItem("localtask")
    let taskobj = JSON.parse(webtask)
    taskobj.splice(index,1)
    localStorage.setItem("localtask", JSON.stringify(taskobj));
    buttonsave.style.display="none"
    buttonadd.style.display="block"
    addinput.value=""
    showtask()
}
let buttondlt = document.getElementById("buttondlt")
buttondlt.addEventListener("click",function(){
    let buttonadd = document.getElementById("buttonadd");
    let buttonsave = document.getElementById("buttonsave");
    let webtask = localStorage.getItem("localtask")
    let taskobj = JSON.parse(webtask)
    if (webtask == null) {
        taskobj = [];
    }
    else {
        taskobj = JSON.parse(webtask);
        taskobj=[]
    }
    buttonsave.style.display="none"
    buttonadd.style.display="block"

    localStorage.setItem("localtask", JSON.stringify(taskobj));
    addinput.value=""
    showtask()
})