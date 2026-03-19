<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import type { Region } from '../types'

interface ProvinceData {
  id: string
  name: string
  region: string
  path: string
}

interface MapData {
  viewBox: string
  provinces: ProvinceData[]
}

const props = defineProps<{
  regions: Region[]
  selectedRegionId: string | null
}>()

const emit = defineEmits<{
  selectRegion: [id: string]
}>()

const mapData = ref<MapData | null>(null)
const hoveredRegion = ref<string | null>(null)

onMounted(async () => {
  try {
    const response = await fetch('/am-thuc-viet-nam/vietnam-provinces.json')
    mapData.value = await response.json()
  } catch (e) {
    console.error('Failed to load Vietnam map data:', e)
  }
})

const ISLAND_COLOR = '#5EEAD4'

const regionColorMap = computed(() => {
  const map: Record<string, string> = {}
  for (const region of props.regions) {
    map[region.id] = region.color
  }
  return map
})

const isSelected = computed(() => (id: string) => props.selectedRegionId === id)

const mainlandProvinces = computed(() =>
  mapData.value?.provinces.filter((p) => p.region !== 'islands') ?? [],
)

const islandProvinces = computed(() =>
  mapData.value?.provinces.filter((p) => p.region === 'islands') ?? [],
)

function getProvinceColor(regionId: string) {
  if (regionId === 'islands') return ISLAND_COLOR
  return regionColorMap.value[regionId] || '#253549'
}

function getProvinceFillOpacity(regionId: string) {
  if (regionId === 'islands') return 0.25
  if (isSelected.value(regionId)) return 0.45
  if (hoveredRegion.value === regionId) return 0.3
  return 0.15
}

function getProvinceStrokeOpacity(regionId: string) {
  if (regionId === 'islands') return 0.6
  if (isSelected.value(regionId)) return 0.8
  if (hoveredRegion.value === regionId) return 0.6
  return 0.3
}

function handleProvinceClick(regionId: string) {
  if (regionId === 'islands') return
  emit('selectRegion', regionId)
}

function handleProvinceHover(regionId: string | null) {
  if (regionId === 'islands') return
  hoveredRegion.value = regionId
}
</script>

<template>
  <div class="vietnam-map-container">
    <!-- Loading skeleton -->
    <div v-if="!mapData" class="map-skeleton">
      <div class="skeleton-pulse" />
    </div>

    <svg
      v-else
      :viewBox="mapData.viewBox"
      class="vietnam-svg"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <!-- Glow filter for selected region -->
        <filter id="regionGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <!-- Subtle shadow for the whole map -->
        <filter id="mapShadow" x="-5%" y="-5%" width="110%" height="110%">
          <feDropShadow dx="2" dy="3" stdDeviation="5" flood-color="#000" flood-opacity="0.3" />
        </filter>

        <!-- Pulse animation filter -->
        <filter id="markerGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <!-- Background sea area hint -->
      <rect
        x="0"
        y="0"
        :width="812"
        :height="873"
        fill="transparent"
      />

      <!-- Mainland province paths grouped by region -->
      <g filter="url(#mapShadow)">
        <path
          v-for="province in mainlandProvinces"
          :key="province.id"
          :d="province.path"
          :fill="getProvinceColor(province.region)"
          :fill-opacity="getProvinceFillOpacity(province.region)"
          :stroke="getProvinceColor(province.region)"
          :stroke-opacity="getProvinceStrokeOpacity(province.region)"
          stroke-width="0.8"
          stroke-linejoin="round"
          class="province-path"
          :class="{
            selected: isSelected(province.region),
            hovered: hoveredRegion === province.region,
          }"
          :filter="isSelected(province.region) ? 'url(#regionGlow)' : ''"
          @click="handleProvinceClick(province.region)"
          @mouseenter="handleProvinceHover(province.region)"
          @mouseleave="handleProvinceHover(null)"
        />
      </g>

      <!-- Quần đảo Hoàng Sa & Trường Sa -->
      <g class="islands-group">
        <path
          v-for="island in islandProvinces"
          :key="island.id"
          :d="island.path"
          :fill="ISLAND_COLOR"
          fill-opacity="0.2"
          :stroke="ISLAND_COLOR"
          stroke-opacity="0.5"
          stroke-width="0.5"
          stroke-linejoin="round"
          class="island-path"
        />
        <!-- Island labels -->
        <text
          x="560"
          y="435"
          class="island-label"
          :fill="ISLAND_COLOR"
          font-size="9"
          text-anchor="middle"
        >
          Hoàng Sa
        </text>
        <text
          x="560"
          y="445"
          class="island-sublabel"
          fill="#5EEAD4"
          font-size="6"
          text-anchor="middle"
          opacity="0.6"
        >
          (Việt Nam)
        </text>
        <text
          x="475"
          y="610"
          class="island-label"
          :fill="ISLAND_COLOR"
          font-size="9"
          text-anchor="middle"
        >
          Trường Sa
        </text>
        <text
          x="475"
          y="620"
          class="island-sublabel"
          fill="#5EEAD4"
          font-size="6"
          text-anchor="middle"
          opacity="0.6"
        >
          (Việt Nam)
        </text>
      </g>

      <!-- Region markers with labels -->
      <g
        v-for="region in regions"
        :key="region.id"
        class="region-marker-group"
        :class="{ selected: isSelected(region.id) }"
        @click="emit('selectRegion', region.id)"
        @mouseenter="handleProvinceHover(region.id)"
        @mouseleave="handleProvinceHover(null)"
      >
        <!-- Pulse ring -->
        <circle
          :cx="region.markerX"
          :cy="region.markerY"
          r="12"
          :fill="region.color"
          fill-opacity="0"
          :stroke="region.color"
          stroke-width="1"
          class="pulse-ring"
        />

        <!-- Outer ring -->
        <circle
          :cx="region.markerX"
          :cy="region.markerY"
          :r="isSelected(region.id) ? 10 : 8"
          :fill="region.color"
          :fill-opacity="isSelected(region.id) ? 0.3 : 0.12"
          :stroke="region.color"
          :stroke-width="isSelected(region.id) ? 2 : 1.2"
          class="outer-ring"
        />

        <!-- Inner dot -->
        <circle
          :cx="region.markerX"
          :cy="region.markerY"
          :r="isSelected(region.id) ? 5 : 3.5"
          :fill="region.color"
          class="inner-dot"
        />

        <!-- Region label -->
        <text
          :x="region.markerX + (region.markerX > 300 ? -16 : 16)"
          :y="region.markerY + 3"
          :text-anchor="region.markerX > 300 ? 'end' : 'start'"
          class="region-label"
          :fill="isSelected(region.id) ? region.color : '#8B9DB5'"
          font-size="11"
        >
          {{ region.nameShort }}
        </text>
      </g>
    </svg>
  </div>
</template>

<style scoped>
.vietnam-map-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.vietnam-svg {
  width: auto;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
}

.map-skeleton {
  width: 100%;
  aspect-ratio: 812 / 873;
  display: flex;
  align-items: center;
  justify-content: center;
}

.skeleton-pulse {
  width: 60%;
  height: 80%;
  border-radius: 4px;
  background: linear-gradient(
    110deg,
    rgba(37, 53, 73, 0.3) 8%,
    rgba(37, 53, 73, 0.5) 18%,
    rgba(37, 53, 73, 0.3) 33%
  );
  background-size: 200% 100%;
  animation: skeleton-shimmer 1.5s linear infinite;
}

@keyframes skeleton-shimmer {
  to {
    background-position-x: -200%;
  }
}

.province-path {
  cursor: pointer;
  transition: all 0.35s ease;
}

.province-path:hover {
  fill-opacity: 0.35;
  stroke-opacity: 0.7;
  stroke-width: 1.2;
}

.province-path.selected {
  stroke-width: 1.5;
}

.region-marker-group {
  cursor: pointer;
  transition: all 0.3s ease;
}

.region-marker-group:hover .outer-ring {
  fill-opacity: 0.35;
  stroke-width: 2;
}

.region-marker-group:hover .inner-dot {
  r: 5;
}

.region-marker-group:hover .region-label {
  fill: #f0ede6;
}

.inner-dot {
  transition: all 0.3s ease;
}

.outer-ring {
  transition: all 0.3s ease;
}

.region-label {
  font-family: 'Anybody', sans-serif;
  font-weight: 600;
  letter-spacing: 0.05em;
  pointer-events: none;
  transition: fill 0.3s ease;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
}

.pulse-ring {
  animation: pulse-expand 2.5s ease-out infinite;
}

@keyframes pulse-expand {
  0% {
    r: 4;
    opacity: 0.6;
    stroke-width: 1.2;
  }
  100% {
    r: 18;
    opacity: 0;
    stroke-width: 0;
  }
}

.region-marker-group:nth-child(2) .pulse-ring {
  animation-delay: 0.3s;
}
.region-marker-group:nth-child(3) .pulse-ring {
  animation-delay: 0.6s;
}
.region-marker-group:nth-child(4) .pulse-ring {
  animation-delay: 0.9s;
}
.region-marker-group:nth-child(5) .pulse-ring {
  animation-delay: 1.2s;
}
.region-marker-group:nth-child(6) .pulse-ring {
  animation-delay: 1.5s;
}
.region-marker-group:nth-child(7) .pulse-ring {
  animation-delay: 1.8s;
}
.region-marker-group:nth-child(8) .pulse-ring {
  animation-delay: 2.1s;
}

.island-path {
  pointer-events: none;
}

.island-label {
  font-family: 'Anybody', sans-serif;
  font-weight: 600;
  font-style: italic;
  letter-spacing: 0.08em;
  pointer-events: none;
}

.island-sublabel {
  font-family: 'Be Vietnam Pro', sans-serif;
  font-weight: 400;
  font-style: italic;
  pointer-events: none;
}
</style>
