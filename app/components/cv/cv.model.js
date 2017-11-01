import m from 'mithril'
import cv_data from './cv_data.json'

var CV = {
	data: null,
	loadJSON: function(){
		return CV.data = cv_data
	}
}

export default CV