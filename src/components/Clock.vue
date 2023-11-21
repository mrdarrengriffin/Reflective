<script setup lang="ts">
import { ref } from 'vue';
import { getOrdinal, getDayName, getMonthName } from '@/helpers/date';
import { sunriseIcon, sunsetIcon } from '@/helpers/icons';
import Icon from './Icon.vue';

defineProps({
    showSunTimes: {
        type: Boolean,
        default: false,
    },
    showDate: {
        type: Boolean,
        default: false,
    },
    showSeconds: {
        type: Boolean,
        default: false,
    },
    blinkSeparator: {
        type: Boolean,
        default: false,
    }
});


let date = ref({
    day: 0,
    month: 0,
    year: 2023,
    date: 1,
})

let time = ref({
    hours: '00' as (string | number),
    minutes: '00' as (string | number),
    seconds: '00' as (string | number),
});

function getDateTime() {
    const now = new Date();

    // pad all with leading 0 if less than 10
    let hours = now.getHours() < 10 ? `0${now.getHours()}` : now.getHours();
    let minutes = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
    let seconds = now.getSeconds() < 10 ? `0${now.getSeconds()}` : now.getSeconds();

    time.value = {
        hours,
        minutes,
        seconds,
    }

    date.value = {
        day: now.getDay(),
        month: now.getMonth(),
        date: now.getDate(),
        year: now.getFullYear(),
    }
}

getDateTime();
setInterval(getDateTime, 1000);

</script>

<template>
    <div class="clock">
        <div class="time">
            {{ time.hours }}
            <span class="separator" :class="{ 'separator--blink': blinkSeparator }">:</span>
            {{ time.minutes }}
            <span class="seconds" :class="{ visible: showSeconds }">{{ time.seconds }}</span>
        </div>
        <div class="sun-times" :class="{ visible: showSunTimes }">
            <div class="sunrise">
                <Icon :icon="sunriseIcon" />
                <span>07:31</span>
            </div>
            <div class="sunset">
                <Icon :icon="sunsetIcon" />
                <span>15:59</span>
            </div>
        </div>
        <div class="date" :class="{ visible: showDate }">
            {{ getDayName(date.day) }} {{ date.date }}{{ getOrdinal(date.date) }} {{ getMonthName(date.month) }} {{
                date.year }}
        </div>
    </div>
</template>

<style scoped lang="scss">
.clock {
    display: flex;
    flex-direction: column;
    gap: .625rem;
}

.time {
    display: flex;
    line-height: .75;
    font-size: 3rem;
    align-items: flex-end;
    font-weight: 700;

    span.separator {
        color: color-mix(in srgb, #ffffff 50%, transparent);

        &.separator--blink {
            animation: blink 2s infinite linear;
        }
    }

    span.seconds {
        color: color-mix(in srgb, #ffffff 50%, transparent);
        font-size: 1.25rem;
        font-weight: 600;
        margin-left: 4px;
        opacity: 0;
        transition: opacity 1s ease-in-out;
        transition-delay: 600ms;
        &.visible {
            transition-delay: 0ms;
            opacity: 1;
        }
    }
}

.date {
    font-weight: 600;
    line-height: .75;
    opacity: 0;
    transition: opacity 1s ease-in-out;
    &.visible {
        opacity: 1;
        transition-delay: 600ms;
    }
}

.sun-times {
    align-items: center;
    display: flex;
    font-weight: 600;
    gap: 1rem;
    opacity: 0;
    transition: opacity 1s ease-in-out;
    transition-delay: 300ms;
    
    
    &.visible {
        opacity: 1;
        transition-delay: 300ms;
    }

    i.icon {
        color: color-mix(in srgb, #ffffff 50%, transparent);
    }

    .sunrise,
    .sunset {
        display: flex;
        align-items: center;
        gap: .375rem
    }
}

@keyframes blink {

    0%,
    50% {
        opacity: 0;
    }

    51%,
    100% {
        opacity: 1;
    }
}
</style>
