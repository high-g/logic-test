var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello, world.'
    }
});

var app2 = new Vue({
    el: '#app2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
});

var app3 = new Vue({
    el: '#app3',
    data: {
        seen: true
    },
    methods: {
        switching: function() {
            this.seen = !this.seen;
        }
    }
});

var app4 = new Vue({
    el: '#app4',
    data: {
        message: 'hello'
    }
});