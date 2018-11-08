import Carousel from "@/components/Carousel.vue"
import Vue from "vue"
import Meta from "vue-meta"
import Router from "vue-router"

Vue.use(Router)
Vue.use(Meta)

export default new Router({
	mode: "history",
	routes: [
		{
			path: "/",
			name: "home",
			component: Carousel,
		},
	],
})
