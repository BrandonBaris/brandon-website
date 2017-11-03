import m from 'mithril'
import Data from './portfolio.model.js'

var List = {
	oninit: Data.loadJSON,
	view: function(){
		return m('.portfolio-content',
			m('ul.portfolio-list',[
				Data.list.map(function(data){
					return m('li.portfolio-list-item', 
						m('.portfolio-list-item-container',
							[
								m('img.portfolio-item-thumbnail', { src: data.thumbnail.value, alt: data.thumbnail.description }),
								m('a.portfolio-list-item-link', {href: '/portfolio/' + data.id, oncreate: m.route.link}, data.projectName),
								m('.portfolio-list-item-endDate', data.endDate)
							]
						)
					)
				})
			])
		)
	}
}

var Show = {
	oninit: function(vnode){ Data.load(vnode.attrs.id) },
	view: function(){
		return m('.portfolio-content',[
			m('a.back_button', { href: '/portfolio', oncreate: m.route.link }, '<< BACK'),
			m('.projectName', Data.current.projectName),
			m('.startDate', Data.current.startDate),
			m('.endDate', Data.current.endDate),
			m('.portfolio-tasks',[
				m('ul.portfolio-tasks-list',
					Data.current.tasks.map( function(task){
						return m('li.portfolio-tasks-list-item', task)
					})
				)
			]),
			m('.tasks', Data.current.tasks),
			m('.uri', Data.current.uri),
			Data.current.imgs.map( function(img){
				return m('img', { src: img.value, alt: img.description })
			})
		])
	}
}

export default { List, Show }