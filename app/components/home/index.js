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
						m('.bubble.bubble-point-bottom', m.trust('<p>花より団子</p>')),
						m('img.splash', { src: Img['splash'] }),
						m('.bubble.bubble-point-top', m.trust('<p>Meow...</p>'))
					]
				)
			])
		])
	}
}