export interface DishPlace {
  name: string
  address: string
}

export interface Dish {
  name: string
  emoji: string
  description: string
  origin: string
  places?: DishPlace[]
}

export interface Region {
  id: string
  name: string
  nameShort: string
  color: string
  description: string
  dishes: Dish[]
  /** Position on the SVG map (percentage-based) */
  markerX: number
  markerY: number
}
