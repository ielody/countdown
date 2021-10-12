module.exports = async function($) {
  $.page.title = 'Quote break'
  $.page.description = 'Enjoy a quote with your morning coffee'



  async function loadQuotes() {
    const endpoint = 'https://type.fit/api/quotes'
    try {
      const response = await fetch(endpoint)
      if (!response.ok) {
        throw Error(response.statusText)
      }
      const json = await response.json()
      console.log(json)
      quotes = json
    } catch (err) {
      console.log(err)
      alert('Failed to fetch new quote')
    }
  }

  function renderQuote() {
    console.log('renderQuote')
    var quote = quotes[index++]
    //hvis index er stoerre enn index, velg random tall
    if(index >= quotes.length) {
      return Math.floor(math.random()) * (quotes.length())
    }
    if (quote.author == null) {
      return Math.floor(math.random()) * (quotes.length())
    }
    console.log(Math.random())
    console.log(quote)
    html('#quote', /*html */`
      <b>${quote.text}</b><br>-<i>${quote.author}</i>
      `)
  }

  return /* html */`

    <q id="quote"></q>
    <button type="button" id="js-new-quote" class="new-quote button" onclick="renderQuote()">Generate a new quote</button>
    <img src="img/pinkflowers.jpeg">

    <script>
      var quotes = []
      var index = 0
      ${loadQuotes}
      ${renderQuote}
      loadQuotes()
    </script>
  `
}