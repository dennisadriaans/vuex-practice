<template>
    <div id="toolbar">
        <i @click="addNote">Add note</i>
        <i @click="toggleFavorite" :class="{starred: activeNote.favorite}">Toggle Favorite</i>
        <i @click="deleteNote">Delete note</i>
    </div>
</template>

<script>
    import { addNote, deleteNote, toggleFavorite } from '../vuex/actions'

    export default {
        vuex: {
            getters: {
                activeNote: state => state.activeNote
            },
            actions: {
                addNote,
                deleteNote,
                toggleFavorite
            }
        }
    }
</script>