import * as d3 from 'd3'

import { Zoom } from './zoom'
import { terminateEvent } from './utils'

export type GraphHost = d3.Selection<HTMLDivElement, undefined, null, undefined>

export type Canvas = d3.Selection<SVGGElement, undefined, null, undefined>

export interface DefineCanvasParams {
  container: GraphHost
  onDoubleClick?: (event: PointerEvent) => void
  onPointerMoved?: (event: PointerEvent) => void
  onPointerUp?: (event: PointerEvent) => void
  zoom: Zoom
}

export function defineCanvas({
  container,
  onDoubleClick,
  onPointerMoved,
  onPointerUp,
  zoom,
}: DefineCanvasParams): Canvas {
  return container
    .append('svg')
    .attr('height', '100%')
    .attr('width', '100%')
    .call(zoom)
    .on('contextmenu', (event: MouseEvent) => terminateEvent(event))
    .on('dblclick', (event: PointerEvent) => onDoubleClick?.(event))
    .on('dblclick.zoom', null)
    .on('pointermove', (event: PointerEvent) => onPointerMoved?.(event))
    .on('pointerup', (event: PointerEvent) => onPointerUp?.(event))
    .style('cursor', 'grab')
    .append('g')
}

export interface UpdateCanvasParams {
  canvas?: Canvas
  scale: number
  xOffset: number
  yOffset: number
}

export function updateCanvasTransform({
  canvas,
  scale,
  xOffset,
  yOffset,
}: UpdateCanvasParams): void {
  canvas?.attr('transform', `translate(${xOffset},${yOffset})scale(${scale})`)
}
