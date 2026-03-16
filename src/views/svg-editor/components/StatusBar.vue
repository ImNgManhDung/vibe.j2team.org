<script setup lang="ts">
import type { ToolType } from '../types'

defineProps<{
  activeTool: ToolType
  elementCount: number
  zoom: number
}>()
</script>

<template>
  <footer class="border-t border-border-default bg-bg-surface/95 backdrop-blur-sm px-4 py-1 flex items-center justify-between text-[10px] text-text-dim font-mono">
    <div class="flex items-center gap-4">
      <span>Tool: <span class="text-accent-coral font-semibold">{{ activeTool }}</span></span>
      <span>Elements: <span class="text-accent-amber">{{ elementCount }}</span></span>
      <span>Canvas: <span class="text-text-secondary">800 × 600</span></span>
      <span>Zoom: <span class="text-accent-sky">{{ Math.round(zoom * 100) }}%</span></span>
    </div>
    <div class="hidden sm:flex items-center gap-2">
      <span><span class="text-accent-sky">V</span> Select</span>
      <span><span class="text-accent-sky">R</span> Rect</span>
      <span><span class="text-accent-sky">C</span> Circle</span>
      <span><span class="text-accent-sky">L</span> Line</span>
      <span><span class="text-accent-sky">P</span> Path</span>
      <span><span class="text-accent-sky">T</span> Text</span>
      <span class="ml-1"><span class="text-accent-amber">⌘Z</span> Undo</span>
      <span><span class="text-accent-amber">Del</span> Xoá</span>
    </div>
  </footer>
</template>
