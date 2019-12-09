/*
 * @Author: yankang
 * @Date:   2019-05-10 09:44:42
 * @Last Modified by:   yankang
 * @Last Modified time: 2019-05-18 22:48:50
 */

const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const nav = require('./nav.js')
module.exports = {
	title: '碧波荡漾博客',
	description: '个人技术博客',
	head: [
		['link', { rel: 'icon', href: `/img/favicon.ico` }],
		['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
	],
	evergreen: true,
	serviceWorker: true,
	port: 3000,
	base: '/myblog/',
	dest: 'dist',
	themeConfig: {
		nav,
		logo: '/img/head.jpeg',
		search: true,
		searchMaxSuggestions: 10,
		sidebar: {
			// 环境搭建
			'/environment/': [
				''
			],

			// 基础服务
			'/baseService/': [
				'',
				'微信SDK图像接口'
			],

			// 组件使用
			'/component/': [

			],

			// 打包部署
			'/deploy/': [

			],

			// 开发规范
			'/standard/': [

			],

			// 芝麻开门
			'/guide/': [
				'',
				'example'
			]
		},
		sidebarDepth: 1,
		lastUpdated: 'Last Updated',
		author: 'yankang'
	},
	configureWebpack: {
		plugins: [
			new CopyWebpackPlugin([{
				from: path.resolve(__dirname, '../assets/file'),
				to: path.resolve(__dirname, '../../dist/assets/file'),
				ignore: ['.*']
			}])
		]
	}
}