const { expect } = require('chai');
const chai = require('chai');
const { JSDOM } = require('jsdom');chai.use(require('chai-dom'));

require('jsdom-global')(); beforeEach(() => {
    const dom = new JSDOM(
      `<html>
      <body>
      <h1>Node + Express</h1>
      <p id="counter">Here's a button.</p>
      <button id="myButton"><span>Click me!</span></button>
    </body>
       </html>`,
       { url: 'http://localhost' },
    );
  
    global.window = dom.window;
    global.document = dom.window.document;
  });


  describe('Click Button', () => {

      it('Button should be clickable', () => {
        const button = document.querySelector('button')
        const submit = document.querySelector('span')
        
        let calls = 0
        
        button.addEventListener('click', event => {
          event.preventDefault()
          calls++
        })
        
        const clickEvent = new MouseEvent('click', {bubbles: true, cancelable: true, button: 0})
        submit.dispatchEvent(clickEvent)
        
        console.assert(calls === 1, 'the form was not submitted')
      })

      it('Text should be inserted to dom after on click', () => {
        //TODO - should be able to test the dom.
      })

  });