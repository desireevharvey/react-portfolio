import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
    <Link to={"/"}>Home</Link>
    <Link to={"/aboutme"}>About</Link>
    <Link to={"/resume"}>Resume</Link>
    <Link to={"/projects"}>Projects</Link>
    </div>
  )
}
