<template>
	<div class="experience-item position-relative mt-5 p-5" data-aos="fade-up">
		<div class="d-flex align-items-center">
			<h4 class="experience-item__title text-white" v-text="item.title" />
			<span class="mx-2">-</span>
			<h5 class="text-white-50" v-text="item.subtitle" />
			<span class="experience-item__position" v-text="item.position" />
		</div>
		<span class="text-white-50" v-text="item.time" />
		<p v-for="(desc, index) in descriptions" :key="index" v-text="desc" />
	</div>
</template>

<script>
export default {
	props: {
		item: {
			type: Object,
			required: true,
		},
	},
	computed: {
		descriptions() {
			return this.item.description.split('\n')
		},
	},
}
</script>

<style lang="scss" scoped>
.experience-item {
	z-index: 1;
	background: #202245;
	&:hover {
		&::before {
			transform: scale(1, 1);
		}
	}
	&::before {
		content: '';
		top: 0;
		z-index: -1;
		width: 100%;
		height: 100%;
		position: absolute;
		transform: scale(1, 0);
		transition: all 0.4s ease-in-out;
		&:dir(ltr) {
			left: 0;
			border-left: 3px solid #e1a34c;
		}
	}
	&__position {
		flex: 1;
		display: flex;
		color: #e1a34c;
		justify-content: flex-end;
	}
}
.experience-item__title {
	font-weight: 600;
}
</style>
