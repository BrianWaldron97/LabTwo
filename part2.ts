let myTaskArray: Array<string> = [];

function addTask(task: string): number {
    myTaskArray.push(task);
    console.log("Item " + task + " has been added to the array");
    return myTaskArray.length;
}

function listAllTasks(): void {
    //for(let i=0;i<myTaskArray.length;i++)
    //{
    //    console.log();
    //}

    console.log("List of items in the array is: ");
    myTaskArray.forEach(function (item) {
        console.log(item);
    });


}

function deleteTask(task: string): number {
    let index: number;
    index = myTaskArray.indexOf(task);

    if (index > -1) {
        myTaskArray.splice(index, 1);
        console.log("Item " + task + " has been deleted from the array");
    }
    else {
        console.log("Item " + task + " is not in the array.");
    }

    return myTaskArray.length;
}

addTask("Complete Part A");
let itemsInArray: number = addTask("Complete Part B");
console.log("Number of items in array: " + itemsInArray);
listAllTasks();

let count:number = deleteTask("Complete Part A");
console.log("Number of items in Array is " + count);