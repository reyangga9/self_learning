import React, { useEffect, useState } from 'react'


const App = () => {
  const [backendData,setBackendData] = useState([{}])

  useEffect(()=>{
    // kenapa hanya /api? karena di proxynya sudah dijelaskan localhost 3000
    fetch("/api")
    .then(response=> response.json())
    .then(data=>
      {
        setBackendData(data)
        console.log(setBackendData)
      }
      )
  },[])
  return (
    <div>
      {(typeof backendData.users === 'undefined') ? (
        <p> Loading ...</p>
      ):(
        backendData.users.map((users,i)=>
        (
          <p key={i}>{users}</p>
        ))
      )}
    </div>
  )
}

export default App