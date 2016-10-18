// GO!
var KEYCODES = {
  enter: 13
}
// TASK #1
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


// Task #2
// grab input text 
var inputEl = document.querySelector('#add-guest input[type="text"]')

var itemHandler = function(keyEvent) {
	var elmentList = document.querySelector("#add-guest .guest-list")

  // determine whether the enter key was pressed
  if (keyEvent.keyCode === KEYCODES.enter) {
    var inputEl = keyEvent.target,
        itemString = inputEl.value

    var node = document.createElement("LI"); 
    var textnode = document.createTextNode(itemString) 
    node.appendChild(textnode);
    elmentList.appendChild(node);
    // elmentList.addChild append
  }
}

inputEl.addEventListener('keydown',itemHandler)
