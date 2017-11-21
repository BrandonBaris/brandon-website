import m from 'mithril'
import './home.css'

export default {
	view: function(vnode){
		return m('.home-content',[
			m(".home", [
				m('.home-header','Welcome'),
				m('.home-body','Work In Progress...')
			])
		])
	}
}