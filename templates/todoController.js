angular
 .module('ToDo',['ngRoute'])
 .controller('todoController', function(){
   var todoList = this
    todoList.todos = [
      {'title':'Build a todo app','done': false}
    ];
    todoList.addTodo = function(){
      todoList.items.push({'title': todoList.newTodo, 'done':false})
      todoList.newTodo = {}
    }
    todoList.clearCompleted = function(){
      todoList.items = todoList.items.filter(function(item){
        return !item.done
      })
    }
}])
