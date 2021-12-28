import { DemoLink, links } from '@demo/src/link'
import { DemoNode, nodes } from '@demo/src/node'
import { defineGraphConfig, GraphConfig } from '@src/config/config'
import { Graph } from '@src/model/graph'
import { GraphController } from 'src/controller'

export type DemoType = 'primary' | 'secondary'

export type DemoGraph = Graph<DemoType, DemoNode, DemoLink>

export const demoGraph: DemoGraph = {
  nodes: Object.values(nodes),
  links: Object.values(links),
}

export type DemoGraphController = GraphController<DemoType, DemoNode, DemoLink>

export type DemoGraphConfig = GraphConfig<DemoType, DemoNode, DemoLink>

export const demoGraphConfig: DemoGraphConfig = defineGraphConfig<
  DemoType,
  DemoNode,
  DemoLink
>({
  getNodeRadius(node: DemoNode): number {
    return node.radiusMultiplier * 32
  },
  getLinkLength(link: DemoLink): number {
    return link.weight * 128
  },
})