import m from 'mithril'
import Data from './portfolio.model.js'

var List = {
	oninit: Data.loadJSON,
	view: function(){
		return m('ul.portfolio-list',[
			Data.list.map(function(data){
				return m('li.portfolio-list-item', m('a.data-list-item', {href: '/portfolio/' + data.id, oncreate: m.route.link}, data.project_name + ' ' + data.description))
			})
		])
	}
}

var Show = {
	oninit: function(vnode){ Data.load(vnode.attrs.id) },
	view: function(){
		return m('.project_name', Data.current.project_name + ' ' + Data.current.description)
	}
}

export default { List, Show }