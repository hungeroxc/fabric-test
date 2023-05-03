import { Component } from 'react'

import Canvas from '../../canvas/Canvas'

class ImageMapEditor extends Component {
    render() {
        return (
            <div
                ref={c => {
                    this.container = c
                }}
                className="rde-editor-canvas"
            >
                <Canvas 
                    ref={c => {
                        this.canvasRef = c
                    }}
                    className="rde-canvas"
                />
            </div>
        )
    }
}

export default ImageMapEditor
