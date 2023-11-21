import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useSpotifyStore = defineStore("spotify", () => {
    return {
        data: {
            entity_id: "media_player.spotify_darren_griffin",
            state: "playing",
            attributes: {
                source_list: ["steamdeck", "Pixel 7"],
                volume_level: 0.59,
                media_content_id: "spotify:track:2AyGe2TYtgvJ7xyM3db0jH",
                media_content_type: "music",
                media_duration: 111.818,
                media_position: 9.786,
                media_position_updated_at: "2023-11-21T15:32:51.319476+00:00",
                media_title: "Fresher Scents",
                media_artist: "Nokawa",
                media_album_name: "Fresher Scents",
                media_track: 1,
                media_playlist: "Level Up Lofi",
                source: "steamdeck",
                shuffle: false,
                repeat: "all",
                entity_picture: "https://picsum.photos/640",
                icon: "mdi:spotify",
                friendly_name: "Spotify Darren Griffin",
                supported_features: 444983,
            },
            last_changed: "2023-11-21T14:30:51.149340+00:00",
            last_updated: "2023-11-21T15:32:51.320851+00:00",
            context: {
                id: "",
                parent_id: null,
                user_id: null,
            },
        },
    };
});
