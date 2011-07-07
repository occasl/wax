wax = wax || {};
wax.mm = wax.mm || {};

// Attribution
// -----------
// Attribution wrapper for Modest Maps.
wax.mm.attribution = function(map, options) {
    options = options || {};
    var attribution = {
        add: function() {
            this.attribution = new wax.Attribution(map.parent, options.container, 'wax-mm');
            this.attribution.render(options.attribution);
        }
    };
    return attribution.add();
};