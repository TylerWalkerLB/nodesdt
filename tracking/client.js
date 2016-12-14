;(function(){

    window.onload = function() {

        // Must set timeout to assure performance.timing.loadEventEnd has been set
        setTimeout(function(){
            var perf = performance.timing;
            var nav = navigator;

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
                '&domainLookupEnd=' + perf.domainLookupEnd +
                '&navigationStart=' + perf.navigationStart +
                '&oscpu=' + encodeURI(nav.oscpu) +
                '&platform=' + encodeURI(nav.platform) +
                '&userAgent=' + encodeURI(nav.userAgent) +
                '&language=' + encodeURI(nav.language) +
                '&locationProtocol=' + window.location.protocol +
                '&locationHost=' + window.location.host +
                '&locationPathname=' + window.location.pathname;

            var imgElement = document.createElement('img');
            imgElement.src = 'http://nodesdt.dev:3000/embed/tracking/client-tracking-pixel.gif' + q;
            imgElement.height = 0;
            imgElement.width = 0;
            imgElement.style.display = 'none';
            document.body.appendChild(imgElement);
        }, 0);
    };

})();
