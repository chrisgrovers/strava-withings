
new Vue({
  el: '#app',
  data: {
    user: {
      strava: {
        username: null,
        password: null,
        token: null
      },
      withings: {
        username: null,
        password: null,
        token: null
      },
    },
    ready: function()  {
      console.log('ready');
      debugger;
    },
    methods: {

    },
    message: 'Hello Vue!'
  }
});