import m from 'mithril'
import CV from './cv.model.js'

export default {
	oninit: CV.loadJSON,
	view: function(vnode){
		return m(".resume",JSON.stringify(CV.data))
	}
}