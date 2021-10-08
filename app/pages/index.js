module.exports = async function($) {
  $.page.title = 'Caddiction - coffee countdown'
  $.page.description = 'Count down to your morning coffee'

  return /* html */`
  <style>

  .coffeeimg {
    float: left;
  }

  .cup-text {
    float: right;
  }




  </style>

<div class="coffeeimg">
  <img src="img/blackwhitecup.jpeg" alt="Black and white photo with a coffee cup" height="600" width="600">
  </div>
   <div class="cup-text">
    <h1>Countdown to your next coffee</h1>
    <p>Coffee constraints bloodflow to the brain.</p>
    </div>
  <button>Start countdown</button>




  `
}