import React from 'react'

import { Path } from 'enums'
import { Forgot, ForgotCreatePassword, Login, Profile, Registration } from 'pages'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { selectorIsAuth, selectorUserId } from 'store'

export const Routers = () => {
  const isAuth = useSelector(selectorIsAuth)

  return (
    <Routes>
      <Route path={`${Path.Root}`} element={<Login />} />

      <Route path={`${Path.Forgot}`} element={!isAuth ? <Forgot /> : <Profile />} />
      <Route
        path={`${Path.NewPassword}${Path.Root}${Path.Token}`}
        element={!isAuth ? <ForgotCreatePassword /> : <Profile />}
      />
      <Route path={`${Path.Profile}`} element={isAuth ? <Profile /> : <Login />} />

      <Route path={`${Path.Register}`} element={<Registration />} />
      <Route path={`${Path.Login}`} element={isAuth ? <Profile /> : <Login />} />
    </Routes>
  )
}
