<template lang="pug">
i(:class="classObject")
</template>

<script>
export default {
  props: {
    icon: String,
    weight: {
      type: String,
      default: 'solid'
    }
  },

  computed: {
    classObject () {
      let weight = 'fa'
      switch (this.weight) {
        case 'solid':
          weight += 's'
          break
        case 'regular':
          weight += 'r'
          break
        case 'light':
          weight += 'l'
          break
      }

      let name = ''
      let size = ''
      switch (this.icon) {
        case 'copy':
          name = 'fa-copy'
          break
        case 'expand':
          name = 'fa-expand'
          break
        case 'hangUp':
          name = 'fa-phone-slash'
          break
        case 'audio':
          name = 'fa-microphone'
          break
        case 'video':
         name = 'fa-video'
         break
      }

      return `${weight} ${name} ${size}`
    }
  }
}
</script>

<style lang="stylus">
.fa-larger
  font-size: 140%
</style>
