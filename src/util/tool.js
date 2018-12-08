

export const throttle= function(callback,time) {
    var lasttime = 0;
    return function () {
        var nowtime = new Date().getTime();
        if(nowtime- lasttime> time){
            callback();
            lasttime = new Date().getTime();
        }
    }
}

export const debounce= function(callback, delay = 200, context) {
    var timer;
    return function (e) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback.call(context, e);
        }, delay)
    }
}