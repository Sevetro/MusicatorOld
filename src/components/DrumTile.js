import React from 'react'

export default function DrumTile({ isActive, id }) {
    
    return <button style={{ width:50, height:50, borderRadius:15, margin:2, backgroundColor: isActive ? "red" : "white" }}>{id}</button>
}