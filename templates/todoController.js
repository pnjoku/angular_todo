angular
 .module('ToDo',[])
 .controller('todoController', function(){
   var todoList = this
    todoList.todos = [{'title':'Build a todo app','done': false}]
    todoList.addTodo =  addTodo
    todoList.clearCompleted = clearCompleted
    todoList.remaining = remaining

    function addTodo(){
      todoList.todos.push({'title': todoList.newTodoTitle, 'done':false})
      todoList.newTodoTitle = ""
    }

    function remaining(){
    var count = 0
    angular.forEach(todoList.todos, function(todo) {
      count += todo.done ? 0 : 1
    })
    return count
   }

    function clearCompleted(){
      todoList.todos = todoList.todos.filter(function(item){
        return ! item.done
      })
    }
})
