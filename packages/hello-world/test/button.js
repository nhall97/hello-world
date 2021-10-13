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
      it('Make sure button can be clicked', () => {
        const button = document.querySelector('button')
        const submit = document.querySelector('span')
        
        let calls = 0
        
        button.addEventListener('click', event => {
          event.preventDefault()
          console.log('clicked')
          calls++
        })
        
        const clickEvent = new MouseEvent('click', {bubbles: true, cancelable: true, button: 0})
        submit.dispatchEvent(clickEvent)
        
        console.assert(calls === 1, 'the form was not submitted')

        //TODO - be able to reload the dom, and assert that the new div exists
      })
  })