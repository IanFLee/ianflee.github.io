var body = document.body,
    html = document.documentElement;

var bodyH = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );

doc.id('background').style.height = bodyH+'px';

class doubleBorder extends HTMLElement {
  
   // Called when element is inserted in DOM
  connectedCallback() {
    const shadowRoot = this.attachShadow({mode: 'open'});
    
    var template = doc.ce('template');
    
    var container = doc.ce();
    
    var outerDiv = doc.ce();
    outerDiv.style.border = 'solid 7px';
    outerDiv.style.borderRadius = '10px';
    var innerDiv = doc.ce();

    if (this.hasAttribute('title')) {
      
      outerDiv.style.backgroundColor = 'black';
      
      var whiteContainer = doc.ce();
      whiteContainer.style.textAlign = 'center';
      whiteContainer.style.border = 'solid 4px rgb(254, 102, 3)';
      whiteContainer.style.borderRadius = '10px';
      whiteContainer.style.backgroundColor = 'white';
      var title = doc.ce('h3');
      title.innerHTML = this.getAttribute('title');
      var hr = doc.ce('hr');
      hr.style.border = 'solid 4px black';
      hr.style.width = '80%';
      hr.style.borderRadius = '15px';
      var desc = doc.ce();
      desc.style.marginTop = '10%';
      desc.innerHTML = 'jigsaw is a library of mvc-type functions<br><br>';
      var link = doc.ce();
      link.innerHTML = 'github.com/asparism/jigsaw';
      link.style.textDecoration = 'underline';
      link.style.marginBottom = '10%';
      doc.amc(whiteContainer, [title, hr, desc, link]);
      
      innerDiv.appendChild(whiteContainer);
      innerDiv.style.cursor = 'pointer';
    } else {
      innerDiv.style.border = 'solid 2px rgb(252, 254, 4)';
      innerDiv.style.borderRadius = ' 7px';
    }
    
    
    outerDiv.appendChild(innerDiv);
    container.appendChild(outerDiv);
    var html = container.innerHTML;

    template.innerHTML = html;
    
    const instance = template.content.cloneNode(true);
    shadowRoot.appendChild(instance);
}

}

window.customElements.define('double-border', doubleBorder);