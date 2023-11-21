import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useMotionStore = defineStore("motion", () => {
    return {
            "entity_id": "sensor.office_motion_illuminance_5",
            "state": "10",
            "attributes": {
                "state_class": "measurement",
                "unit_of_measurement": "lx",
                "device_class": "illuminance",
                "friendly_name": "Office Motion Illuminance"
            },
            "last_changed": "2023-11-21T16:38:55.923806+00:00",
            "last_updated": "2023-11-21T16:38:55.923806+00:00",
            "context": {
                "id": "",
                "parent_id": null,
                "user_id": null
            }
        
    };
});
