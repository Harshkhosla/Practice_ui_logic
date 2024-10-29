import React, { useState } from 'react'
import BulbState from './BulbState'
import TooglebulgState from './TooglebulgState'
import { useRecoilValue } from 'recoil'
import { bulbCount } from '../store/atom/bulb'

const LightBulb = () => {
  // const [light,setLight]= useState(true);
  const light = useRecoilValue(bulbCount)
  return (
    <div>
      <BulbState />
      <TooglebulgState />
    </div>
  )
}

export default LightBulb
