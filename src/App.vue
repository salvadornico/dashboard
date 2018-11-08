<template lang="pug">
#app
	Navbar
	router-view
</template>

<script lang="ts">
import Navbar from "@/components/Navbar.vue"
import Vue from "vue"
import { Component } from "vue-property-decorator"

@Component({
	metaInfo: {
		titleTemplate: "Dashboard",
	},
	components: { Navbar },
})
export default class App extends Vue {}
</script>

<style lang="stylus">
#app
	font-family "Roboto", sans-serif
</style>
