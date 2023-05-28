export const Navbar = ({ children }) => {
  return (
    <nav style={{
      display: 'flex',
      gap: '10px',
      flexDirection: 'row',
      alignItems: 'center',

      position: 'absolute',
      top: 20,
      left: '50%',
      transform: 'translateX(-50%)'
    }}>
      {children}
    </nav>
  )
}
