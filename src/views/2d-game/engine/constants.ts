// Game constants - Single source of truth for all magic numbers
export const CANVAS_WIDTH = 960
export const CANVAS_HEIGHT = 540
export const GRAVITY = 0.5
export const MAP_WIDTH = 3200
export const GROUND_Y = CANVAS_HEIGHT - 48

// Player defaults
export const PLAYER_WIDTH = 28
export const PLAYER_HEIGHT = 40
export const PLAYER_BASE_SPEED = 3
export const PLAYER_JUMP_POWER = -10
export const PLAYER_MAX_HP = 100
export const PLAYER_MAX_MP = 60
export const PLAYER_BASE_ATK = 5
export const PLAYER_MANA_REGEN = 0.02
export const PLAYER_BASE_CRIT = 5

// Physics
export const FRICTION = 0.85
export const MAX_FALL_SPEED = 12
export const MAX_JUMPS = 2

// Combat
export const INVINCIBLE_FRAMES = 30
export const HURT_TIMER_FRAMES = 15
export const CRIT_MULT_DEFAULT = 1.8
export const CRIT_MULT_BURST = 2.2
export const LIFESTEAL_PERCENT = 0.08
export const THORNS_PERCENT = 0.2
export const LIGHTNING_CHANCE = 0.15
export const LIGHTNING_MULT = 0.4
export const MANA_SHIELD_REDUCTION = 0.1

// Spawning
export const MONSTER_SPAWN_INTERVAL = 180 // frames
export const CHEST_DROP_CHANCE = 0.2
export const WEAPON_DROP_CHANCE = 0.15
export const EQUIP_DROP_CHANCE = 0.25
export const CONSUMABLE_DROP_CHANCE = 0.3

// Leveling
export const EXP_GROWTH = 1.5
export const LEVEL_HP_BONUS = 15
export const LEVEL_MP_BONUS = 8
export const LEVEL_ATK_BONUS = 2

// Screen Shake & Hit-stop (keep values LOW to avoid feeling "frozen")
export const SHAKE_INTENSITY_HIT = 2
export const SHAKE_INTENSITY_CRIT = 4
export const SHAKE_INTENSITY_BOSS = 8
export const SHAKE_DECAY = 0.8
export const HITSTOP_FRAMES_NORMAL = 0  // no freeze on normal hits
export const HITSTOP_FRAMES_CRIT = 2    // tiny freeze on crit only
export const HITSTOP_FRAMES_BOSS_PHASE = 8 // brief freeze on boss phase change

// Combo System
export const COMBO_TIMEOUT = 120 // frames before combo resets
export const COMBO_DMG_SCALE = 0.05 // +5% per combo hit
export const COMBO_MAX_MULT = 2.0 // max 2x damage at high combo

// Boss Phases
export const BOSS_PHASE2_HP = 0.6 // enters phase 2 at 60% HP
export const BOSS_PHASE3_HP = 0.25 // enters phase 3 at 25% HP

// Auto-save
export const AUTOSAVE_KEY = 'ninja_quest_save'
export const AUTOSAVE_INTERVAL = 900 // frames (~15s at 60fps)
