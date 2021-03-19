import React from 'react';
import TodoApp from './components/TodoApp';
import useStyles from './styles/AppStyles';

function App() {
  const classes = useStyles();

  return (
    <div className={classes.App}>
      <header className={classes.header}>
        <h1>
          Todo<span>list</span>
        </h1>
        <h2>A simple todolist app built with React and Context</h2>
      </header>
      <TodoApp />
    </div>
  );
}

export default App;
