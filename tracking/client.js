;(function(){

    window.onload = function() {
        var perf = performance.timing;

        var q =
            '?responseStart=' + perf.responseStart +
            '&responseEnd=' + perf.responseEnd +
            '&connectStart=' + perf.connectStart +
            '&connectEnd=' + perf.connectEnd +
            '&redirectStart=' + perf.redirectStart +
            '&redirectEnd=' + perf.redirectEnd +
            '&domContentLoadedEventStart=' + perf.domContentLoadedEventStart +
            '&domContentLoadedEventEnd=' + perf.domContentLoadedEventEnd +
            '&domInteractive=' + perf.domInteractive +
            '&domLoading=' + perf.domLoading +
            '&requestStart=' + perf.requestStart +
            '&unloadEventStart=' + perf.unloadEventStart +
            '&unloadEventEnd=' + perf.unloadEventEnd +
            '&fetchStart=' + perf.fetchStart +
            '&loadEventStart=' + perf.loadEventStart +
            '&loadEventEnd=' + perf.loadEventEnd +
            '&domainLookupStart=' + perf.domainLookupStart +
            '&domainLookupEnd=' + perf.domainLookupEnd;

        var imgElement = document.createElement('img');
        imgElement.src = 'http://nodesdt.dev:3000/embed/tracking/client-tracking-pixel.gif' + q;
        imgElement.height = 1;
        imgElement.width = 1;
        document.body.appendChild(imgElement);
    };

})();
