
// IIFE polyfill for browsers that don't support web components yet
(function() {
  if ('registerElement' in document
      && 'import' in document.createElement('link')
      && 'content' in document.createElement('template')) {
    // platform is good!
  } else {
    // polyfill the platform!
    var e = document.createElement('script');
    e.src = '/webCompPolyfill.js';
    document.body.appendChild(e);
  }
})();


class doubleBorder extends HTMLElement {
  
   // Called when element is inserted in DOM
	connectedCallback() {
		const shadowRoot = this.attachShadow({mode: 'open'});
		
		var template = doc.ce('template');
		
		var container = doc.ce();
		
		var outerDiv = doc.ce();
		outerDiv.style.border = 'solid 6px';
		
		var innerDiv = doc.ce();

		if (this.hasAttribute('title')) {
	 
		  var whiteContainer = doc.ce();
		  whiteContainer.style.border = 'solid 3px rgb(254, 102, 3)';
		  whiteContainer.style.backgroundColor = 'rgb(253, 253, 253)';
		  whiteContainer.style.padding = '5%';
		  
		  var title = doc.ce('h3');
		  title.innerHTML = this.getAttribute('title');
		  
		  var hr = doc.ce('hr');
		  hr.style.border = 'solid 4px black';
		  hr.style.width = '80%';
		  hr.style.borderRadius = '15px';
		  
		  var desc = doc.ce();
		  desc.style.marginTop = '10%';
		  desc.innerHTML = this.getAttribute('desc')+'<br><br>';
		  

		  doc.amc(whiteContainer, [title, hr, desc]);
		  
		  innerDiv.appendChild(whiteContainer);
		  
		}
    else {
		  innerDiv.style.backgroundColor = 'rgb(252, 254, 4)';
		  innerDiv.style.height = '3px';
		  innerDiv.style.cursor = 'pointer';
		  
		  outerDiv.style.border = 'solid 2px rgb(40, 40, 40)';
		  outerDiv.style.marginLeft = '5%';
		  outerDiv.style.marginRight = '5%';
		}
		
		// use the container div to hold outerDiv html so that we keep the styling we've just added
		outerDiv.appendChild(innerDiv);
		container.appendChild(outerDiv);
		
		var html = container.innerHTML;

		template.innerHTML = html;
		
		const instance = template.content.cloneNode(true);
		
		shadowRoot.appendChild(instance);
	}

}

window.customElements.define('double-border', doubleBorder);


var contentH = doc.id('container').offsetHeight;
var containerRect = doc.id('container').getBoundingClientRect();

/*
* change background's height to cover the whole document
* contentH is the height of the container div, containerRect.top gets the px size of gap between
* 		top of document and container div, which is added to the bottom of the container div for symmetry
* window.scrollY is added to make sure that the gap size is not a negative value 
*/
doc.id('background').style.height = contentH+((containerRect.top+window.scrollY)*2)+'px';
