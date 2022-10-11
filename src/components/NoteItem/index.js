// Write your code here

import {NoteItemDisplay, NoteHeading, NoteDescription} from './styledComponents'

const NoteItem = props => {
  const {noteDetails} = props
  const {title, note} = noteDetails

  return (
    <NoteItemDisplay>
      <NoteHeading>{title}</NoteHeading>
      <NoteDescription>{note}</NoteDescription>
    </NoteItemDisplay>
  )
}

export default NoteItem
