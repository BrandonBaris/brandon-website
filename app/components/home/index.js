import m from 'mithril'
import './home.css'
import Img from '../../assets/images'

export default {
	view: function(vnode){
		return m('.home-content',[
			m(".home", [
				m('.home-header', [
					m('.home-icon', m('i.fa.fa-fw.fa-home.fa-4x')),
					m('.home-text','WELCOME')
				]),
				m('.home-body', [
						m('.bubble', m.trust('<p>We always start with <i>"Hello World!"</i>, but the world never says hello back.</p>')),
						m('img.portrait', { src: Img['splash'] })
					]
				)
			])
		])
	}
}