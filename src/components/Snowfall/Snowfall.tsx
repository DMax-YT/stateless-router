import { useEffect, useRef } from 'react'

import './Snowfall.css'

const VELOCITY = 4
const COLORS = ['#35aedd', '#94d3e6', '#2070b9', '#8cb4cc', '#d6e4eb']

class Snowflake {
  #ctx: CanvasRenderingContext2D

  #color = 'aqua'
  #size: number = 2
  #position = {
    x: 0,
    y: 0
  }

  #screen = {
    width: 0,
    height: 0
  }

  #previousTime: number = 0
  #offset = Math.random() * 10000

  constructor(context: CanvasRenderingContext2D, width: number, height: number) {
    this.#ctx = context
    this.#screen = {
      width,
      height
    }

    this.#init()
  }

  #init() {
    this.#color = COLORS[Math.floor(Math.random() * COLORS.length)]
    this.#size = 2 + (Math.random() * 8)
    this.#position = {
      x: Math.random() * this.#screen.width,
      y: 0
    }
  }

  onScreenSizeChange(width: number, height: number) {
    this.#screen = {
      width, 
      height
    }

    if (this.#position.x > width) {
      this.#position.x = Math.random() * this.#screen.width
    }
  }

  update(timestamp: number) {
    if (this.#previousTime) {
      this.#previousTime = timestamp
    }

    const deltaTime = performance.now() - timestamp
    this.#position.y += deltaTime * VELOCITY * Math.max(this.#size) / 10
    this.#position.x += Math.cos((timestamp + this.#offset) / 300) / this.#size * 1.5
    this.#previousTime = timestamp

    if (this.#position.y >= this.#screen.height) {
      this.#init()
    }
  }

  draw() {
    this.#ctx.strokeStyle = this.#color
    this.#ctx.fillStyle = this.#color
    this.#ctx.beginPath()
    this.#ctx.arc(this.#position.x, this.#position.y, this.#size, 0, Math.PI * 2)
    this.#ctx.stroke()
    this.#ctx.fill()
  }
}

export const Snowfall = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) {
      return
    }
    const width = window.innerWidth
    const height = window.innerHeight

    const canvas = canvasRef.current
    canvas.width = width
    canvas.height = height

    const ctx = canvas.getContext('2d')
    if (!ctx) {
      return
    }

    const snowflakes = Array.from({ length: 100 }, () => new Snowflake(ctx, width, height))

    let frameRequest: number
    const drawImage = (timestamp: number) => {
      ctx.reset()

      for (const snowflake of snowflakes) {
        snowflake.update(timestamp)
        snowflake.draw()
      }

      frameRequest = requestAnimationFrame(drawImage)
    }
    
    const onScreenSizeChange = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      snowflakes.forEach((s) => s.onScreenSizeChange(window.innerWidth, window.innerHeight))
    }

    window.addEventListener('resize', onScreenSizeChange)
    frameRequest = requestAnimationFrame(drawImage)

    return () => {
      window.removeEventListener('resize', onScreenSizeChange)
      cancelAnimationFrame(frameRequest)
    }
  }, [])

  return <canvas id='snowfall' ref={canvasRef}></canvas>
}
