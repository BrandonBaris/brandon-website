import m from 'mithril'
import portfolio_data from './portfolio_data.json'

var Data = {
	list: [],
	loadJSON: function(){
		return Data.list = portfolio_data.data
	},
	// loadList: function() {
	// 	return m.request({
	// 		method: "GET",
	// 		url: "https://rem-rest-api.herokuapp.com/api/users",
	// 		withCredentials: true
	// 	})
	// 	.then( function(result){
	// 		console.log(result.data)
	// 		Data.list = result.data
	// 	})
	current: {},
	load: function(id){
		var _data = portfolio_data.data.find(function(data){
			console.log('asd',id)
			return data.id == id
		})
		console.log("data",_data);
		return Data.current = ( _data !== undefined ) ? _data : Data.current = { firstName: "HIHOI", lastName: "AIOFOA", id: 0 }
		// return m.request({
		// 	method: "GET",
		// 	url: "https://rem-rest-api.herokuapp.com/api/users/" + id,
		// 	withCredentials: true
		// })
		// .then( function(result){
		// 	Data.current = result
		// })
	}
}

export default Data;