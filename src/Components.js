import styled from 'styled-components'
import { Hover } from './Mixins'
import Color from './Constants'

export const Title = styled.h1`
  text-align: center;
  color: ${Color.textHighlight};
`

export const Todos = styled.div``

export const TodoWrapper = styled.div`
  margin: 10px auto;
  width: 400px;
`

export const TodoInputForm = styled.form`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  font-size: 16px;
`

export const TodoInput = styled.input`
  margin-right: 10px;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px ${Color.muted} solid;
  font-size: 18px;
  color: ${Color.textPrimary};
  &::placeholder {
    color: ${Color.textMuted}
  }
  &:focus {
    outline: none;
  }
`

export const TodoInputButton = styled.button`
  min-width: 38px;
  border-radius: 5px;
  padding: 5px;
  font-size: 13px;
  color: ${Color.textWhite};
  background: ${Color.primary};
  border: none;
  ${Hover}
`

export const TodoItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`

export const TodoContent = styled.div`
  color: ${props => props.isDone === true ? Color.textMuted : Color.textPrimary};
  text-decoration: ${props => props.isDone === true ? "line-through" : "none"}
`

export const TodoButtonWrapper = styled.div``

export const DoneButton = styled.button`
  display: inline-block;
  margin-left: 10px; 
  padding: 5px;
  border: ${props => props.className === "done" ? Color.muted : Color.primary} solid 1px;
  box-sizing: border-box;
  border-radius: 5px;
  color: ${props => props.className === "done" ? Color.muted : Color.primary};
  transition: all;
  background: none;
  
  ${Hover}
  &:hover {
    color: ${Color.textWhite};
    background-color: ${props => props.className === "done" ? Color.muted : Color.primary};;
  }
`

export const DeleteButton = styled(DoneButton)`
  border-color: ${Color.warning};
  color: ${Color.warning};
  ${Hover}
  &:hover {
    color: ${Color.textWhite};
    background-color: ${Color.warning};
  }
`

export const TodoActionWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  & button {
    margin-left: 10px;
  }
`


export const TodoDFilterAll = styled(DoneButton)``
export const TodoFilterDone = styled(DoneButton)``
export const TodoFilterUndone = styled(DoneButton)``
export const TodoDeleteAllButton = styled(DeleteButton)``