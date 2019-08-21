// Task 09 TodoList Application
// RU: Создать классы 'задача' и 'список задач' со следющим функционалом:
//     1. Добавить задачу в список
//     2. Получить и вывести в консоль список всех задач
//        в формате "[new] Task 1", "[completed] Task2"
//     3. Отметить указанную задачу как выполненную
//     4. Удалить задачу из списка
//     5. Отсортировать задачи по алфавиту по возрастанию или по убыванию
//     6. Очистить список задач

class Task {
	constructor (name) {
		this.id = ++Task.id;
		this.name = name;
	}
	completeTask () {
		this.isComplete = true;
	}
	toString() {
		return `[${this.isComplete ? 'complete' : 'new'}] ${this.name}`;
	}
}

class TaskList {
	constructor() {
		this.tasks = [];
	}

	addTask (task) {
		this.tasks.push(task);
	}

	printTasks () {
		this.tasks.forEach(function (task) {
			console.log(task.toString());
		})
	}

	removeTask (task) {
		const taskIndex = this.tasks.findIndex(x => x.id === task.id);

		this.tasks.splice(taskIndex, 1);
	}

	sortListByName (reverse = false) {
		this.tasks.sort(function (a,b) {
			if (a.name > b.name) return -1;
			if (a.name < b.name) return 1;
			return 0;
		});
		if (reverse) this.tasks.reverse();
	}

	clearTaskList () {
		this.tasks = [];
		console.log('List is empty');
	}
}

Task.prototype.isComplete = false;
Task.id = 0;

const t = new Task('task1');
const t2 = new Task('task2');
t2.completeTask();

const newList = new TaskList();

newList.addTask(t);
newList.addTask(t2);
newList.addTask(new Task('task11'));
newList.addTask(new Task('task5'));
newList.addTask(new Task('fff'));
newList.addTask(new Task('asddd'));
newList.addTask(new Task('task4'));

console.log('############### Home Work ##############');
console.log("//////////////All tasks//////////////");
newList.printTasks();

console.log("/////////////Sorted tasks asc////////////");
newList.sortListByName(true);
newList.printTasks();

console.log("/////////////Sorted tasks desc//////////////");
newList.sortListByName();
newList.printTasks();

console.log("//////////////After delete/////////////");
newList.removeTask(t);
newList.printTasks();

console.log("//////////////After clean//////////////");
newList.clearTaskList();
newList.printTasks();
