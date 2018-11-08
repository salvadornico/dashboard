<template lang="pug">
slider.slider(animation="fade", width="100vw", height="100vh")
	slider-item(v-for="(page, index) in pages", :key="index")
		v-container
			h1 {{ page }}
</template>

<script lang="ts">
import Vue from "vue"
import { Slider, SliderItem } from "vue-easy-slider"
import { Component } from "vue-property-decorator"

@Component({
	components: { Slider, SliderItem },
})
export default class Carousel extends Vue {
	pages = [1, 2, 3]
}
</script>
