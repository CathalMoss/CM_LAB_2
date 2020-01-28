//Array string
var myTasksArray = [];
var task;
//function
function addTask(task) {
    myTasksArray.push(task);
    console.log("Item " + task + " has been added to the Array");
    return myTasksArray.length;
}
function listAllTasks() {
    /*for(let i =0; i <myTasksArray.length; i++){

    }*/
    console.log("Array conatains the following items: ");
    myTasksArray.forEach(function (task) {
        console.log(task);
    });
}
function deleteTask(task) {
    var index = myTasksArray.indexOf(task);
    if (index > -1) {
        myTasksArray.splice(index, 1);
        console.log("Item " + task + " deleted from array.");
    }
    else {
        console.log("Item " + task + " not in array.");
    }
    return myTasksArray.length;
}
var numberOfTasks = addTask("Eat Breakfast");
console.log("The number of task to do today is " + numberOfTasks);
listAllTasks();
deleteTask("Complete Lab");
