     
     
            // date 

     document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("current-date").textContent = new Date().toDateString();
    });


      // plus mines area 

let taskCount = 6;
let activityCount = 23;

function completeTask(taskId) {
    let task = document.getElementById(taskId);
    let button = task.querySelector("button");
    
    if (!button.opacity) {
        task.classList.add("opacity");
        button.opacity = true;
        button.classList.add("opacity-50");
        
        taskCount--;
        document.getElementById("task-count").textContent = taskCount;
        
        activityCount++;
        document.getElementById("activity-count").textContent = activityCount;
        
        document.getElementById("log-list").innerHTML
         += `<li>Completed: ${task.querySelector("h3").textContent}
          at ${new Date().toLocaleTimeString()}</li>`;
    }
}


       // btn hide

document.getElementById("btn-opacity").addEventListener("click", function () {
    this.style.opacity = "0.3"; 
  });


document.getElementById("btn-opacity2").addEventListener("click", function () {
    this.style.opacity = "0.3"; 
  });


document.getElementById("btn-opacity3").addEventListener("click", function () {
    this.style.opacity = "0.3"; 
  });


document.getElementById("btn-opacity4").addEventListener("click", function () {
    this.style.opacity = "0.3"; 
  });


document.getElementById("btn-opacity5").addEventListener("click", function () {
    this.style.opacity = "0.3"; 
  });


document.getElementById("btn-opacity6").addEventListener("click", function () {
    this.style.opacity = "0.3"; 
  });




   // history

function clearHistory() {
    document.getElementById("log-list").innerHTML = "";
    activityCount = 0;
    document.getElementById("activity-count").textContent = activityCount;
}



// color Grading

document.getElementById("color-grading").addEventListener("click", function() {
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#F4D03F", "#8E44AD"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});



document.getElementById("2nd-page").addEventListener("click",function(event){
    event.preventDefault();
    window.location.href = "index2.html";
})

document.getElementById("1st-page").addEventListener("click",function(event){
    event.preventDefault();
    // window.location.href = "index.html";
    console.log("hey")
})