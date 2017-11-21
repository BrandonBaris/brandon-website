	import _ from 'lodash'
	import './styles/_normalize.css'
	import './styles/font-awesome-4.7.0/css/font-awesome.min.css'
	import './styles/styles.css'
	import m from 'mithril'
	import Components from './components'

	m.route(document.body, "/", {
		"/": {
			render: function(){
				return m(Components.Layout, m(Components.Home))
			}
		},
		"/portfolio": {
			render: function(vnode){
				return m(Components.Layout, m(Components.Portfolio.List, vnode.attrs))
			}
		},
		"/portfolio/:id": {
			render: function(vnode){
				return m(Components.Layout, m(Components.Portfolio.Show, vnode.attrs))
			}
		},
		"/cv": {
			render: function(vnode){
				return m(Components.Layout, m(Components.CV, vnode.attrs))
			}
		}
	})