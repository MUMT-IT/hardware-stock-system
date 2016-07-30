var deviceReadyDeferred = $.Deferred();
var jqmReadyDeferred = $.Deferred();

document.addEventListener("deviceready", deviceReady, false);
function deviceReady() {
    deviceReadyDeferred.resolve();
}

$(document).on("mobileinit", function() {
    jqmReadyDeferred.resolve();
});

$.when(deviceReadyDeferred, jqmReadyDeferred).then(init);

function init() {
    // add some code here
}
