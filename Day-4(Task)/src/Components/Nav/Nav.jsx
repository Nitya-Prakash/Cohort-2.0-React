import Navleft from './Navleft'
import Navlinks from './Navlinks'
import Navright from './Navright'

const Nav = () => {
  return (
    <div className='nav'>
        <Navleft />
        <Navlinks />
        <Navright />
    </div>
  )
}

export default Nav