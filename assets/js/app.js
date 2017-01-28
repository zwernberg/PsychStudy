var PsychManager = new Marionette.Application();

PsychManager.on("before:start", function () {
  var RegionContainer = Marionette.LayoutView.extend({
    el: "#app-container",
    regions: {
      main: "#disorder-region",
      neuro: "#neuroDisorder-region"
    }
  });

  PsychManager.regions = new RegionContainer();
});