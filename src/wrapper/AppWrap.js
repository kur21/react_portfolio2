import React from 'react'
import { NavigationDots, SocialMedia } from '../components'

const AppWrap = (Component, idName, classNames="") => function HOC() {
  if (idName === 'home') {
    return (
      <header id={idName} className={`app__container ${classNames}`}>
        <SocialMedia/>
        <div className="app__wrapper app__flex">
          <Component/>
          <div className="copyright">
            <p className="p-text">@2022 MICAEL</p>
            <p className="p-text">All right reserved</p>
          </div>
        </div>
        <NavigationDots active={idName}/>
      </header>
    )
  } else if (idName === 'footer') {
    return (
      <footer id={idName} className={`app__container ${classNames}`}>
        <SocialMedia/>
        <div className="app__wrapper app__flex">
          <Component/>
          <div className="copyright">
            <p className="p-text">@2022 MICAEL</p>
            <p className="p-text">All right reserved</p>
          </div>
        </div>
        <NavigationDots active={idName}/>
      </footer>
    )
  } else {
    return (
      <section id={idName} className={`app__container ${classNames}`}>
        <SocialMedia/>
        <div className="app__wrapper app__flex">
          <Component/>
          <div className="copyright">
            <p className="p-text">@2022 MICAEL</p>
            <p className="p-text">All right reserved</p>
          </div>
        </div>
        <NavigationDots active={idName}/>
      </section>
    )
  }
}

export default AppWrap