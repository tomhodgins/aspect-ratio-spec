/* Aspect Ratio plugin for github.com/tomhodgins/aspect-ratio-spec */

var rules = []

function load(){
  // Load <style> tags
  var tag = document.querySelectorAll('style')
  for (var i=0;i<tag.length;i++){
    parse(tag[i].innerHTML)
  }
  // load <link> tags
  var tag = document.querySelectorAll('link')
  for (var i=0;i<tag.length;i++){
    if (tag[i].getAttribute('rel') === 'stylesheet'){
      if (tag[i].href){
        (function(){
          var xhr = new XMLHttpRequest
          xhr.open('GET', tag[i].href, true)
          xhr.send(null)
          xhr.onload = function(){
            parse(xhr.responseText)
          }
        })()
      }
    }
  }
}

function parse(text){
  var css = text || ''
  css.replace(/\n/g,'').replace(/\}/g,'}\n').replace(/\s*{/g,'{').replace(/^\s*/gm,'').replace(/^(.*?)\s?{.*aspect-ratio:\s*(\d*\.?\d+)\/(\d*\.?\d+)/gm,function(match,$1,$2,$3){
    var rule = [$1,$2,$3]
    rules.push(rule)
  })
  apply()
}

function apply(){
  for (var i=0;i<rules.length;i++){
    var tag = document.querySelectorAll(rules[i][0])
    for (var j=0;j<tag.length;j++){
      var natWidth = getRule(tag[j],'width') || false,
          natHeight = getRule(tag[j],'height') || false,
          currWidth = tag[j].offsetWidth,
          currHeight = tag[j].offsetHeight,
          rWidth = rules[i][1],
          rHeight = rules[i][2]
      if (!natWidth && !natHeight){
        tag[j].style.height = currWidth / (rWidth/rHeight) + 'px'
      }
      if (natWidth && !natHeight){
        tag[j].style.height = currWidth / (rWidth/rHeight) + 'px'
      }
      if (!natWidth && natHeight){
        tag[j].style.width = currHeight * (rWidth/rHeight) + 'px'
      }
    }
  }
}

function getRule(tag,query){
  var sheets = document.styleSheets,
      matchedRules = []
  if (!tag.matches) {
    tag.matches =
      tag.matchesSelector
      || tag.mozMatchesSelector
      || tag.msMatchesSelector
      || tag.oMatchesSelector
      || webkitMatchesSelector
      || function(s){
          var matches = (this.document || this.ownerDocument).querySelectorAll(s),
              m = matches.length
           while (--m >= 0 && matches.item(m) !== this){}
           return m > -1
         }
  }
  for (var i=0; i<sheets.length; i++){
    var css = sheets[i].rules || sheets[i].cssRules || ''
    for (var j=0; j<css.length; j++){
      if (tag.matches(css[j].selectorText)){
        if (css[j].cssText.indexOf(query) !== -1) {
          return true
        }
      }
    }
  }
}

document.addEventListener('DOMContentLoaded',load)
window.addEventListener('resize',apply)