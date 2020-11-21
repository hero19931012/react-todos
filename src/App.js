import './App.css';
import { useState } from 'react'
import TodoItem from './TodoItem';
import { TodoWrapper, Todos, Title, TodoInputForm, TodoInput, TodoInputButton, TodoDeleteAllButton, TodoDFilterAll, TodoFilterDone, TodoFilterUndone, TodoActionWrapper } from './Components'

let id = 2;

export default function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      content: "寫完 react 作業",
      isDone: false,
      display: true
    },
  ])

  const [value, setValue] = useState('')

  const handleInputChange = (e) => {
    setValue(e.target.value)
  }

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!value) return;
    setTodos([{
      id,
      content: value,
      isDone: false,
      display: true
    }, ...todos])

    setValue('');
    id++
  }

  const handleToggleIsDone = id => {
    setTodos(todos.map(todo => {
      if (todo.id !== id) return todo;
      return {
        ...todo,
        isDone: !todo.isDone
      }
    }))
  }

  const handleDeleteTodo = id => {
    setTodos(todos.filter(todo => {
      if (todo.id !== id) return todo
    }))
  }

  const handleListAll = () => {
    setTodos(todos.map(todo => {
      return {
        ...todo,
        display: true
      }
    }))
  }

  const handleListDone = () => {
    setTodos(todos.map(todo => {
      if (!todo.isDone) return {
        ...todo,
        display: false
      }
      return {
        ...todo,
        display: true
      }
    }))
  }

  const handleListUndone = () => {
    setTodos(todos.map(todo => {
      if (todo.isDone) return {
        ...todo,
        display: false
      }
      return {
        ...todo,
        display: true
      }
    }))
  }

  const handleDeleteAll = () => {
    setTodos([])
  }

  return (
    <TodoWrapper>
      <Title>Todo List</Title>
      <TodoInputForm onSubmit={handleAddTodo}>
        <TodoInput onChange={handleInputChange} value={value} placeholder="input something here..." />
        <TodoInputButton type="submit" >新增</TodoInputButton>
      </TodoInputForm>
      <Todos>
        {
          todos.map(todo => {
            return todo.display === true ? <TodoItem key={todo.id} todo={todo} handleToggleIsDone={handleToggleIsDone} handleDeleteTodo={handleDeleteTodo}></TodoItem> : ''
          })
        }
      </Todos>
      <TodoActionWrapper>
        <TodoDFilterAll onClick={handleListAll}>列出全部</TodoDFilterAll>
        <TodoFilterDone onClick={handleListDone}>列出已完成</TodoFilterDone>
        <TodoFilterUndone onClick={handleListUndone}>列出未完成</TodoFilterUndone>
        <TodoDeleteAllButton onClick={handleDeleteAll}>清空</TodoDeleteAllButton>
      </TodoActionWrapper>
    </TodoWrapper>
  );
}
