import React from 'react'
// import style from '@assets/'
import style from '/src/assets/css/HeaderStyle/Header.module.css'
// import style from '../../assets/css/HeaderStyle/Header.module.css'

export const Header = () => {
  return (
    <header>
        <h1 className={style['headers']}>Smart Timer</h1>
      </header>
  )
}
