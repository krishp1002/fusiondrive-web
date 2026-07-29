"use client"

import { BrainCircuit, Camera, CircuitBoard, Cpu, Move3D, PlugZap, Zap } from "lucide-react"
import type { ComponentType } from "react"
import { useMemo, useState } from "react"

import { cn } from "@/lib/utils"
import { ecosystemLinks, ecosystemNodes } from "@/lib/site-content"

const nodeIcons: Record<string, ComponentType<{ className?: string }>> = {
  "fusiondrive-core": Cpu,
  ai: BrainCircuit,
  vision: Camera,
  motion: Move3D,
  embedded: CircuitBoard,
  "sensors-power": Zap,
  sdk: PlugZap,
}

export function EcosystemMap() {
  const [activeNodeId, setActiveNodeId] = useState<string>("fusiondrive-core")

  const pointsById = useMemo(() => {
    const map = new Map<string, { x: number; y: number }>()
    for (const node of ecosystemNodes) {
      map.set(node.id, { x: node.x, y: node.y })
    }
    return map
  }, [])

  const activeNode =
    ecosystemNodes.find((node) => node.id === activeNodeId) ?? ecosystemNodes[0]

  return (
    <div className="space-y-6">
      <div className="fd-ecosystem-map">
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {ecosystemLinks.map(([startId, endId]) => {
            const start = pointsById.get(startId)
            const end = pointsById.get(endId)

            if (!start || !end) {
              return null
            }

            return (
              <line
                key={`${startId}-${endId}`}
                x1={start.x}
                y1={start.y}
                x2={end.x}
                y2={end.y}
                className="fd-ecosystem-link"
              />
            )
          })}
        </svg>

        {ecosystemNodes.map((node) => {
          const Icon = nodeIcons[node.id] ?? Cpu
          const isActive = activeNodeId === node.id

          return (
            <button
              key={node.id}
              type="button"
              className={cn("fd-ecosystem-node", isActive && "fd-ecosystem-node-active")}
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
              }}
              onMouseEnter={() => setActiveNodeId(node.id)}
              onFocus={() => setActiveNodeId(node.id)}
              aria-label={`${node.title}: ${node.description}`}
            >
              <span className="fd-ecosystem-node-icon">
                <Icon className="size-4" aria-hidden="true" />
              </span>
              <span className="fd-ecosystem-node-label">{node.title}</span>
              {node.status === "coming-soon" && (
                <span className="fd-node-status">Coming Soon</span>
              )}
            </button>
          )
        })}
      </div>

      <div className="rounded-2xl border border-white/15 bg-white/[0.03] p-4 sm:p-5">
        <p className="text-xs font-semibold tracking-[0.14em] text-cyan-300 uppercase">
          Node Focus
        </p>
        <h3 className="mt-2 text-lg font-semibold text-white">{activeNode.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-300">
          {activeNode.description}
        </p>
      </div>
    </div>
  )
}