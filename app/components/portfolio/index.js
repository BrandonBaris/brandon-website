import m from 'mithril'
import Data from './portfolio.model.js'

var List = {
	oninit: Data.loadJSON,
	view: function(){
		return m('ul.portfolio-list',[
			Data.list.map(function(data){
				return m('li.portfolio-list-item', [
						m('a.portfolio-list-item-link', {href: '/portfolio/' + data.id, oncreate: m.route.link}, data.project_name),
						m('br'),
						m('.portfolio-list-item-end_date', data.end_date),
						m('.portfolio-list-item-description', data.description)
					]
				)
			})
		])
	}
}

var Show = {
	oninit: function(vnode){ Data.load(vnode.attrs.id) },
	view: function(){
		return m('.portfolio',[
			m('a.back_button', { href: '/portfolio', oncreate: m.route.link }, '<< BACK'),
			m('.project_name', Data.current.project_name),
			m('.start_date', Data.current.start_date),
			m('.end_date', Data.current.end_date),
			m('.portfolio-tasks',[
				m('ul.portfolio-tasks-list',
					Data.current.tasks.map( function(task){
						return m('li.portfolio-tasks-list-item', task)
					})
				)
			]),
			m('.tasks', Data.current.tasks),
			m('.uri', Data.current.uri),
			m('img.portfolio-item-thumbnail', { src: Data.current.thumbnail.value, alt: Data.current.thumbnail.description }),
			Data.current.imgs.map( function(img){
				return m('img', { src: img.value, alt: img.description })
			})
		])
	}
}

export default { List, Show }