import { fabric } from 'fabric'
import { useState, useEffect, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'

import ZoomController from './ZoomController'

const url = "https://img.ixintu.com/download/jpg/201910/f4d4228a35aa7fd350c058863a4cb4c2.jpg"

const App = () => {
  const zoomController = useRef(null)
  // canvas实例
  const [canvas, setCanvas] = useState(null)
  const [id, setId] = useState(1)
  // img实例
  const [img, setImg] = useState(null)
  // 比例
  const [zoom, setZoom] = useState(0)
  // 中心点
  // const [centerX, setCenterX] = useState(0)
  // const [centerY, setCenterY] = useState(0)

  // 初始化画布
  const initCanvas = () => {
    const c = new fabric.Canvas(`canvas_${id}`)
    fabric.Image.fromURL(url, img => {
      c.selection = false
      img.set('hasBorders', false)
      img.set('hasControls', false)
      c.add(img)
      c.setBackgroundColor('#d8dcd8')
      c.centerObject(img)
      setImg(img)
      setCanvas(c)
      setZoom(c.getZoom())
      initScrollEvent(c, img)
      initDragEvent(c, img)
    })
  }

  // 初始化滚轮事件
  const initScrollEvent = (c, img) => {
    c.on('mouse:wheel', (opt) => {
      const delta = opt.e.deltaY
      let z = c.getZoom()
      if (delta > 0) {
        z = z - 0.05
      } else {
        z = z + 0.05
      }
      if (z > 2) z = 2
      if (z < 0.2) z = 0.2
      // c.setZoom(1)
      // const vpw = c.width / z
      // const vph = c.height / z
      // const x = (img.left - vpw / 2)
      // const y = (img.top - vph / 2)
      // c.absolutePan({x:x, y:y})
      // c.setZoom(z)
      const center = img.getCenterPoint()
      c.zoomToPoint({
        x: center.x,
        y: center.y
      }, z)
    })
  }

  // 初始化拖拽
  const initDragEvent = (c, img) => {
    // 按下鼠标
    c.on('mouse:down', (opt) => {
      const center = img.getCenterPoint()
    })
    // 拖拽
    c.on('mouse:move', (opt) => {
      
    })
    // 松开鼠标
    c.on('mouse:up', (opt) => {
      const center = img.getCenterPoint()
      // console.log(img)
    })
  }

  // 初始化
  useEffect(() => {
    setId(uuidv4())
  }, [])

  useEffect(() => {
    if (id !== 1) {
      initCanvas()
    }
  }, [id])


  return (
    <div
      id="canvasWrapper"
    >
      <canvas
        id={`canvas_${id}`}
        width={1500}
        height={1000}></canvas>
        <div>
          {
            canvas && img &&
            <ZoomController
              canvas={canvas}
              img={img}
              zoom={zoom}
              setZoom={setZoom}
            />
          }
        </div>

    </div>
  )
  
}

export default App;
