import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useSunStore = defineStore("sun", () => {
    return {
        data: {
            "entity_id": "sun.sun",
            "state": "above_horizon",
            "attributes": {
                "next_dawn": "2023-11-22T06:53:14.035382+00:00",
                "next_dusk": "2023-11-21T16:37:09.779906+00:00",
                "next_midnight": "2023-11-21T23:44:57+00:00",
                "next_noon": "2023-11-22T11:44:48+00:00",
                "next_rising": "2023-11-22T07:33:09.268686+00:00",
                "next_setting": "2023-11-21T15:57:25.659839+00:00",
                "elevation": 2.28,
                "azimuth": 232.46,
                "rising": false,
                "friendly_name": "Sun"
            },
            "last_changed": "2023-11-21T07:31:26.829828+00:00",
            "last_updated": "2023-11-21T15:34:35.584697+00:00",
            "context": {
                "id": "",
                "parent_id": null,
                "user_id": null
            }
        }
    };
});
