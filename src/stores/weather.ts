import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useWeatherStore = defineStore("weather", () => {
    return {
        forecast: [
            {
                day: "Tuesday",
                icon: "mostly_cloudy_day",
                temperature: 13,
            },
            {
                day: "Wednesday",
                icon: "drizzle",
                temperature: 11,
            },
            {
                day: "Thursday",
                icon: "scattered_showers_day",
                temperature: 10,
            },
            {
                day: "Friday",
                icon: "mostly_cloudy_day",
                temperature: 12,
            },
            {
                day: "Saturday",
                icon: "cloudy",
                temperature: 10,
            },
            {
                day: "Sunday",
                icon: "clear_day",
                temperature: 13,
            },
        ],
    };
});
