import type { Graph, GraphConfig, GraphController } from 'd3-graph-controller'
import { defineGraph, defineGraphConfig } from 'd3-graph-controller'
import type { DemoLink } from 'demo/src/link'
import { links } from 'demo/src/link'
import type { DemoNode } from 'demo/src/node'
import { nodes } from 'demo/src/node'

export type DemoType = 'primary' | 'secondary'

export type DemoGraph = Graph<DemoType, DemoNode, DemoLink>

export const demoGraph: DemoGraph = defineGraph({
  nodes: Object.values(nodes),
  links: Object.values(links),
})

export type DemoGraphController = GraphController<DemoType, DemoNode, DemoLink>

export type DemoGraphConfig = GraphConfig<DemoType, DemoNode, DemoLink>

export const demoGraphConfig: DemoGraphConfig = defineGraphConfig<
  DemoType,
  DemoNode,
  DemoLink
>({
  autoResize: true,
  nodeRadius: (node: DemoNode) => node.radiusMultiplier * 32,
  simulation: {
    forces: {
      collision: {
        radiusMultiplier: 4,
      },
      link: {
        length: (link: DemoLink) => link.weight * 128,
      },
    },
  },
})
