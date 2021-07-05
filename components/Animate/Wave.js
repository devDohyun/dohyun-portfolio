import { useCallback, useEffect } from 'react'
import { useCanvas } from '@/core/hooks'
import style from './Wave.module.scss'

const AnimateWave = (progress = 0) => {
  const [canvasRef] = useCanvas()
  const drawCanvas = useCallback(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
  }, [progress])

  useEffect(() => {
    requestAnimationFrame(drawCanvas)
  }, [progress])

  return (
    <div className={style.wave}>
      <canvas ref={canvasRef} className={style.canvas}></canvas>
    </div>
  )
}

export default AnimateWave
