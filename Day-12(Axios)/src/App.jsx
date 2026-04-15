import axios from "axios"
import { use, useEffect, useState } from "react"
import Users from "./components/Users"

const App = () => {
  const [userData, setUserData] = useState([])

  const getData = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users/")
    setUserData(response.data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="flex flex-wrap p-5 justify-around gap-10">
      {/* <button onClick={getData}>Click</button> */}
      {userData?.map((elem, idx) => {
        return <div key={idx}>
          <Users elem={elem} />
        </div>
      })}
    </div>
  )
}

export default App