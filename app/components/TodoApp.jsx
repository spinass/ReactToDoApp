var React = require('react');
var TodoList = require('TodoList');

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
  render: function() {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    );
  }

});

module.exports = TodoApp;
