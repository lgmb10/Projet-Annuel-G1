import React from 'react'
import { Route } from 'react-router-dom'
import { spring, AnimatedSwitch } from 'react-router-transition'
import { Homepage } from './views/Homepage'
import { Menu } from './views/Menu/Menu'

function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  }
}

function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  })
}

const bounceTransition = {
  atEnter: {
    opacity: 0,
    scale: 1.2,
  },
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8),
  },
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
}

export const Routes = () => (
  <AnimatedSwitch
    atEnter={bounceTransition.atEnter}
    atLeave={bounceTransition.atLeave}
    atActive={bounceTransition.atActive}
    mapStyles={mapStyles}
    className='route-wrapper'
  >
    <Route exact path='/' component={Homepage} />
    <Route exact path='/menu' component={Menu} />
  </AnimatedSwitch>
)
