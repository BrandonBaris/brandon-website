import m from 'mithril'
import Data from './portfolio.model.js'
import './portfolio.css'
import Img from '../../assets/images'

let List = {
	oninit: Data.loadJSON,
	view: function(){
		let fillArr = new Array(8).fill(0)
		let _opacity = 1000
		return m('.portfolio-list-content', [
			m('ul.portfolio-list',[
				m('li.portfolio-header', 
					[
						m('.portfolio-header-text', 'PROJECT HISTORY' ),
						m('.portfolio-icon', m('i.fa.fa-fw.fa-file-code-o')),
					]
				),
				Data.list.map(function(data){
					return m('a.portfolio-list-item-link', { href: '/portfolio/' + data.id, oncreate: m.route.link },
							m('li.portfolio-list-item', 
							[
								// m('img.portfolio-item-thumbnail', { src: data.thumbnail.value, alt: data.thumbnail.description }),
								m('.portfolio-list-item-project-name', data.projectName ),
								m('.portfolio-list-item-end-date', (data.endDate !== null)?new Date(data.endDate).getFullYear():'' ),
								m('.portfolio-icon', m('i.fa.fa-fw.fa-angle-double-right')),
							]
						)
					)
				}),
				fillArr.map( function(val,idx){
					let opacity = ( _opacity - idx * 140 ) / 1000
					// console.log(opacity)
					return m('li.portfolio-list-item',{ style: 'opacity:' + opacity }, 
					[
						// m('img.portfolio-item-thumbnail', { src: data.thumbnail.value, alt: data.thumbnail.description }),
						m('.portfolio-list-item-project-name', '' ),
						m('.portfolio-list-item-end-date', '' ),
						m('.portfolio-icon._white', m('i.fa.fa-fw.fa-angle-double-right')),
					])
				})
			])
		])
	}
}

let Show = {
	oninit: function(vnode){ Data.load(vnode.attrs.id) },
	view: function(){
		return m('.portfolio-show-content', [
			m('a', { href: '/portfolio', oncreate: m.route.link }, 
				m('.item-box', [
						m('.portfolio-show-icon', m('i.fa.fa-fw.fa-angle-double-left')),
						m('.portfolio-item-label.project-name', 'BACK')
					]
				)
			),
			m('.item-box', [
					m('.portfolio-show-icon', m('i.fa.fa-fw.fa-file-text')),
					m('.portfolio-item-label.project-name', Data.current.projectName)
				]
			),
			(Data.current.url) ? m('a',{ href: Data.current.url, target: '_blank' },
				m('.item-box', [
						m('.portfolio-show-icon', m('i.fa.fa-fw.fa-external-link')),
						// m('.portfolio-item-label', 'URL:'),
						m('.portfolio-item-label.url', Data.current.url)
					]
				)
			):null,
			(Data.current.endDate) ? 
			m('.item-box', [
					m('.portfolio-show-icon', m('i.fa.fa-fw.fa-calendar-check-o')),
					// m('.portfolio-item-label', 'End Date:'),
					m('.portfolio-item-label.end-date', Data.current.endDate )
				]
			):null,
			m('.item-box', [
					m('.portfolio-show-icon', m('i.fa.fa-fw.fa-calendar-plus-o')),
					// m('.portfolio-item-label', 'Start Date:'),
					m('.portfolio-item-label.start-date', Data.current.startDate)
				]
			),
			(Data.current.tags.length > 0) ? m('.portfolio-tags',[
				m('ul.portfolio-tags-list',
					Data.current.tags.map( function(tag){
						return m('li.portfolio-tags-list-item', [
							// m('i.fa.fa-fw.fa-tag.portfolio-item-tag-icon'),
							m('.portfolio-item-tag-label',tag)
						])
					})
				)
			]):null,
			m('.description', m.trust('<p>' + Data.current.description + '</p>')),
			// (Data.current.tasks.length > 0)?m('.portfolio-tasks.item-box',[
			// 	m('ul.portfolio-tasks-list',
			// 		Data.current.tasks.map( function(task){
			// 			return m('li.portfolio-tasks-list-item', task)
			// 		})
			// 	)
			// ]):null,
			m('.portfolio-img-container',
				(Data.current.imgs.length > 0)?Data.current.imgs.map( function(img){
					return m('img.portfolio-img', { src: Img[img.value], alt: img.description })
				}):null,
			),
			m('a', { href: '/portfolio', oncreate: m.route.link }, 
				m('.item-box', [
						m('.portfolio-show-icon', m('i.fa.fa-fw.fa-angle-double-left')),
						m('.portfolio-item-label.project-name', 'BACK')
					]
				)
			),
		])
	}
}

export default { List, Show }