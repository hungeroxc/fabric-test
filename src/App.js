import { fabric } from 'fabric'
import { useState, useEffect } from 'react'

import ZoomController from './ZoomController'

const url = "https://img.ixintu.com/download/jpg/201910/f4d4228a35aa7fd350c058863a4cb4c2.jpg"

const App = () => {
  // canvas实例
  const [canvas, setCanvas] = useState(null)
  // img实例
  const [img, setImg] = useState(null)
  // 中心点
  // const [centerX, setCenterX] = useState(0)
  // const [centerY, setCenterY] = useState(0)

  // 初始化画布
  const initCanvas = () => {
    const c = new fabric.Canvas('canvas')
    fabric.Image.fromURL(url, img => {
      c.selection = false
      img.set('hasBorders', false)
      img.set('hasControls', false)
      c.add(img)
      c.setBackgroundColor('#d8dcd8')
      c.centerObject(img)
      setImg(img)
      setCanvas(c)
      initScrollEvent(c, img)
      initDragEvent(c, img)
    })
  }

  // 初始化滚轮事件
  const initScrollEvent = (c, img) => {
    c.on('mouse:wheel', (opt) => {
      const delta = opt.e.deltaY
      let zoom = c.getZoom()
      if (delta > 0) {
        zoom = zoom - 0.05
      } else {
        zoom = zoom + 0.05
      }
      if (zoom > 2) zoom = 2
      if (zoom < 0.2) zoom = 0.2
      const center = img.getCenterPoint()
      c.zoomToPoint({
        x: center.x,
        y: center.y
      }, zoom)
    })
  }

  // 初始化拖拽
  const initDragEvent = (c, img) => {
    // // 按下鼠标
    // c.on('mouse:down', (opt) => {
    //   setViewPort(c.viewportTransform)
    // })
    // // 拖拽
    // c.on('mouse:move', (opt) => {
    //   setViewPort(c.viewportTransform)
    // })
    // // 松开鼠标
    // c.on('mouse:up', (opt) => {
    //   setViewPort(c.viewportTransform)
    // })
  }

  // 初始化
  useEffect(() => {
    initCanvas()
  }, [])


  return (
    <div
      id="canvasWrapper"
      style={{ display: 'flex' }}
    >
      <canvas
        id="canvas"
        width={1500}
        height={1000}></canvas>
        {
          canvas && img &&
          <ZoomController
            canvas={canvas}
            img={img}
          />
        }
    </div>
  )
  
}

export default App;
