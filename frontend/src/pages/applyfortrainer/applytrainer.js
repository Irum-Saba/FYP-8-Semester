import React from 'react'
import SideBar from '../../components/sidebar/SideBar'
import Trainer from '../../components/applytrainerform/trainerform'
import TopBar from '../../components/socialpage/TopBar'
const applytrainer = () => {
  return (
    <>
        <TopBar/>
        <div className="Trainer" style={{display:"grid", gridTemplateColumns: "18vw auto" }}>
          <SideBar/>
          <Trainer/>
        </div>

    </>
  )
}

export default applytrainer
