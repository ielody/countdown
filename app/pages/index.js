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
    console.log(quote)
    html('#quote', /*html */`
      ${quote.text}-<b>${quote.author}</b>
    `)
  }

  return /* html */`

    <q id="quote"></q>
    <button type="button" id="js-new-quote" class="new-quote button" onclick="renderQuote()">Generate a new quote</button>

    <script>
      var quotes = []
      var index = 0
      ${loadQuotes}
      ${renderQuote}
      loadQuotes()
    </script>
  `
}