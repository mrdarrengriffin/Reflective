import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useEnergyStore = defineStore("energy", () => {
    return {
        data: {
            current_demand: {
                entity_id:
                    "sensor.octopus_energy_electricity_redacted_current_demand",
                state: "304.0",
                attributes: {
                    state_class: "measurement",
                    last_updated_timestamp: "2023-11-21T20:36:22.884470+00:00",
                    unit_of_measurement: "W",
                    device_class: "power",
                    icon: "mdi:lightning-bolt",
                    friendly_name: "Current Demand",
                },
                last_changed: "2023-11-21T20:36:22.889970+00:00",
                last_updated: "2023-11-21T20:36:22.889970+00:00",
                context: {
                    id: "redacted",
                    parent_id: null,
                    user_id: null,
                },
            },
            current_accumulative_consumption: {
                entity_id:
                    "sensor.octopus_energy_electricity_redacted_current_accumulative_consumption",
                state: "7.918",
                attributes: {
                    state_class: "total",
                    last_reset: "2023-11-21T00:00:00+00:00",
                    mpan: "redacted",
                    serial_number: "redacted",
                    is_export: false,
                    is_smart_meter: true,
                    total: 7.918,
                    last_calculated_timestamp: "2023-11-21T21:00:00+00:00",
                    unit_of_measurement: "kWh",
                    device_class: "energy",
                    icon: "mdi:lightning-bolt",
                    friendly_name: "Current Accumulative Consumption",
                },
                last_changed: "2023-11-21T20:38:24.766291+00:00",
                last_updated: "2023-11-21T20:38:24.766291+00:00",
                context: {
                    id: "redacted",
                    parent_id: null,
                    user_id: null,
                },
            },
            current_rate: {
                entity_id:
                    "sensor.octopus_energy_electricity_redacted_current_rate",
                state: "0.27931995",
                attributes: {
                    state_class: "total",
                    mpan: "redacted",
                    serial_number: "redacted",
                    is_export: false,
                    is_smart_meter: true,
                    tariff: "redacted",
                    valid_from: "2023-11-21T19:00:00+00:00",
                    valid_to: "2023-11-22T04:00:00+00:00",
                    is_capped: false,
                    is_intelligent_adjusted: false,
                    current_day_min_rate: 16.759155,
                    current_day_max_rate: 44.69115,
                    current_day_average_rate: 27.233679374999983,
                    unit_of_measurement: "GBP/kWh",
                    device_class: "monetary",
                    icon: "mdi:currency-gbp",
                    friendly_name: "Current Rate",
                },
                last_changed: "2023-11-21T19:00:00.682097+00:00",
                last_updated: "2023-11-21T19:00:00.682097+00:00",
                context: {
                    id: "redacted",
                    parent_id: null,
                    user_id: null,
                },
            },
            current_accumulative_cost: {
                entity_id:
                    "sensor.octopus_energy_electricity_redacted_current_accumulative_cost",
                state: "2.88",
                attributes: {
                    state_class: "total",
                    last_reset: "2023-11-21T00:00:00+00:00",
                    mpan: "redacted",
                    serial_number: "redacted",
                    is_export: false,
                    is_smart_meter: true,
                    tariff_code: "",
                    standing_charge: "42.013125p",
                    total_without_standing_charge: "£2.46",
                    total: "£2.88",
                    last_calculated_timestamp: "2023-11-21T21:00:00+00:00",
                    unit_of_measurement: "GBP",
                    device_class: "monetary",
                    icon: "mdi:currency-gbp",
                    friendly_name: "Current Accumulative Cost",
                },
                last_changed: "2023-11-21T20:42:28.896287+00:00",
                last_updated: "2023-11-21T20:42:28.896287+00:00",
                context: {
                    id: "redacted",
                    parent_id: null,
                    user_id: null,
                },
            },
        },
    };
});
