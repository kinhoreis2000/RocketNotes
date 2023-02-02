import styled from 'styled-components'

export const Container =  styled.textarea`
  width: 100%;
  height: 150px;

  border: none;
  resize: none;

  padding: 16px;
  border-radius: 10px;
  margin-bottom: 8px;

  color: ${({theme}) => theme.COLORS.WHITE};
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

  &::placeholder {
  background-color: ${({theme}) => theme.COLORS.GREY_300};

  }
`