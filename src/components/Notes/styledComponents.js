// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
  padding: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 576px) {
    padding: 30px;
    justify-content: center;
  }
`
export const Heading = styled.h1`
  font-size: 40px;
  color: #4c63b6;
  font-family: 'Bree Serif';
  text-align: center;
`
export const NewNotesContainerBox = styled.form`
  box-shadow: 0px 0px 10px 0px #bfbfbf;
  padding: 30px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  margin-bottom: 40px;
`
export const InputField = styled.input`
  height: 50px;
  border: none;
  margin-bottom: 10px;
  outline: none;
`

export const InputTextArea = styled.textarea`
  border: none;
  margin-bottom: 10px;
  outline: none;
`
export const AddButton = styled.button`
  background-color: #4c63b6;
  color: white;
  font-size: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 25px;
  padding-right: 25px;
  align-self: flex-end;
  border: none;
  border-radius: 5px;
`

export const NotesListContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

export const NoNotesContainer = styled.div`
  color: #475569;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NoNotesImage = styled.img`
  height: 150px;
  width: 150px;
  margin-bottom: 30px;
`
export const NoNotesHeading = styled.h2`
  margin-bottom: 20px;
`
export const NoNotesDescription = styled.p``
