var Base = require("../../core/attributes/base");

/**
 */

module.exports = Base.extend({
  initialize: function() {
    this.view.transitions.push(this);
  },
  enter: function() {
    this.value.call(this.view, this.node, function() { });
  }
});
