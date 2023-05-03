import { fabric } from 'fabric'
import { 
    Component, 
    createRef, 
    useImperativeHandle, 
    useRef, 
    forwardRef 
}
from 'react'

class InternalCanvas extends Component {
    containerRef = createRef()

    componentDidMount() {
        
    }

    render() {
        return (
            <div
                ref={this.containerRef}
                id={1}
                className="rde-canvas"
                style={{ width: '100%', height: '100%' }}
            >
                <canvas id={`canvas_${1}`}/>
            </div>
        )
    }
}

const Canvas = forwardRef((props, ref) => {
    const canvasRef = useRef()
    useImperativeHandle(ref, () => ({
        a: 123123
    }))
    return <InternalCanvas ref={canvasRef} {...props}/>
})

export default Canvas