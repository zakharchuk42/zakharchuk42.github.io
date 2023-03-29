import React from 'react'

export const useOpenState = (
  initialState = false
): {
  boolean: boolean
  handleTrue(): void
  handleFalse(): void
  handleToggle(): void
} => {
  const [boolean, setBoolean] = React.useState(initialState)
  return {
    boolean,
    handleTrue: () => setBoolean(true),
    handleFalse: () => setBoolean(false),
    handleToggle: () => setBoolean((prevState) => !prevState),
  }
}
