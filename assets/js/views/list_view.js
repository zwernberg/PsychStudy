  PsychManager.DisorderItemView = Marionette.ItemView.extend({
    template: "#disorder-list-item",

    events: {
        "click button.js-delete": "showDisorder"
    },


    showDisorder: function(){
        //this.$("[data-attribute=" + this.model.get('disorder') + "]").removeClass("hidden");
        alert(this.model.get('disorder'));
    }

  });

  PsychManager.DisorderView = Marionette.CompositeView.extend({
    tagName: "table",
    className: "table table-hover",
    template: "#disorder-list",
    childView: PsychManager.DisorderItemView,
    childViewContainer: "tbody"
  });