//Array string
let myTasksArray: Array<string> = [];

//function
function addTask(task: string): number {
    myTasksArray.push(task);
    console.log("Item " + task + " has been added to the Array");
    return myTasksArray.length;
}
function listAllTasks():void {
    /*for(let i =0; i <myTasksArray.length; i++){

    }*/
    console.log("Array conatains the following items: ")
    myTasksArray.forEach(function (task) {
        console.log(task)
    })
}

function deleteTask(task: string): number {
    let index: number = myTasksArray.indexOf(task);
    if (index > -1) {
        myTasksArray.splice(index, 1);
        console.log("Item " + task + " deleted from array.");
    } else {
        console.log("Item " + task + " not in array.");
    }
    return myTasksArray.length;
}

let numberOfTasks: number = addTask("Eat Breakfast");
console.log("The number of task to do today is " + numberOfTasks);
listAllTasks();

deleteTask("Complete Lab");