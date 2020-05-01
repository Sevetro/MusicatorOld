import React from 'react'

export default function DrumTile(props) {

    const { isActive } = props
    const { id } = props

    return <button style={{ backgroundColor: isActive ? "red" : "white" }}>{id}</button>
}