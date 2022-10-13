/**
 * @arg { keyof HTMLElementTagNameMap }  elType 
 * @arg {string} content 
 * @arg {{[k: string]: string}} attr
 * @returns { HTMLElement }
 */
function elementCreator(elType, attr, content) {
  var el = document.createElement(elType);

  for (var k in attr) {
    el.setAttribute(k, attr[k]);
    if (k === 'onclick') {
        el.addEventListener("click", attr[k]);
    }
  }

  el.textContent = content;

  return el;
}


export default elementCreator;