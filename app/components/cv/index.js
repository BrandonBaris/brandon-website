import m from 'mithril'
import CV from './cv.model.js'

export default {
	oninit: CV.loadJSON,
	view: function(vnode){
		return m('.cv-content',[
			m('.cv-name', CV.data.basics.name),
			m('.cv-location', [
				m('.cv-location-label', 'ADDRESS'),
				m('.cv-location-address', CV.data.basics.location.address),
				m('.cv-location-postalCode', CV.data.basics.location.postalCode),
				m('.cv-location-city', CV.data.basics.location.city),
				m('.cv-location-countryCode', CV.data.basics.location.countryCode),
				m('.cv-location-region', CV.data.basics.location.region)
			]),
			m('.cv-picture', CV.data.basics.picture),
			m('.cv-label', CV.data.basics.label),
			m('.cv-email', CV.data.basics.email),
			m('.cv-phone', CV.data.basics.phone),
			m('.cv-website', CV.data.basics.website),
			m('.cv-summary', CV.data.basics.summary),
			m('.cv-work', [
				m('.cv-work-label', 'WORK HISTORY'),
				m('ul.cv-work-list', CV.data.work.map( function( workItem ){
						return m('li.cv-work-list-item', workItem.company)
					})
				)
			]),
			m('.cv-education', [
				m('.cv-education-label', 'EDUCATION'),
				m('ul.cv-education-list', CV.data.education.map( function( educationItem ){
						return m('li.cv-education-list-item', educationItem.institution)
					})
				)
			]),
			m('.cv-awards', [
				m('.cv-awards-label', 'AWARDS'),
				m('ul.cv-awards-list', CV.data.awards.map( function( awardItem ){
						return m('li.cv-awards-list-item', awardItem.title)
					})
				)
			]),
			m('.cv-projects', [
				m('.cv-projects-label', 'PROJECTS'),
				m('ul.cv-projects-list', CV.data.projects.map( function( projectItem ){
						return m('li.cv-projects-list-item', projectItem.name)
					})
				)
			]),
			m('.cv-languages', [
				m('.cv-languages-label', 'LANGUAGES'),
				m('.cv-languages-item', CV.data.languages[0].name)
			]), 
			m('.cv-interests', [
				m('.cv-interests-label', 'INTERESTS'),
				m('ul.cv-interests-list', CV.data.interests.map( function( interest ){
						return m('li.cv-interests-list-item', interest.name)
					})
				)
			]),
			// m('.cv-references', [
			// 	m('.cv-references-label', 'REFERENCES'),
			// 	m('ul.cv-references-list', CV.data.references.map( function( reference ){
			// 			return m('li.cv-references-list-item', reference.name)
			// 		})
			// 	)
			// ])
		])
	}
}