/*
* @Author: yankang
* @Date: 2019-05-20 11:49:09
* @Last Modified by:   yankang
* @Last Modified time: 2019-05-20 13:45:37
*/
<template>
	<div id="vcomments"></div>
</template>
<script>
export default {
	name: 'Valine',
	mounted: function() {
		// require window
		const Valine = require('valine');
		if (typeof window !== 'undefined') {
			this.window = window
			window.AV = require('leancloud-storage')

		}

		new Valine({
			el: '#vcomments',
			appId: 'eXnSNgBTGxucEvvBUTDnx9BD-gzGzoHsz',
			appKey: 'aBCAMpvakkU1vcyAPvXYLYvP',
			notify: false,
			verify: false,
			avatar: 'mm',
			placeholder: 'just go go'
		});
	},
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
#vcomments {
	max-width 740px padding 10px display block;
	margin-left auto;
	margin-right auto;
}
</style>