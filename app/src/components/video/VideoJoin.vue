<template lang="pug">
.fullscreen
  .video-join.content__panel
    .video-join__header Join video

    .video-join__content
      .video-join__info Please enter a room name:
      .video-join__room-name
        ui-text-input#room-name(
          :type="'text'"
          :placeholder="'Enter a room name'"
          :input.sync="roomName"
          :error="errors.roomName"
        )
        .video-join__random
          ui-button(
            :label="'Random'"
            @click.native="generateRandomRoomName()"
          )

      .video-join__submit
        ui-button(
          :type="'primary'"
          :label="'Join'"
          :size="'fullWidth'"
          @click.native="joinRoom()"
        )
</template>

<script>
export default {
  data () {
    return {
      roomName: '',
      errors: {}
    }
  },

  created () {
    this.generateRandomRoomName()
  },

  methods: {
    generateRandomRoomName () {
      let name = Math.floor(Math.random() * 1000000000)
      this.roomName = name.toString()
    },

    joinRoom () {
      // this.$router.push()
    }
  }
}
</script>

<style lang="stylus">
.video-join
  &__header
    text-align: center
    font-weight: 600
    font-size: 2rem
    padding: 2.5rem

  &__content
    background: darken(white, 2%)
    padding: 2.5rem
    border-top: 1px solid darken(white, 5%)

  &__info
    text-align: center
    font-size: 1.5rem

  &__room-name
    margin-top: 1.5rem
    display: flex
    align-items: center
    justify-content: space-between

  &__random
    margin-left: 1.5rem

  &__submit
    margin-top: 2.5rem
</style>
