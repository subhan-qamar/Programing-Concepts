enum Priority{
    LOW,
    MEDIUM,
    HIGH
}
interface TASK{
    id:number, 
    name?:string, 
    status?:string, 
    priority?:Priority, 
    completed?:boolean, 
    createdAt?:Date ,
    tags?:string[]
}

class TASKCLASS {
    constructor(public data: TASK) {}

    public toggleComplete() {
        this.data.completed = !this.data.completed;
    }
}


class TaskManager{
    private tasks:TASKCLASS[] = [];
    public addTask(task:Omit<TASK, 'id' | 'createdAt'>):void{

        const id = this.tasks.length + 1;
        const createdAt = new Date();
        this.tasks.push(new TASKCLASS({id, createdAt, ...task}));
    }

    public showAllTasks(): void {
        console.log(this.tasks);
    }

    public deleteTask(id: number): void {
        this.tasks = this.tasks.filter(task => task.data.id !== id);
        console.log(`Task with id ${id} deleted.`);
        return;
    }
    public filterTasks(id: number): TASK | undefined { 
        const task = this.tasks.find(task => task.data.id === id);
        return task?.data;
    }
    public sortTasks(): TASKCLASS[] { 
        return this.tasks.sort((a, b) => (a.data.id ?? 0) - (b.data.id ?? 0)); 
    }

    public toggleTask(id: number): void {
    const task = this.tasks.find(t => t.data.id === id);

    if (!task) {
        throw new TaskError(`Task with id ${id} not found.`);
    }
    task.toggleComplete();
}
    public fetchTaskFromServer(): Promise<TASK[]> {
        const mockData =  new Promise<TASK[]>((resolve,reject)=>{
            if(this.tasks.length > 0){
                setTimeout(() => {
                    resolve(this.tasks.map(task => task.data));
                }, 1000);
            }
            else {
                resolve([]);
            }
        });
        return mockData;
    }

}

class TaskError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "TaskError";
    }
}


const manager = new TaskManager();
manager.addTask({name: "Task 1", status: "pending", priority: Priority.HIGH, completed: false, tags: ["work"]});
manager.addTask({name: "Task 2", status: "pending", priority: Priority.MEDIUM, completed: false, tags: ["personal"]});
manager.addTask({name: "Task 3", status: "pending", priority: Priority.LOW, completed: false, tags: ["personal"]});
manager.showAllTasks();
manager.toggleTask(1);
manager.showAllTasks();
try{
    manager.toggleTask(3);
}
catch(e){
    if (e instanceof TaskError) {
        console.error(e.message);
    } else {
        throw e;
    }
}
manager.fetchTaskFromServer()
.then(result=> console.log(result))
.catch(error => console.error(error));