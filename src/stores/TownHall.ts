/**
 * Define types and a global store for townhall data
 * See ../assets/data.json for actual data
 */

import { ref } from 'vue'
import { defineStore } from 'pinia'
import Data from '@/assets/data.json'

/**
 * Interface representing a townhall
 */
export interface TownHall {
    level: number
    image: string
    buildings: Building[] | null
}

/**
 * Interface for townhall buildings
 */
export interface Building {
    name: string
    count: number
    level: number
}

export const useTownHallStore = defineStore('town-hall', () => {
    // Each var stores selected townhall/buildings
    // Its starts with placeholders
    const townhall = ref<TownHall>({ level: 0, image: '', buildings: null })
    const building = ref<Building>({ name: '', count: 0, level: 0 })

    /**
     * Update current townhall to given level
     * @param level Levent to set
     */
    function setTownHall(level: number): void {
        townhall.value = Data[level - 1]
    }

    /**
     * Resets values of townhall for map clear
     */
    function resetTownHall(): void {
        // Restore original townhall
        townhall.value = Data[townhall.value.level - 1]
    }

    /**
     *
     * @param name
     */
    function setBuilding(name: string): void {
        building.value = '1'
    }

    return { townhall, building, setTownHall, resetTownHall, setBuilding }
})
