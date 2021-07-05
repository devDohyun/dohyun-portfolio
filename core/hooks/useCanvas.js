import { useCallback, useEffect, useRef, useState } from 'react'

const useCanvas = () => {
  const canvasRef = useRef(null)
  const [state, setState] = useState({
    width: null,
    height: null,
  })

  const handleResize = useCallback(() => {
    const pixelRatio = window.devicePixelRatio > 1 ? 2 : 1
    const canvas = canvasRef.current

    const width = window.innerWidth * pixelRatio
    const height = window.innerHeight * pixelRatio

    canvas.width = width
    canvas.height = height

    setState((state) => ({ ...state, width, height }))
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  useEffect(() => {
    handleResize()
  }, [canvasRef])

  return [canvasRef, state]
}

export default useCanvas
