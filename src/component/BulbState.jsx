import React from 'react'
import { useRecoilValue } from 'recoil'
import { bulbCount } from '../store/atom/bulb'

const BulbState = () => {
  
  const light = useRecoilValue(bulbCount)
  return (
    <div>
      {light ===true ? "light on ":"loght off"}
    </div>
  )
}

export default BulbState
