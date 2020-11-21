import styled from 'styled-components';
import { Hover } from './Mixins';
import Color from './Constants'
import { TodoItemWrapper, TodoContent, TodoButtonWrapper, DoneButton, DeleteButton } from './Components'

export default function TodoItem({todo, handleToggleIsDone, handleDeleteTodo}) {

  const handleTogglerClick = () => {
    handleToggleIsDone(todo.id);
  }

  const handleDeleteClick = () => {
    handleDeleteTodo(todo.id);
  }

  return (
    <TodoItemWrapper>
      <TodoContent isDone={todo.isDone}>{todo.content}</TodoContent>
      <TodoButtonWrapper>
        <DoneButton className={todo.isDone === true && `done`} onClick={handleTogglerClick} >{ todo.isDone === true ? "標示未完成" : "標示已完成"}</DoneButton>
        <DeleteButton onClick={handleDeleteClick}>刪除</DeleteButton>
      </TodoButtonWrapper>
    </TodoItemWrapper>
  )
}

