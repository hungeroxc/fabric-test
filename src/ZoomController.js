import './index.css'
import { useState, useEffect } from 'react'

const ZoomController = ({ canvas, img }) => {
    const [zoom, setZoom] = useState(0)

    useEffect(() => {
        setZoom(canvas.getZoom())
    }, [])

    const clickBtn = (type) => {
        let z = zoom
        if (type === 'add') {
            z = z + 0.05
        } else if (type === 'minus') {
            z = z - 0.05
        }
        setZoom(z)

        const center = img.getCenterPoint()
        canvas.zoomToPoint({
            x: center.x,
            y: center.y
        }, z)
    }


    return (
        <div className="aaaa">
            <button onClick={() => clickBtn('add')}>+</button>
            <div>{(zoom * 100).toFixed(0)}</div>
            <button onClick={() => clickBtn('minus')}>-</button>
        </div>
    )
}

export default ZoomController
