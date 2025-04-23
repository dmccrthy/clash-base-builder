/**
 * Defines structure of base data.
 * See ../assets/data.json for usage
 */

/**
 * Interface representing a townhall
 *  level -
 *  image -
 *  buildings - Object containing building allowed at level
 */
export interface TownHall {
    level: number
    image: string
    buildings: Building[]
}

/**
 *
 */
export interface Building {
    name: string
    count: number
    level: number
}
