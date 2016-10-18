// GO!

// grab toggleButton
var toggleButton = document.querySelector('#toggleButton')

// store navMenuState
var navMenuState = {
	hidden: false
}

// 
var toggleNavMenu = function() {
	// grab nav-menu
	var navMenu = document.querySelector('.nav-menu')
	// grab toggleButton
	var toggleButton = document.querySelector('#toggleButton')

    // check current states if hidden show nav-menu
    if (navMenuState.hidden) {

      navMenu.style.opacity = '1'
      toggleButton.value="hide nav"
      navMenuState.hidden = false
    
	// or else hide nav-menu
    }else {

    // change opacity to zero inorder to hide menu
      navMenu.style.opacity = '0'
      // change button text displayed
      toggleButton.value="show nav"
      // store current status
      navMenuState.hidden = true
    
    }
  
}

// tell the toggle button to run the toggleNaveMenu fuction when its clicked
toggleButton.addEventListener('click', toggleNavMenu)