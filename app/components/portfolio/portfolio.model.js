import m from 'mithril'
import portfolio_data from './portfolio_data.json'

var Data = {
	list: [],
	loadJSON: function(){
		return Data.list = portfolio_data.data
	},
	current: {},
	load: function(id){
		var _data = portfolio_data.data.find(function(data){
			return data.id == id
		})
		console.log('data',_data);
		return Data.current = ( _data !== undefined ) ? _data : Data.current = { firstName: 'HIHOI', lastName: 'AIOFOA', id: 0 }
	}
}

export default Data;