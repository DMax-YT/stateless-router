import './Navbar.css'

export const Navbar = ({ children }) => {
  return (
    <nav className='navbar'>
      {children}
    </nav>
  )
}
