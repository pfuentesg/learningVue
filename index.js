
/* declaring my firs vue compoent*/
var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!, this is my first vue compoent'
    }
  })
/** with app-2 we'll check if this components are reactive for real (date always changes) */
  var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'You loaded this page on ' + new Date().toLocaleString()
    }
  })
/** app-3 finds out the v-if function */
  var app3 = new Vue({
    el: '#app-3',
    data: {
      seen: true
    }
  })
  /** app-4 finds out the v-for function */

  var app4 = new Vue({
    el: '#app-4',
    data: {
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    }
  })
  
  var app5 = new Vue({
    el: '#app-5',
    data: {
      message: 'Reverse me!!'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
  })  

  var app6 = new Vue({
    el: '#app-6',
    data: {
      message: 'Hello Vue!'
    }
  })