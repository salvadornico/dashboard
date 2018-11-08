<template lang="pug">
v-toolbar(dark, color="indigo darken-4")
	v-toolbar-title.white--text {{ dateToday }}
	v-spacer
	v-btn(icon)
		v-icon settings
</template>

<script lang="ts">
import { format } from "date-fns"
import Vue from "vue"
import { Component } from "vue-property-decorator"

@Component
export default class Navbar extends Vue {
	now = new Date()

	mounted() {
		setInterval(() => {
			this.now = new Date()
		}, 1000)
	}

	get dateToday(): string {
		return format(this.now, "d MMMM yyyy | kk:mm:ss")
	}
}
</script>
