/* Tutorial - 10 - useState Future Value */

import React from 'react'
import { useState } from 'react';

type Authuser = {
    name: string,
    email: string,
}

export const User = () => {

    const [user, setUser] = useState<Authuser>({} as Authuser);

    const handleLogin = () => {
      setUser({
        name: "Kywleon",
        email: "kywleon@gmail.com"
      })
    }
    
  return (
    <div>
        <button onClick={handleLogin}>Login</button>

        <div>User name is {user?.name}</div>
        <div>User email is {user?.email}</div>
    </div>
  )
}


