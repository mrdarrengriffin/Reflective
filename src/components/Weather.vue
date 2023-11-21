<script setup lang="ts">
import { getDayName } from '@/helpers/date';
import WeatherIcon from './WeatherIcon.vue';
import { useWeatherStore } from '@/stores/home-assistant/weather';
const weatherStore = useWeatherStore();
defineProps<{
    weekInfo: 'temperature' | 'wind';
    showWeekInfo: boolean;
    temperature: number;
    temperatureUnit: 'C' | 'F';
}>()
</script>

<template>
    <div class="weather">
        <div class="today">
            <div class="detail">
                <div class="temperature">
                    {{ temperature }}
                    <span class="unit">
                        &deg;{{ temperatureUnit }}
                    </span>
                </div>
                <div class="description">
                    Partly Cloudy
                </div>
            </div>
            <WeatherIcon icon="partly_cloudy_day"></WeatherIcon>
        </div>
        <div class="forecast" :class="{ 'forecast--reverse-animation': !showWeekInfo }">
            <div class="day" v-for="day in weatherStore.data.attributes.forecast" :key="day.datetime"
                :class="{ visible: showWeekInfo }">
                <div class="day-name">
                    {{ getDayName(new Date(day.datetime).getDay()) }}
                </div>
                <WeatherIcon :icon="weatherStore.helpers.getIcon(day.condition)"></WeatherIcon>
                <div class="temperature">
                    {{ day.temperature.toFixed(1) }}
                    <span class="unit">
                        &deg;{{ temperatureUnit }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.weather {
    align-items: flex-end;
    display: flex;
    gap: 1.5rem;
    flex-direction: column;

    .forecast {
        align-items: flex-end;
        display: flex;
        flex-direction: column;
        gap: .625rem;


        .day {
            display: flex;
            gap: 1rem;
            opacity: 0;
            font-weight: 500;

            .weather-icon {
                width: 24px;
                height: 24px;
            }

            transition: opacity 1s ease-in-out;

            &.visible {
                opacity: 1;

                @for $i from 1 through 7 {
                    &:nth-child(#{$i}) {
                        transition-delay: #{$i * 300}ms;
                    }
                }
            }

            @for $i from 1 through 7 {
                &:nth-child(#{$i}) {
                    transition-delay: #{(7 * 300) - ($i * 300)}ms;
                }
            }
        }
    }

    .today {
        display: flex;
        gap: .5rem;

        .detail {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-end;
            gap: .5rem;

            .description {
                line-height: 16px;
                font-weight: 600;
                font-size: 16px;
            }

            .temperature {
                display: flex;
                align-items: flex-start;
                font-size: 36px;
                line-height: 26px;
                font-weight: 700;
                width: 55px;

                span.unit {
                    font-size: 18px;
                    font-weight: 600;
                    line-height: 10px;
                    color: color-mix(in srgb, white 50%, transparent);
                }
            }
        }
    }
}

@keyframes fade-in {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}</style>
