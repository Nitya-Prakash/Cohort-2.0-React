// import React from 'react'

// const Navbar = (props) => {
//     console.log(props)
//     return (
//         <>
//             <div className='w-full h-[15vh] bg-green-400 text-4xl p-5'>
//                 <h1>Navbar</h1>
//                 <h1>{props.children}</h1>
//                 <h1>{props.name}</h1>
//             </div>
//         </>
//     )
// }

// export default Navbar

import React, { useContext } from 'react'
import { userDataContext } from '../context/UserContext'

const Navbar = () => {
    const data = useContext(userDataContext)
    console.log(data)
    return (
        <div className='w-full h-[15vh] bg-green-400 text-4xl p-5'>Navbar</div>
    )
}

export default Navbar