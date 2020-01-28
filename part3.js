"use strict";
exports.__esModule = true;
var Todos = /** @class */ (function () {
    function Todos() {
        this.myTasksArray = [];
    }
    Todos.prototype.addTask = function (task) {
        this.myTasksArray.push(task);
        console.log("Item " + task + " has been added to the Array");
        return this.myTasksArray.length;
    };
    Todos.prototype.listAllTasks = function () {
        /*for(let i =0; i <myTasksArray.length; i++){
    
        }*/
        console.log("Array conatains the following items: ");
        this.myTasksArray.forEach(function (task) {
            console.log(task);
        });
    };
    Todos.prototype.deleteTask = function (task) {
        var index = this.myTasksArray.indexOf(task);
        if (index > -1) {
            this.myTasksArray.splice(index, 1);
            console.log("Item " + task + " deleted from array.");
        }
        else {
            console.log("Item " + task + " not in array.");
        }
        return this.myTasksArray.length;
    };
    return Todos;
}());
var todo = new Todos();
todo.addTask("Complete Lab");
todo.listAllTasks();
todo.deleteTask("Completed Lab");
