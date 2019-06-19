var app = new Vue({
  el: '#app',
  data: {
    newtodo: '',
    todoData: [],
    onEdit: false,
    cacheTodo: {},
    editText: ''
  },
  methods: {
    addTodo: function(){
      var value = this.newtodo.trim();
      var timestamp = Math.floor(Date.now());
      this.todoData.push({
        id: timestamp,
        title: value,
      })
      this.newtodo = '';
    },
    deleteTodo: function(key) {
      this.todoData.splice(key, 1);
    },
    editTodo: function(item, key) {
      console.log(item,key);
      this.cacheTodo = item;
      this.onEdit = true;
    },
    updateTodo: function(item){
      console.log(this.editText);
      item.title = this.editText;
      this.editText = '';
      this.cacheTodo = {};
      this.onEdit = false;
    }
  }
})