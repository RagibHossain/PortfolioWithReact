import React from 'react'
interface IProps{
    setMode :  () => void,
}
const ModeSelector : React.FC<IProps> = ({setMode}) => {
    return (
        <div style={{position:"absolute",zIndex:1,top:"0",right:"0"}}>
            <button onClick={() => {
                setMode()
            }}>Change Mode</button>
        </div>
    )
}

export default ModeSelector
