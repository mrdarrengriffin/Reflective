import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useWeatherStore = defineStore("weather", () => {
    return {
        helpers: {
            getIcon(condition: string) {
                if(!condition) return;
                
                const conditionMapping = {
                    "clear-night": "clear_night",
                    "cloudy": "cloudy",
                    "fog": "haze_fog_dust_smoke",
                    "hail": "sleet_hail",
                    "lightning": "strong_thunderstorms",
                    "lightning-rainy": "isolated_thunderstorms",
                    "partlycloudy": "partly_cloudy_day",
                    "pouring": "heavy_rain",
                    "rainy": "showers_rain",
                    "snowy": "showers_snow",
                    "snowy-rainy": "mixed_rain_snow",
                    "sunny": "clear_day",
                    "windy": "windy",
                    "windy-variant": "blowing_snow",
                    "exceptional": "mostly_clear_day",
                } as {[key: string]: string};
                
                if(Object.keys(conditionMapping).includes(condition)) {
                    return conditionMapping[condition];
                }
            },
        },
        data: {
            entity_id: "weather.forecast",
            state: "cloudy",
            attributes: {
                temperature: 10.0,
                dew_point: 6.1,
                temperature_unit: "°C",
                humidity: 77,
                cloud_coverage: 100.0,
                pressure: 1025.5,
                pressure_unit: "hPa",
                wind_bearing: 18.0,
                wind_speed: 28.4,
                wind_speed_unit: "km/h",
                visibility_unit: "km",
                precipitation_unit: "mm",
                forecast: [
                    {
                        condition: "cloudy",
                        datetime: "2023-11-21T12:00:00+00:00",
                        wind_bearing: 18.0,
                        temperature: 10.0,
                        templow: 3.9,
                        wind_speed: 28.4,
                        precipitation: 0.0,
                        humidity: 77,
                    },
                    {
                        condition: "cloudy",
                        datetime: "2023-11-22T12:00:00+00:00",
                        wind_bearing: 243.0,
                        temperature: 10.7,
                        templow: 2.3,
                        wind_speed: 24.1,
                        precipitation: 0.0,
                        humidity: 79,
                    },
                    {
                        condition: "partlycloudy",
                        datetime: "2023-11-23T12:00:00+00:00",
                        wind_bearing: 263.9,
                        temperature: 13.4,
                        templow: 8.1,
                        wind_speed: 33.1,
                        precipitation: 0.4,
                        humidity: 75,
                    },
                    {
                        condition: "sunny",
                        datetime: "2023-11-24T12:00:00+00:00",
                        wind_bearing: 312.9,
                        temperature: 7.7,
                        templow: 4.0,
                        wind_speed: 32.8,
                        precipitation: 0.0,
                        humidity: 59,
                    },
                    {
                        condition: "partlycloudy",
                        datetime: "2023-11-25T12:00:00+00:00",
                        wind_bearing: 311.9,
                        temperature: 5.3,
                        templow: 1.6,
                        wind_speed: 23.0,
                        precipitation: 0.0,
                        humidity: 71,
                    },
                    {
                        condition: "cloudy",
                        datetime: "2023-11-26T12:00:00+00:00",
                        wind_bearing: 271.7,
                        temperature: 6.0,
                        templow: 0.1,
                        wind_speed: 15.1,
                        precipitation: 3.5,
                        humidity: 73,
                    },
                ],
                attribution:
                    "Weather forecast from met.no, delivered by the Norwegian Meteorological Institute.",
                friendly_name: "Forecast",
                supported_features: 3,
            },
            last_changed: "2023-11-21T10:28:14.870216+00:00",
            last_updated: "2023-11-21T14:44:14.904779+00:00",
            context: {
                id: "",
                parent_id: null,
                user_id: null,
            },
        },
    };
});
