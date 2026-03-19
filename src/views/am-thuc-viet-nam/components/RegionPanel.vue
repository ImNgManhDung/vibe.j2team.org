<script setup lang="ts">
import { Icon } from '@iconify/vue'
import type { Region } from '../types'

defineProps<{
  region: Region
}>()

const emit = defineEmits<{
  close: []
}>()
</script>

<template>
  <div class="region-panel">
    <!-- Header -->
    <div class="panel-header">
      <div class="header-top">
        <span
          class="region-badge"
          :style="{ backgroundColor: region.color + '18', color: region.color, borderColor: region.color + '40' }"
        >
          {{ region.nameShort }}
        </span>
        <button
          class="close-btn"
          @click="emit('close')"
        >
          <Icon icon="lucide:x" class="size-5" />
        </button>
      </div>
      <h2 class="region-title font-display">
        {{ region.name }}
      </h2>
      <p class="region-desc">
        {{ region.description }}
      </p>
    </div>

    <!-- Dishes -->
    <div class="dishes-list">
      <div
        v-for="(dish, index) in region.dishes"
        :key="dish.name"
        class="dish-card"
        :style="{ animationDelay: `${index * 60}ms` }"
      >
        <div class="dish-emoji">
          {{ dish.emoji }}
        </div>
        <div class="dish-content">
          <div class="dish-header">
            <h3 class="dish-name font-display">
              {{ dish.name }}
            </h3>
            <span class="dish-origin">
              <Icon icon="lucide:map-pin" class="size-3" />
              {{ dish.origin }}
            </span>
          </div>
          <p class="dish-desc">
            {{ dish.description }}
          </p>
          <!-- Gợi ý địa điểm -->
          <div
            v-if="dish.places && dish.places.length > 0"
            class="dish-places"
          >
            <div class="places-label">
              <Icon icon="lucide:store" class="size-3" />
              Nên thử:
            </div>
            <div
              v-for="place in dish.places"
              :key="place.name"
              class="place-item"
            >
              <span class="place-name">{{ place.name }}</span>
              <span class="place-addr">{{ place.address }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.region-panel {
  background: var(--color-bg-surface);
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.panel-header {
  padding: 0.875rem 1rem;
  border-bottom: 1px solid var(--color-border-default);
  flex-shrink: 0;
}

.header-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.4rem;
}

.region-badge {
  font-family: 'Anybody', sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  padding: 0.25rem 0.75rem;
  border: 1px solid;
}

.close-btn {
  color: var(--color-text-secondary);
  padding: 0.25rem;
  transition: color 0.2s;
  cursor: pointer;
  background: none;
  border: none;
}

.close-btn:hover {
  color: var(--color-text-primary);
}

.region-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: 0.3rem;
}

.region-desc {
  font-size: 0.78rem;
  color: var(--color-text-secondary);
  line-height: 1.5;
}

.dishes-list {
  flex: 1;
  overflow-y: auto;
  padding: 0.5rem 0.75rem 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  scrollbar-width: thin;
  scrollbar-color: rgba(139, 157, 181, 0.2) transparent;
}

.dish-card {
  display: flex;
  gap: 0.625rem;
  padding: 0.625rem 0.75rem;
  border: 1px solid var(--color-border-default);
  background: var(--color-bg-deep);
  transition: all 0.3s ease;
  animation: dish-slide-in 0.4s ease-out both;
}

.dish-card:hover {
  border-color: var(--color-accent-coral);
  background: var(--color-bg-elevated);
  transform: translateX(4px);
}

.dish-emoji {
  font-size: 1.5rem;
  line-height: 1;
  flex-shrink: 0;
  width: 2rem;
  text-align: center;
  padding-top: 0.1rem;
}

.dish-content {
  flex: 1;
  min-width: 0;
}

.dish-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 0.35rem;
  flex-wrap: wrap;
}

.dish-name {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-text-primary);
}

.dish-origin {
  display: inline-flex;
  align-items: center;
  gap: 0.2rem;
  font-size: 0.65rem;
  color: var(--color-text-dim);
  font-family: 'Anybody', sans-serif;
  letter-spacing: 0.05em;
}

.dish-desc {
  font-size: 0.75rem;
  color: var(--color-text-secondary);
  line-height: 1.5;
}

/* Places recommendations */
.dish-places {
  margin-top: 0.4rem;
  padding-top: 0.35rem;
  border-top: 1px dashed rgba(139, 157, 181, 0.15);
}

.places-label {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.65rem;
  font-weight: 600;
  color: var(--color-accent-coral);
  margin-bottom: 0.25rem;
  letter-spacing: 0.02em;
}

.place-item {
  display: flex;
  flex-direction: column;
  padding: 0.2rem 0 0.2rem 0.5rem;
  border-left: 2px solid rgba(255, 107, 74, 0.25);
  margin-bottom: 0.15rem;
}

.place-name {
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--color-text-primary);
}

.place-addr {
  font-size: 0.6rem;
  color: var(--color-text-dim);
  line-height: 1.3;
}

/* Scrollbar styling */
.dishes-list::-webkit-scrollbar {
  width: 4px;
}

.dishes-list::-webkit-scrollbar-track {
  background: transparent;
}

.dishes-list::-webkit-scrollbar-thumb {
  background: var(--color-border-default);
}

.dishes-list::-webkit-scrollbar-thumb:hover {
  background: var(--color-text-dim);
}

@keyframes dish-slide-in {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
