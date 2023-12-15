import { render, screen,fireEvent } from "@testing-library/react"
import Users from "./Users"
import { nameLength } from "./Users"

test('test length of name', () => {
    const filteredUsers = nameLength();
    expect(filteredUsers).toContain('Arthur');
    expect(filteredUsers).not.toContain('Lola')
})

test('test name render',()=>{
  render(<Users/>)
  expect(screen.queryByText('Elodie')).not.toBeInTheDocument()

  const button = screen.getByText('Afficher Liste')
  fireEvent.click(button)
  expect(screen.getByText('Julien')).toBeInTheDocument()
})