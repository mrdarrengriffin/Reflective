<script setup lang="ts">
import { ref } from 'vue';
import { useEnergyStore } from '@/stores/home-assistant/energy';
const energyStore = useEnergyStore();

let max = 1000;
let value = 450;
let percent = (value / max) * 300;

</script>

<template>
    <div class="energy">
        <div class="energy-now">
            <div class="label">Now</div>
            <div class="stats">
                <div class="stat">
                    133<span>W</span>
                </div>
                <div class="stat">
                    £0.279<span>/kWh</span>
                </div>
            </div>
        </div>
        <div class="energy-today">
            <div class="label">Today</div>
            <div class="stats">
                <div class="stat">
                    5.146<span>kWh</span>
                </div>
                <div class="stat">
                    £1.76
                </div>
            </div>
        </div>
        <div class="energy-bar">
            <div class="low" :style="{ '--fill': (percent - 0) + '%' }"></div>
            <div class="medium" :style="{ '--fill': (percent - 100) + '%' }"></div>
            <div class="high" :style="{ '--fill': (percent - 200) + '%' }"></div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.energy {
    display: flex;
    flex-direction: column;
    line-height: 10px;
    gap: .75rem;
    font-weight: 700;
    max-width: 12rem;

    .energy-bar {
        display: flex;

        gap: .25rem;

        .low,
        .medium,
        .high {
            --fill: 0%;
            flex-grow: 1;
            flex-shrink: 0;
            height: 1rem;
            background-color: #141414;
            border-radius: 2px;
            overflow: hidden;
            position: relative;

            &:before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                // width min max between 0 and 100% of the parent
                width: min(max(var(--fill), 0%), 100%);
                transition: width 1s ease-in-out;
            }
        }

        .low:before {
            background-color: #6AE176;
        }

        .medium:before {
            background-color: #F9CE60;
        }

        .high:before {
            background-color: #FF6969;
        }
    }

    .energy-now, .energy-today{
        display: flex;
        font-size: 14px;
        
        .label{
            flex-grow: 1;
            font-size: 12px;
            color: color-mix(in srgb, #ffffff 50%, transparent);
        }
        
        .stats{
            display: flex;
            gap: .5rem;

            .stat{
                display: flex;
                gap: 2px;
                align-items: flex-end;
            }
        }

        span{
            font-size: 12px;
            color: color-mix(in srgb, #ffffff 50%, transparent);
            line-height: 8px;
        }
    }

}
</style>
