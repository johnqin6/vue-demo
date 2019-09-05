import Vue from 'vue'
import bus from './bus'

const plugins = [bus]

plugins.forEach(plugin => Vue.use(plugin))
