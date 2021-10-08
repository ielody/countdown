module.exports = async function($) {
  const host = process.env.NODE_ENV == 'production'
    ? 'https://waveorb.com/api'
    : 'http://localhost:5000'

  return /* html */`
    <!doctype html>
    <html lang="${$.lang}">
      <head>
        <meta http-equiv="content-type" content="text/html;charset=utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <meta name="description" content="Coffee countdown">
        <title>${$.page.title || '♥'} - Made by ielody</title>
        <link rel="icon" type="image/png" href="/img/ielodyfavicon.png">
        ${$.script('/bundle.js')}
        ${$.style('/bundle.css')}
        <script>window.api = waveorb('${host}')</script>
        ${process.env.NODE_ENV == 'development' ? $.script('/js/dev.js') : ''}
      </head>
      <body>
        <header>

        </header>
        <script>
          toggleVisibility()
          setActiveLink()
        </script>
        <div id="flash"></div>
        <main>${$.page.content}</main>
        <footer>
          Made by <a href="https://ielody.com">Just a girl</a>
        </footer>
        <script>flash()</script>
      </body>
    </html>
  `
}
