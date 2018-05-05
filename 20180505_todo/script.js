Vue.component('todo', {
  template: `
  <div class="todo content">
    <div class="title is-4">Todo</div>
    <ul id="list">
      <li v-for="item in todolist">{{ item }}</li>
    </ul>
    <div class="form">
      <input id="input" class="input is-primary" type="text" placeholder="Add a todo item">
      <button class="button" @click="onSubmit">Add</button>
    </div>
  </div>
  `,
  data() {
    return {
      todolist: [],
    };
  },
  methods: {
    onSubmit(e) {
      let input = document.getElementById('input')
      this.todolist.push(input.value);
      input.value = ""
    }
  },
});


Vue.component('placeholder', {
  template: `
    <div class="placeholder">
      <div class="placeholder-toggle button" @click="onTogglePlaceholder">Placeholder</div>
      <div class="content placeholder-text" v-bind:style="{ 'display': isActive }">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec vehicula diam. In hac habitasse platea dictumst. Nunc placerat consectetur est, nec sagittis nulla sollicitudin quis. In hac habitasse platea dictumst. Phasellus vel eros dolor. Donec a lorem ac mauris pellentesque mattis non egestas sem. Phasellus eu risus porttitor, vehicula risus nec, ultrices tellus. Sed molestie ligula ac tellus pellentesque sagittis. Phasellus eu pulvinar leo. Ut sed erat consequat, accumsan justo at, dictum sapien. Donec dictum luctus blandit. Fusce dapibus tortor sed purus egestas, sit amet faucibus mi cursus. Vivamus tempus mauris congue nisl tristique porta. Vivamus blandit imperdiet dui ac pharetra. Donec ligula diam, tristique id feugiat a, tincidunt nec purus. Donec sed varius mauris, nec tincidunt neque.
        Praesent nec elit ut lorem ultricies condimentum eu id odio. Sed non pretium massa. Nulla sed dapibus metus. Phasellus a nisi ornare, posuere neque ultrices, dapibus justo. Curabitur eu efficitur felis, sed euismod risus. Nulla luctus ante ac varius elementum. Morbi justo quam, molestie nec nisi aliquam, hendrerit malesuada purus. Nam ante odio, tempor et eleifend gravida, tempor a ligula. Sed maximus lobortis velit, a laoreet mi congue in. Morbi ac volutpat lectus. Nulla eu dui leo. Pellentesque dignissim mauris eu orci rutrum eleifend. Nulla ultricies odio a enim scelerisque, id viverra odio pretium.
        Etiam nulla orci, vehicula sit amet rutrum ac, sollicitudin vel leo. Sed at augue in tellus semper commodo. Proin eget velit in leo condimentum hendrerit vitae sit amet nibh. Mauris massa lacus, efficitur et enim vitae, sollicitudin aliquam sapien. Suspendisse condimentum pellentesque purus at viverra. Duis interdum semper diam, ut efficitur magna fermentum nec. Duis venenatis nisl et tempus lacinia. Aliquam augue augue, facilisis maximus sodales ut, mattis non tortor. Suspendisse luctus pretium facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec odio eget dolor tristique malesuada vel ac arcu. In vehicula nunc mi, at sollicitudin nulla iaculis eget. Donec eu massa feugiat, ultricies urna quis, dapibus augue. Curabitur vel porttitor nibh.
        Nam vulputate purus eu nisi condimentum, a lobortis quam molestie. Nunc risus orci, congue a felis sed, hendrerit varius mauris. Cras imperdiet luctus neque nec accumsan. Nunc tincidunt, ligula a aliquam bibendum, mi arcu fringilla ante, sed luctus sapien mi eget enim. Praesent imperdiet nisl eget ipsum commodo dapibus. Donec imperdiet lectus vel fringilla posuere. Mauris posuere ornare ipsum eu faucibus. Aliquam eget eros lorem. Proin interdum quis arcu vel dapibus. Maecenas sit amet interdum leo. Pellentesque pulvinar erat in purus varius, at interdum leo mollis. Curabitur eget tempus nisi. Fusce ut ultricies magna, pellentesque aliquam tortor.
        In sodales rhoncus volutpat. Sed interdum fermentum vulputate. Donec tincidunt ligula nisl, vitae posuere leo dapibus scelerisque. Integer ullamcorper ex magna, eget porttitor nisi iaculis a. Vivamus vestibulum auctor quam, ut fermentum elit hendrerit nec. Praesent a rhoncus orci, in tincidunt erat. Sed imperdiet ex id tellus vestibulum, ut ullamcorper purus finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
      </div>
    </div>
  `,
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    onTogglePlaceholder() {
      if (this.isActive != "block") {
        this.isActive = "block";
      } else {
        this.isActive = "none";
      }
    }
  },
});

var app = new Vue({
  el: '#app-container',
  data: {
    message: "Hi"
    }
  })
