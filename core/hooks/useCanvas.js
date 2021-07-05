import { useCallback, useEffect, useRef } from 'react'

const useCanvas = () => {
  const canvasRef = useRef(null)
  const handleResize = useCallback(() => {
    const pixelRatio = window.devicePixelRatio > 1 ? 2 : 1
    const canvas = canvasRef.current

    canvas.width = window.innerWidth * pixelRatio
    canvas.height = window.innerHeight * pixelRatio
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

  return [canvasRef]
}

export default useCanvas
