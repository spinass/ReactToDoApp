var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'Ka nors daryti'
        }, {
          id: 2,
          text: 'Dar ka nors'
        }, {
          id: 3,
          text: 'Pabandyti'
        }
      ]
    };
  },
  handleAddTodo: function (text) {
    alert('new todo: '+ text);
  },
  render: function() {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }

});

module.exports = TodoApp;
