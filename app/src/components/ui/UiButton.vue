<template lang="pug">
button.ui-button(
  :class="classObject"
  :disabled="disabled || loading"
)
  ui-icon(
    v-if="iconPosition === 'left' || (icon && !label)"
    :icon="icon"
    :weight="iconWeight"
  )
  span {{ label }}
  ui-icon(
    v-if="iconPosition === 'right'"
    :icon="icon"
    :weight="iconWeight"
  )
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'default'
    },
    label: String,
    icon: String,
    iconPosition: String,
    iconWeight: {
      type: String,
      default: 'solid'
    },
    size: String,
    active: Boolean,
    disabled: Boolean,
    loading: Boolean
  },

  computed: {
    classObject () {
      return {
        'ui-button--default': this.type === 'default',
        'ui-button--primary': this.type === 'primary' || this.type === 'submit',
        'ui-button--secondary': this.type === 'secondary',
        'ui-button--icon': this.icon,
        'ui-button--icon-only': this.icon && !this.label,
        'ui-button--icon-left': this.iconPosition === 'left',
        'ui-button--icon-right': this.iconPosition === 'right',
        'ui-button--size-small': this.size === 'small',
        'ui-button--size-large': this.size === 'large',
        'ui-button--size-full-width': this.size === 'fullWidth',
        'ui-button--active': this.active
      }
    }
  }
}
</script>

<style lang="stylus">
.ui-button
  display: inline-block
  text-align: center
  vertical-align: middle
  cursor: pointer
  white-space: nowrap
  user-select: none
  border-radius: ui-border-radius
  padding: 0 1.2rem
  height: 3.6rem
  font-size: 1.3rem
  border: none
  transition: 0.05s ease-out
  font-weight: 600
  line-height: 1.4
  font-family: font-base
  border: 1px solid transparent

  &:active, &:focus
    outline: none

  &[disabled]
    cursor: not-allowed
    opacity: 0.7

  &--default
    background: darken(white, 8%)
    border-color: darken(white, 12%)
    color: rgba(color-base, 0.8)

    &:hover:enabled
      background: darken(white, 6%)

    &.ui-button--active, &:hover:enabled.ui-button--active
      background: white

  &--primary
    font-size: 1.4rem
    font-weight: 700
    background: color-primary
    color: white
    height: 4rem
    padding: 0 1.4rem
    box-shadow: 0 1px 2px 0 rgba(black,0.2)

    &:hover:enabled
      background: lighten(color-primary, 10%)

    &.ui-button--icon > i
      opacity: 0.9

  &--secondary
    background: none
    border-color: darken(white, 12%)
    color: rgba(color-base, 0.8)

    &:hover:enabled
      background: rgba(white, 0.4)

  &--size-small
    font-size: 1.35rem
    height: 3.2rem

  &--size-large
    width: 100%

    @media (min-width: screen-xs)
      width: 32rem

  &--size-full-width
    width: 100%

  &--menu-toggle
    padding-left: 2.2rem
    padding-right: 2.2rem

  &--icon
    display: flex
    align-items: center

    i
      opacity: 0.7
      font-size: 1.4rem

  &--icon-left i
    margin-right: 0.8rem

  &--icon-right i
    margin-left: 0.8rem
</style>
