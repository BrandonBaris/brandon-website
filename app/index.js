	import _ from 'lodash';
	import './styles/foundation.min.css';

	// TODO: REMOVE AFTER
	if ( process.env.NODE_ENV === 'production' ){
		console.log("PRODUCTION");
		window.alert("YOU ARE IN PRODUCTION!");
	} else {
		console.log("DEV");
	}

  function component() {
    var element = document.createElement('div');

    element.innerHTML = "SPOOKY SKELETON SITE!";
    return element;
  }

  document.body.appendChild(component());
  if (module.hot) {
  	module.hot.accept('./test.js', function(){
  		console.log("TEST");
  	})
  }