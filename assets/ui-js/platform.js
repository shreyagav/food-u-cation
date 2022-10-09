window.addEventListener('WebComponentsReady', function() {
   _.each(document.querySelectorAll('[data-import]'), function(e1) {
        console.log(e1.dataset.import)
        _.each(document.querySelectorAll('link[rel="import"]'), function(e2) {

            var content = e2.import;
            if (content.getElementsByClassName(e1.dataset.import) != null) {
                var template = content.querySelector(e1.dataset.import);
                if (template != null) {
                    console.log(template);

                        e1.parentNode.replaceChild(template, e1);

                }
            }
        });
    });
});