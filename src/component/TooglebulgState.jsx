import React from 'react'
import { useRecoilValue } from 'recoil'
import { bulbCount } from '../store/atom/bulb'

const TooglebulgState = () => {
  
  const setLight = useSetRecoilState(bulbCount)

    const Lighton=()=>{
        setLight(v=>!v)
    }
  return (
    <div>
      <button onClick={Lighton}>toggle</button>
    </div>
  )
}

export default TooglebulgState
