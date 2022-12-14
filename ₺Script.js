
// localization 
var i18n = {
  "en": {
    "title": "₺Query",
    "description": "₺ is local and national currency of Turkey.",
    "description2": "₺Query is a query selector library for JavaScript.",
    "description3": "You can write ₺ with \"AltGr + T\" shortcut.",
    "article": `if you want to use ₺Query, you can use it like this:
<pre><code>
&lt;script src="₺ᅠ.js" defer&gt;&lt;/script&gt;
&lt;script type="text/₺Query"&gt;
  ₺ᅠ("body").css("background-color", "black");
&lt;/script&gt;
</code></pre>
    `,
  },
  "tr": {
    "title": "₺Query",
    "description": "₺ Türkiye'nin yerel ve ulusal para birimidir.",
    "description2": "₺Query, JavaScript için bir sorgu seçici kütüphanesidir.",
    "description3": "₺ yazmak için \"AltGr + T\" kısayolunu kullanabilirsiniz.",
    "article": `₺Query kullanmak istiyorsanız, şu şekilde kullanabilirsiniz:
<pre><code>&lt;script src="₺ᅠ.js" defer&gt;&lt;/script&gt;
&lt;script type="text/₺Query"&gt;
₺ᅠ("body").css("background-color", "black");
&lt;/script&gt;
</code></pre>
    `,
  }
};

// get language
var lang = navigator.language.split("-")[0];
if (lang != "tr") {
  lang = "en";
}

₺("head").append(`
  <title>₺{i18n[lang].title}</title>
  <meta name="description" content="₺{i18n[lang].description}">
  <style>
    body {
      background-color: #000;
      color: #fff;
      font-family: consolas;
      font-size: 1.5em;
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
      padding: 0;
    }

    body h1 {
      margin: 0;
      font-size: 10em;
    }

    body h3 {
      margin-top: 0;
    }

    .card {
      background-color: #000;
      color: #f7f7f7;
      padding: 1em;
      margin: 1em;
      border-radius: 1em;
      box-shadow: 0 0 1em #a3a3a3;
    }

    .card a {
      color: inherit;
      text-decoration: none;
    }

    .card a:hover {
      text-decoration: underline;
    }

    .card a:visited {
      color: inherit;
    }

    .card pre {
      width: 100%;
      text-align: left;
    }

    .card pre code {
      display: block;
      width: 100%;
      white-space: pre-wrap;
    }

    .card pre code span {
      color: #f00;
    }

    .card pre code span:nth-child(2) {
      color: #0f0;
    }

    .card pre code span:nth-child(3) {
      color: #00f;
    }

    .card pre code span:nth-child(4) {
      color: #ff0;
    }
  </style>  
`);

₺('body').append(`
  <div class="card">
    <h1>\u{1F1F9}\u{1F1F7}</h1>
    <h3>₺{i18n[lang].title}</h3>
    <p>₺{i18n[lang].description}</p>
    <p>₺{i18n[lang].description2}</p>
    <p>₺{i18n[lang].article}</p>
  </div>
`)