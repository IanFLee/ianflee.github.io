/* TODO

- background repeat-y
- all content
- fonts

*/

var body = document.body,
    html = document.documentElement;

var bodyH = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );


doc.id('background').style.height = bodyH+'px';

class doubleBorder extends HTMLElement {
  
   // Called when element is inserted in DOM
  connectedCallback() {
    const shadowRoot = this.attachShadow({mode: 'open'});
    
    var template = doc.ce('template');
    
    var container = doc.ce();
    
    var outerDiv = doc.ce();
    outerDiv.style.border = 'solid 6px';
   // outerDiv.style.borderRadius = '10px';
    var innerDiv = doc.ce();

    if (this.hasAttribute('title')) {
      
    //  outerDiv.style.backgroundColor = 'blue';
      
      var whiteContainer = doc.ce();
      whiteContainer.style.border = 'solid 3px rgb(254, 102, 3)';
     // whiteContainer.style.borderRadius = '10px';

      whiteContainer.style.backgroundColor = 'rgb(253, 253, 253)';
      var title = doc.ce('h3');
      title.innerHTML = this.getAttribute('title');
      var hr = doc.ce('hr');
      hr.style.border = 'solid 4px black';
      hr.style.width = '80%';
      hr.style.borderRadius = '15px';
      var desc = doc.ce();
      desc.style.marginTop = '10%';
      desc.innerHTML = this.getAttribute('desc')+'<br><br>';
      var link = doc.ce();
      link.innerHTML = this.getAttribute('link');
      link.style.textDecoration = 'underline';
      link.style.marginBottom = '10%';
      whiteContainer.style.padding = '5%';
      
      doc.amc(whiteContainer, [title, hr, desc, link]);
      
      innerDiv.appendChild(whiteContainer);
      innerDiv.style.cursor = 'pointer';
    } else {
      innerDiv.style.backgroundColor = 'rgb(252, 254, 4)';
      innerDiv.style.height = '3px';
      //innerDiv.style.borderRadius = ' 7px';

      
      outerDiv.style.border = 'solid 2px rgb(40, 40, 40)';
      outerDiv.style.marginLeft = '5%';
      outerDiv.style.marginRight = '5%';
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

listenAt('jigsaw', 'click', function() {
  window.open('https://github.com/asparism/jigsaw');
});

listenAt('shareSwap', 'click', function() {
  window.open('https://share-swap.glitch.me');
});

listenAt('navBlocks', 'click', function() {
  window.open('https://vr-nav-blocks.glitch.me');
});