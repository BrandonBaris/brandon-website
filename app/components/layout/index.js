import m from 'mithril'

export default {
	view: function(vnode){
		return m("main.layout", [
			m("nav.menu",
				m("ul.menu.item", [
						m("li.menu.item",
							m("a[href='/home']", { oncreate: m.route.link }, "Home" )
						),
						m("li.menu.item",
							m("a[href='/portfolio']", { oncreate: m.route.link }, "Portfolio" )
						),
						m("li.menu.item",
							m("a[href='/cv']", { oncreate: m.route.link }, "CV" )
						),
						m("li.menu.item",
							m("a[href='https://github.com/brandonbaris']", "GitHub" )
						),
						m("li.menu.item",
							m("a[href='https://www.linkedin.com/in/brandonbaris/']", "LinkedIn" )
						)
					]
				)
			),
			m("header","HEADER DESU"),
			m("section", vnode.children),
			m("footer",
				m("a[href='mailto:brandonbaris@gmail.com?subject=HI BRANDON']", new Date().getFullYear())
			)
		])
	}
}