angular
 .module('ToDo',[])
 .controller('todoController', function(){
   var todoList = this
    todoList.todos = [{'title':'Build a todo app','done': false}]
    todoList.addTodo = function(){
      todoList.todos.push({'title': todoList.newTodoTitle, 'done':false})
      todoList.newTodoTitle = ""
    }
    todoList.clearCompleted = function(){
      todoList.todos = todoList.todos.filter(function(item){
        return ! item.done
      })
    }
})
