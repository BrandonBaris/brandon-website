import m from 'mithril'
import './layout.css'

export default {
	view: function(vnode){
		// TODO: CLEANUP
		let gradientArr = new Array(48).fill(0)
		let _opacity = 1000
		// console.log(window.screen.height)
		// console.log('asdf',gradientArr.length)
		return m('main.layout', [
			m('header.main-header','Brandon Baris'),
			m('section.main-section', [
				m('nav.menu',[
					m('ul.menu-list', [
							m('a', { href: '/', oncreate: m.route.link }, 
								m('li.menu-list-item', [
										m('.menu-icon', m('i.fa.fa-fw.fa-home')),
										m('.menu-text','Home')
									]
								)
							),
							m('a', { href:'/portfolio', oncreate: m.route.link },
								m('li.menu-list-item', [
										m('.menu-icon', m('i.fa.fa-fw.fa-file-code-o')),
										m('.menu-text', 'Portfolio')
									]
								)
							),
							m('a', { href:'/cv', oncreate: m.route.link }, 
								m('li.menu-list-item', [
										m('.menu-icon', m('i.fa.fa-fw.fa-user-circle-o')),
										m('.menu-text', 'CV')
									]
							  )
							),
							m('a', { href: 'https://github.com/brandonbaris'}, 
								m('li.menu-list-item', [
										m('.menu-icon', m('i.fa.fa-fw.fa-github-square')),
										m('.menu-text', 'GitHub')
									]
								)
							),
							m('a', { href: 'https://www.linkedin.com/in/brandonbaris/' }, 
								m('li.menu-list-item', [
										m('.menu-icon', m('i.fa.fa-fw.fa-linkedin-square')),
										m('.menu-text', 'LinkedIn')
									]
								)
							),
							m('a', { href: 'mailto:brandonbaris@gmail.com?subject=HI BRANDON'}, 
								m('li.menu-list-item', [
										m('.menu-icon', m('i.fa.fa-fw.fa-envelope')),
										m('.menu-text', 'Email')
									]
								)
							),
							// m('a', { href: '/', oncreate: m.route.link }, 
							// 	m('li.menu-list-item', [
							// 			m('.menu-icon', m('i.fa.fa-fw.fa-times')),
							// 			m('.menu-text', '') // PLACEHOLDER
							// 		]
							// 	)
							// ),
							gradientArr.map( function(val,idx){
								let opacity = ( _opacity - idx * 24 ) / 1000
								console.log(opacity)
								return m('li.menu-list-item', [
										m('.menu-icon._iconcolor', { style: 'opacity:' + opacity },m('i.fa.fa-fw.fa-times')),
										m('.menu-text', '')
									]
								)
							}),
							// m('li.menu-list-item', new Date().getFullYear())
						]
					)
				]),
				m('article.content', vnode.children)
			]),
			m('footer.main-footer', new Date().getFullYear())
			
		])
	}
}