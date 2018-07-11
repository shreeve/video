<template lang="pug">
.video-call
  .video-call__controls
    ui-icon(
      :icon="'audio'"
      @click.native="toggleAudio()"
    )
    ui-icon(
      :icon="'video'"
      @click.native="toggleVideo()"
    )
    ui-icon(
      :icon="'expand'"
      :weight="'regular'"
      @click.native="expandVideo()"
    )
    ui-icon.video-call__controls__hang-up(
      :icon="'hangUp'"
      @click.native="endCall()"
    )

  .video-call__link
    ui-icon(
      :icon="'copy'"
      @click.native="copyRoomLink()"
    )
    a(
      :href="roomUrl"
      :target="'_blank'"
    ) {{ roomUrl }}
</template>

<script>
export default {
  computed: {
    roomUrl () {
      return window.location.href
    }
  },

  methods: {
    toggleAudio () {

    },

    toggleVideo () {

    },

    expandVideo () {

    },

    endCall () {
      this.$router.push('/')
    },

    copyRoomLink () {
      const el = document.createElement('textarea')
      el.value = this.roomUrl
      el.setAttribute('readonly', '')
      el.style.position = 'absolute'
      el.style.left = '-9999px'
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
    }
  }
}
</script>

<style lang="stylus">
.video-call
  &__controls
    position: fixed
    bottom: 0
    left: 50%
    transform: translate(-50%, 0)
    background: rgba(black, 0.8)
    color: rgba(white, 0.9)
    padding: 0.6rem 1rem
    border-radius: ui-border-radius ui-border-radius 0 0

    > i
      cursor: pointer
      padding: 0.9rem
      font-size: 1.8rem

    &__hang-up
      color: color-danger

  &__link
    position: fixed
    bottom: 0
    right: 0
    background: rgba(black, 0.8)
    padding: 1rem 1.2rem
    color: rgba(white, 0.9)
    border-top-left-radius: ui-border-radius

    > i
      cursor: pointer
      padding: 0.5rem

    > a
      font-size: 1.5rem
      margin-left: 0.5rem
      padding: 0.5rem
</style>
