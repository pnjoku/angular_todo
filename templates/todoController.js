angular
 .module('ToDo',[])
 .controller('todoController', function(){
   var todoList = this
    todoList.todos = [{'title':'Build a todo app','done': false}]
    todoList.addTodo =  addTodo
    todoList.clearCompleted = clearCompleted

    function addTodo(){
      todoList.todos.push({'title': todoList.newTodoTitle, 'done':false})
      todoList.newTodoTitle = ""
    }
    function clearCompleted(){
      todoList.todos = todoList.todos.filter(function(item){
        return ! item.done
      })
    }
})
