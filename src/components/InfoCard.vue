<template lang="pug">
v-card(height="90vh")
	v-container
		v-card-title(primary-title)
			.div
				.headline {{ title }}
				span.grey--text(v-if="subtitle != null") {{ subtitle }}
		v-card-text
			slot
</template>

<script lang="ts">
import Vue from "vue"
import { Component, Prop } from "vue-property-decorator"

@Component
export default class Calendar extends Vue {
	@Prop()
	title: string

	@Prop()
	subtitle: string
}
</script>
