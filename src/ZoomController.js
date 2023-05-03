import './index.css'

const zoomControllerList = [
    {
      zoomText: '20%',
      zoomNum: 0.2,
    },
    {
      zoomText: '50%',
      zoomNum: 0.5,
    },
    {
      zoomText: '75%',
      zoomNum: 0.75,
    },
    {
      zoomText: '100%',
      zoomNum: 1,
    },
    {
      zoomText: '150%',
      zoomNum: 1.5,
    },
    {
      zoomText: '200%',
      zoomNum: 2,
    },
    {
      zoomText: '原始尺寸',
      zoomNum: 1,
      shortcutText: 'Ctrl+1',
    },
    {
      zoomText: '适应窗口',
      zoomNum: 5,
      shortcutText: 'Shift+1',
    },
  ]

const ZoomController = ({ canvas, img, zoom, setZoom }) => {

    const clickBtn = (type) => {
        let z = canvas.getZoom()
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

    const click = (zoom) => {
        canvas.centerObject(img)
        const center = img.getCenterPoint()
        canvas.zoomToPoint({
            x: center.x,
            y: center.y
        }, zoom)
    }


    return (
        <div className="aaaa">
            <button onClick={() => clickBtn('add')}>+</button>
            <div>{(zoom * 100).toFixed(0)}</div>
            <button onClick={() => clickBtn('minus')}>-</button>
            <div>
                {
                    zoomControllerList.map((item, i) => {
                        return (
                            <button onClick={() => click(item.zoomNum)} key={i}>
                                {item.zoomText}
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ZoomController
