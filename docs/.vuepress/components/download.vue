/*
* @Author: yankang
* @Date: 2019-05-16 09:21:11
* @Last Modified by:   yankang
* @Last Modified time: 2019-05-16 09:23:17
*/
<template>
	<div>
		<a :href="url" target="_blank"></a>
	</div>
</template>
<script>
export default {
	props: ['url'],
	data() {
		return {

		}
	}
}
</script>