// Style your elements here
import styled from 'styled-components'

export const NoteItemDisplay = styled.li`
  width: 25%;
  margin-right: 15px;
  border: 1px solid #aab8c8;
  border-radius: 10px;
  padding-top: 15px;
  padding-bottom: 30px;
  padding-right: 20px;
  padding-left: 20px;
  margin-bottom: 20px;
  @media screen and (max-width: 576px) {
    width: 100%;
    margin-right: 0px;
  }
`
export const NoteHeading = styled.h1`
  font-size: 20px;
  margin-bottom: 20px;
`
export const NoteDescription = styled.p`
  color: #475569;
  line-height: 1.6;
`
