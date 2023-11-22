<script setup lang="ts">
import { ref } from 'vue';
import { useSpotifyStore } from '@/stores/home-assistant/spotify';
import { spotifyIcon } from '@/helpers/icons';
const spotifyStore = useSpotifyStore();

defineProps<{
    size: 'default' | 'compact';
}>()

</script>

<template>
    <div class="spotify">
        <div class="speaker">
            <div class="speaker-name">
                {{ spotifyStore.data.attributes.source.split(' ').map((word) => word[0].toUpperCase() +
                    word.slice(1)).join(' ') }}
            </div>
            <div class="icon" v-html="spotifyIcon"></div>
        </div>
        <div class="song">
            <div class="song-details">
                <div class="song-title">{{ spotifyStore.data.attributes.media_title }}</div>
                <div class="song-artist">{{ spotifyStore.data.attributes.media_artist }}</div>
            </div>
            <div class="song-album-cover">
                <img :src="spotifyStore.data.attributes.entity_picture">
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.spotify {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    gap: .625rem;

    .speaker {
        align-items: center;
        line-height: 1;
        display: flex;
        gap: .5rem;
        font-size: .625rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.8px;

        .icon {
            display: flex;
        }
    }

    .song {
        display: flex;
        gap: 1rem;
        align-items: center;
        justify-content: flex-end;
    

    .song-details{
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        .song-title{
            font-size: 1.25rem;
            font-weight: 600;
        }
        .song-artist{
            color: color-mix(in srgb, #ffffff 50%, transparent);
        }
    }

    .song-album-cover {
        border-radius: 4px;
        overflow: hidden;

        img {
            display: block;
            height: 64px;
            width: 64px;
        }
    }
    }
}
</style>
