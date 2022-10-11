// Write your code here
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'
import {
  Container,
  Heading,
  NewNotesContainerBox,
  InputField,
  AddButton,
  NotesListContainer,
  NoNotesContainer,
  NoNotesImage,
  NoNotesHeading,
  NoNotesDescription,
  InputTextArea,
} from './styledComponents'

const Notes = () => {
  const [title, SetTitle] = useState('')
  const [note, setNote] = useState('')
  const [notesArray, setNotesArray] = useState([])
  const arrayLength = notesArray.length

  const updateNoteTitle = event => SetTitle(event.target.value)
  const updateNoteContent = event => setNote(event.target.value)
  const addNote = event => {
    event.preventDefault()
    const newNote = {
      id: uuidv4(),
      title,
      note,
    }
    setNotesArray(prevNoteList => [...prevNoteList, newNote])
    SetTitle('')
    setNote('')
  }

  return (
    <Container>
      <Heading>Notes</Heading>
      <NewNotesContainerBox onSubmit={addNote}>
        <InputField
          type="text"
          value={title}
          placeholder="Title"
          onChange={updateNoteTitle}
        />
        <InputTextArea
          value={note}
          placeholder="Take a Note..."
          onChange={updateNoteContent}
          rows="4"
        />
        <AddButton type="submit">Add</AddButton>
      </NewNotesContainerBox>
      {arrayLength > 0 ? (
        <NotesListContainer>
          {notesArray.map(eachNote => (
            <NoteItem key={eachNote.id} noteDetails={eachNote} />
          ))}
        </NotesListContainer>
      ) : (
        <NoNotesContainer>
          <NoNotesImage
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt=" notes empty"
          />
          <NoNotesHeading>No Notes Yet</NoNotesHeading>
          <NoNotesDescription>
            Notes you add will appear here
          </NoNotesDescription>
        </NoNotesContainer>
      )}
    </Container>
  )
}

export default Notes
