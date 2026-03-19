<script setup lang="ts">
import { ref, computed } from 'vue'
import { Icon } from '@iconify/vue'
import { useHead } from '@unhead/vue'
import VietnamMap from './components/VietnamMap.vue'
import RegionPanel from './components/RegionPanel.vue'
import { regions } from './data'

useHead({
  title: 'Bản đồ Ẩm thực Việt Nam — vibe.j2team.org',
  meta: [
    {
      name: 'description',
      content:
        'Khám phá ẩm thực 3 miền Việt Nam qua bản đồ tương tác — click vào từng vùng để xem món ngon đặc sản',
    },
  ],
})

const selectedRegionId = ref<string | null>(null)

const selectedRegion = computed(() =>
  regions.find((r) => r.id === selectedRegionId.value),
)

const totalDishes = computed(() =>
  regions.reduce((sum, r) => sum + r.dishes.length, 0),
)

function selectRegion(id: string) {
  selectedRegionId.value = selectedRegionId.value === id ? null : id
}

function closePanel() {
  selectedRegionId.value = null
}
</script>

<template>
  <div class="page-root">
    <!-- Compact Header Bar -->
    <header class="top-bar animate-fade-up">
      <RouterLink to="/" class="back-link">
        <Icon icon="lucide:arrow-left" class="size-4" />
        Trang chủ
      </RouterLink>
      <div class="top-title">
        <h1 class="bar-title font-display">
          Bản đồ Ẩm thực
          <span class="title-accent">Việt Nam</span>
        </h1>
        <span class="bar-stat">
          {{ regions.length }} vùng · {{ totalDishes }} món
        </span>
      </div>
    </header>

    <!-- Full-height main layout -->
    <main class="main-layout animate-fade-up animate-delay-1">
      <!-- Map Column -->
      <div class="map-col">
        <div class="map-wrapper">
          <VietnamMap
            :regions="regions"
            :selected-region-id="selectedRegionId"
            @select-region="selectRegion"
          />
        </div>
      </div>

      <!-- Right Side: Region selector + Panel -->
      <div class="info-col">
        <!-- Region Quick Selector -->
        <div class="region-selector">
          <button
            v-for="region in regions"
            :key="region.id"
            class="region-btn"
            :class="{ active: selectedRegionId === region.id }"
            @click="selectRegion(region.id)"
          >
            <span
              class="btn-dot"
              :style="{ backgroundColor: region.color }"
            />
            <span class="btn-name">{{ region.nameShort }}</span>
          </button>
        </div>

        <!-- Detail Panel -->
        <div class="detail-area">
          <Transition name="panel" mode="out-in">
            <RegionPanel
              v-if="selectedRegion"
              :key="selectedRegion.id"
              :region="selectedRegion"
              @close="closePanel"
            />
            <div v-else class="empty-state">
              <div class="empty-content">
                <span class="empty-icon">🗺️</span>
                <p class="empty-text font-display">
                  Chọn vùng miền trên bản đồ
                </p>
                <p class="empty-hint">
                  <Icon icon="lucide:mouse-pointer-click" class="size-4" />
                  Click vào bản đồ hoặc nút vùng miền phía trên
                </p>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.page-root {
  height: 100vh;
  height: 100dvh;
  background: var(--color-bg-deep);
  color: var(--color-text-primary);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* ===== Top Bar ===== */
.top-bar {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.625rem 1.25rem;
  border-bottom: 1px solid var(--color-border-default);
  background: var(--color-bg-surface);
  flex-shrink: 0;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.8rem;
  color: var(--color-text-secondary);
  transition: all 0.2s;
  text-decoration: none;
  white-space: nowrap;
  flex-shrink: 0;
}

.back-link:hover {
  color: var(--color-accent-coral);
}

.top-title {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  min-width: 0;
}

.bar-title {
  font-size: clamp(0.95rem, 2.5vw, 1.25rem);
  font-weight: 800;
  white-space: nowrap;
  line-height: 1.2;
}

.title-accent {
  background: linear-gradient(135deg, #ff6b4a, #ffb830);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.bar-stat {
  font-size: 0.7rem;
  color: var(--color-text-dim);
  white-space: nowrap;
}

/* ===== Main Layout ===== */
.main-layout {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 0;
  overflow: hidden;
}

/* ===== Map Column ===== */
.map-col {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  overflow: hidden;
  position: relative;
}

.map-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.map-wrapper::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at 40% 50%,
    rgba(255, 107, 74, 0.04) 0%,
    transparent 70%
  );
  pointer-events: none;
}

/* ===== Info Column ===== */
.info-col {
  display: flex;
  flex-direction: column;
  border-left: 1px solid var(--color-border-default);
  min-height: 0;
  overflow: hidden;
}

/* Region selector row */
.region-selector {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  padding: 0.625rem 0.75rem;
  border-bottom: 1px solid var(--color-border-default);
  background: var(--color-bg-surface);
  flex-shrink: 0;
}

.region-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.3rem 0.5rem;
  font-size: 0.7rem;
  font-family: 'Anybody', sans-serif;
  font-weight: 600;
  color: var(--color-text-secondary);
  background: transparent;
  border: 1px solid var(--color-border-default);
  cursor: pointer;
  transition: all 0.2s;
  letter-spacing: 0.03em;
}

.region-btn:hover {
  border-color: var(--color-text-dim);
  color: var(--color-text-primary);
  background: var(--color-bg-elevated);
}

.region-btn.active {
  border-color: var(--color-accent-coral);
  color: var(--color-text-primary);
  background: rgba(255, 107, 74, 0.08);
}

.btn-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
}

.btn-name {
  white-space: nowrap;
}

/* Detail area */
.detail-area {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(139, 157, 181, 0.2) transparent;
}

.detail-area::-webkit-scrollbar {
  width: 4px;
}

.detail-area::-webkit-scrollbar-track {
  background: transparent;
}

.detail-area::-webkit-scrollbar-thumb {
  background: rgba(139, 157, 181, 0.2);
  border-radius: 2px;
}

/* Empty state */
.empty-state {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.empty-content {
  text-align: center;
  padding: 2rem;
}

.empty-icon {
  font-size: 2.5rem;
  display: block;
  margin-bottom: 0.75rem;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}

.empty-text {
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: 0.5rem;
}

.empty-hint {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  font-size: 0.8rem;
  color: var(--color-text-dim);
  animation: gentle-pulse 2s ease-in-out infinite;
}

@keyframes gentle-pulse {
  0%,
  100% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
}

/* Panel transition */
.panel-enter-active {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.panel-leave-active {
  transition: all 0.15s ease-in;
}

.panel-enter-from {
  opacity: 0;
  transform: translateX(12px);
}

.panel-leave-to {
  opacity: 0;
  transform: translateX(-8px);
}

/* ===== Responsive ===== */

/* Tablets / Small laptops */
@media (max-width: 900px) {
  .main-layout {
    grid-template-columns: 42% 58%;
  }
}

/* Tablets portrait & large phones */
@media (max-width: 768px) {
  .page-root {
    height: auto;
    min-height: 100vh;
    min-height: 100dvh;
    overflow: auto;
  }

  .main-layout {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    overflow: visible;
  }

  .map-col {
    padding: 0.5rem;
    height: 45vh;
    height: 45dvh;
    min-height: 280px;
    max-height: 420px;
  }

  .info-col {
    border-left: none;
    border-top: 1px solid var(--color-border-default);
    min-height: 0;
  }

  .detail-area {
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    max-height: none;
  }
}

/* Standard phones (iPhone SE size ~375px to ~430px) */
@media (max-width: 640px) {
  .top-bar {
    padding: 0.5rem 0.75rem;
  }

  .bar-stat {
    display: none;
  }

  .map-col {
    height: 42vh;
    height: 42dvh;
    min-height: 240px;
    max-height: 360px;
  }

  .region-selector {
    padding: 0.5rem;
    gap: 0.25rem;
  }

  .region-btn {
    font-size: 0.65rem;
    padding: 0.2rem 0.4rem;
  }

  .btn-dot {
    width: 5px;
    height: 5px;
  }

  .empty-state {
    min-height: 180px;
  }

  .empty-icon {
    font-size: 2rem;
  }

  .empty-text {
    font-size: 0.9rem;
  }

  .empty-hint {
    font-size: 0.75rem;
  }
}

/* Small phones (iPhone SE / Galaxy S) */
@media (max-width: 480px) {
  .map-col {
    height: 38vh;
    height: 38dvh;
    min-height: 220px;
    max-height: 300px;
    padding: 0.25rem;
  }

  .region-selector {
    padding: 0.375rem;
    gap: 0.2rem;
  }

  .region-btn {
    font-size: 0.6rem;
    padding: 0.18rem 0.35rem;
  }
}

/* Very small phones (iPhone SE 1st gen, Galaxy Fold) */
@media (max-width: 380px) {
  .bar-title {
    font-size: 0.85rem;
  }

  .map-col {
    height: 35vh;
    height: 35dvh;
    min-height: 200px;
    max-height: 260px;
  }

  .region-btn {
    font-size: 0.55rem;
    padding: 0.15rem 0.3rem;
  }

  .btn-dot {
    width: 4px;
    height: 4px;
  }
}

/* Landscape phones */
@media (max-height: 500px) and (orientation: landscape) {
  .page-root {
    height: auto;
    min-height: 100vh;
    min-height: 100dvh;
    overflow: auto;
  }

  .main-layout {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    min-height: 70vh;
  }

  .map-col {
    height: auto;
    min-height: 0;
    max-height: none;
  }

  .info-col {
    border-left: 1px solid var(--color-border-default);
    border-top: none;
  }
}
</style>
