module.exports = bar

function bar(fill, width, height, margin) {
  if (!(this instanceof bar)) return new bar(fill, width, height, margin)
  fill = fill || '#FFF'
  width = this.width = +(parseFloat(width) || 500)
  height = this.height = +(parseFloat(height) || 30)
  margin = this.margin = +(parseFloat(margin) || 4)

  var wrap = this.element = document.createElement('div')
  wrap.style.border = margin + 'px solid ' + fill
  wrap.style.position = 'absolute'
  wrap.style.zIndex = 99999
  wrap.style.top = '50%'
  wrap.style.left = '50%'
  wrap.style.height = height + 'px'
  wrap.style.width = width + 'px'
  wrap.style.marginTop = (-height/2)+'px'
  wrap.style.marginLeft = (-width/2-margin)+'px'

  var inner = this.inner = document.createElement('div')
  inner.style.backgroundColor = fill
  inner.style.margin = margin + 'px'
  inner.style.height = (height - margin * 2) + 'px'
  inner.style.width = '0'
  inner.style.webkitTransition =
  inner.style.mozTransition =
  inner.style.msTransition =
  inner.style.oTransition =
  inner.style.transition = 'width 1.0s'

  wrap.appendChild(inner)
}

bar.prototype.update = function(n) {
  n = +(parseFloat(n) || 0)
  this.inner.style.width = (n*this.width - this.margin*2) + 'px'
  return this
}

bar.prototype.append = function(parent) {
  parent = parent || document.body
  parent.appendChild(this.element)
  return this
}

bar.prototype.remove = function() {
  if (this.element.parentNode) {
    this.element.parentNode.removeChild(this.element)
  }

  return this
}

bar.prototype.fadeout = function(duration) {
  var wrap = this.element
  var self = this

  duration = +(parseFloat(duration) || 1000) / 1000

  wrap.style.webkitTransition =
  wrap.style.mozTransition =
  wrap.style.msTransition =
  wrap.style.oTransition =
  wrap.style.transition = 'opacity '+duration+'s'

  setTimeout(function() {
    wrap.style.opacity = 0
  }, 100)
  setTimeout(function() {
    self.remove()
  }, duration * 1000)
}
