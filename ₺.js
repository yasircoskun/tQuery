class PreProcessor {
    constructor(type, transformers) {
      this.type = type;
      this.transformers = transformers
    }

    getSrc(script_element) {
      let src = script_element.getAttribute('src');
      let xhr = new XMLHttpRequest();
      xhr.open('GET', src, false);
      xhr.send();
      return xhr.responseText;
    }

    getInnerHTML(script_element) {
      return script_element.innerHTML;
    }

    getCode(script_element) {
      if(script_element.src){
        return this.getSrc(script_element);
      }else{
        return this.getInnerHTML(script_element);
      }
    }

    transform(callback=this.evaluate) {
      let scripts = document.querySelectorAll(`script[type="${this.type}"]`);
      scripts.forEach((script) => {
        let code = this.getCode(script);
        this.transformers.forEach((transformer) => {
          code = transformer.transform(code);
        });
        callback(code);
      });
    }

    evaluate(code) {
      eval(code);
    }
}

class Transformer {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  transform(code) {
    if(this.from instanceof RegExp){
      return code.replace(this.from, this.to);
    } else {
      return code.split(this.from).join(this.to);
    }
  }
}

function tQuery(){
  new PreProcessor('text/₺Query', [
    new Transformer(/(₺*?)[\.\(]+/g, (match, p1) => {
      return match.replace('₺', '$');
    }),
  ]).transform();
}

tQuery();