import { useCallback, useEffect, useMemo } from 'react'
import { useCanvas } from '@/core/hooks'
import style from './Wave.module.scss'

const AnimateWave = ({ progress = 0 }) => {
  const [canvasRef, { width: canvasWidth, height: canvasHeight }] = useCanvas()
  const canvasHypotenuse = useMemo(() => {
    return Math.sqrt(Math.pow(canvasWidth, 2) + Math.pow(canvasHeight, 2))
  }, [canvasWidth, canvasHeight])
  const drawCanvas = useCallback(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    const radius = canvasHypotenuse * progress

    context.fillStyle = 'white'
    context.fillRect(0, 0, canvas.width, canvas.height)

    context.fillStyle = 'black'
    context.strokeStyle = 'black'
    context.beginPath()
    context.arc(canvas.width, canvas.height, radius, 0, 180)
    context.fill()
    context.closePath()
  }, [progress, canvasHypotenuse])

  useEffect(() => {
    if (progress < 0 || progress > 1) return

    requestAnimationFrame(drawCanvas)
  }, [progress])

  return (
    <div className={style.wave}>
      <canvas ref={canvasRef} className={style.canvas}></canvas>
    </div>
  )
}

export default AnimateWave
