import React from 'react'

export default function DrumTile(props) {

    const { isActive, id } = props

    return <button style={{ padding:24, backgroundColor: isActive ? "red" : "white" }}>{id}</button>
}