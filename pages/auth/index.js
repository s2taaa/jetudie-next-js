import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import AccessToken from 'components/accessToken'

export default function AuthPage() {
    const { data: session } = useSession()
    if (session) {
      return (
        <>
          Signed in as {session.user.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
          <AccessToken/>
        </>
      )
    }
    return (
      <>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
      </>
    )
  }