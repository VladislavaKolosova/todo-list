const app = new Vue({
	el: '#app',
	data: {
	  title: 'Vladislava todo list',
	  newTodo: '', // чтобы когда юзер вводиk в свои todo в inputbox
	  todos: []   // список todo представляется как массив, поэтому добавила todos[] чтобы все данняе которые добавляются добавллись в массив todos
	},
	methods: {
	  addTodo() {
		//хочу добавить в обьект с несколькими свойствами,
		//как я поняла this позволяет достать любой метод или свойство из данных. А в моем случает текст, написаный в форме выведется в консоль после нажатия кнопки 
		this.todos.push({
		  title: this.newTodo,
		  done: false  //false потому что нужно помечать туду как сделаные(false) или еще активные(true)
		});
		this.newTodo = ''; //очищает input box
	  },
	  // метод удаляет туду
	  removeTodo(todo) {
		const todoIndex = this.todos.indexOf(todo);
		//для splicе первым параметром указала что я хочу удалить, а вторым скольно штук
		this.todos.splice(todoIndex, 1);
	  },
	  //метод отмечает что все туду сделаны
	  allDone() {
		this.todos.forEach(todo => {
		  todo.done = true;
		});
	  }
	}
  });