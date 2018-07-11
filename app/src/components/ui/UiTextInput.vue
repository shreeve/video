<template lang="pug">
fieldset.ui-text-input
  label(v-if="label" :for="id") {{ label }}
  textarea(
    v-if="type === 'textarea'"
    v-model="model"
    :id="id"
    :class="classObject"
    :placeholder="placeholder"
    :rows="rows"
    :disabled="disabled"
  )
  input(
    v-else
    v-model="model"
    :id="id"
    :class="classObject"
    :type="'text'"
    :ref="'input'"
    :placeholder="placeholder"
    :disabled="disabled"
  )
  .ui-input__error(v-if="error") {{ error }}
</template>

<script>
export default {
  props: {
    id: String,
    type: String,
    label: String,
    placeholder: String,
    rows: Number,
    input: String,
    disabled: Boolean,
    error: String
  },

  data () {
    return {
      model: this.input
    }
  },

  computed: {
    classObject () {
      return {
        'ui-text-input--placeholder': this.type === 'placeholder'
      }
    }
  },

  watch: {
    input (newValue) {
      this.model = newValue
    },

    model (newValue) {
      this.$emit('update:input', newValue)
    }
  },

  mounted () {
    if (this.type === 'email' || this.type === 'password') {
      this.$refs.input.type = this.type
    }
  }
}
</script>

<style lang="stylus">
.ui-text-input
  border: none
  padding: 0
  margin: 0

  label
    display: block
    margin-bottom: 0.8rem
    font-weight: 600
    font-size: 1.4rem
    color: color-base

  input, textarea
    font-family: font-base
    color: color-base
    background: white
    padding: 0.85rem 1.3rem
    width: 100%
    border: 1px solid darken(white, 10%)
    border-radius: ui-border-radius
    transition: 0.1s ease-out
    line-height: 1.5
    outline: none
    font-size: 1.4rem

    &::placeholder
      color: rgba(color-base, 50%)

  textarea
    resize: vertical

  &--placeholder
    opacity: 0.5
    pointer-events: none
</style>
