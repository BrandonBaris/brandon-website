import m from 'mithril'
import './layout.css'

export default {
	view: function(vnode){
		return m('main.layout', [
			m('header.main-header','Brandon Baris'),
			m('nav.menu',
				m('ul.menu-list', [
						m('li.menu-list-item',
							m('a', { href: '/', oncreate: m.route.link }, 'Home' )
						),
						m('li.menu-list-item',
							m('a', { href:'/portfolio', oncreate: m.route.link }, 'Portfolio' )
						),
						m('li.menu-list-item',
							m('a', { href:'/cv', oncreate: m.route.link }, 'CV' )
						),
						m('li.menu-list-item',
							m('a', { href: 'https://github.com/brandonbaris'}, 'GitHub' )
						),
						m('li.menu-list-item',
							m('a', { href: 'https://www.linkedin.com/in/brandonbaris/' }, 'LinkedIn' )
						)
					]
				)
			),
			m('section.main-section', vnode.children),
			m('footer.main-footer',
				m('a', { href: 'mailto:brandonbaris@gmail.com?subject=HI BRANDON'}, new Date().getFullYear())
			)
		])
	}
}