<template lang="pug">
v-carousel(height="100%", interval="10000", dark, hide-delimiters)
	v-carousel-item(v-for="(page, index) in pages", :key="index")
		v-container
			component(:is="page")
</template>

<script lang="ts">
// Import all available pages
import Calendar from "@/components/cards/Calendar.vue"
import Stocks from "@/components/cards/Stocks.vue"
import Weather from "@/components/cards/Weather.vue"
import Vue from "vue"
import { Component } from "vue-property-decorator"

@Component
export default class Carousel extends Vue {
	// Update this array based on whether each has been set up (check store for that)
	pages = [Calendar, Stocks, Weather]
}
</script>
