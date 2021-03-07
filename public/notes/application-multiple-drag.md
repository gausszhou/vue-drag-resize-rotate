# 同时拖动多个元素

默认情况下，这不是组件提供的功能，但它是如何使用现有功能构建复杂方案的示例。

由于`ctrl`事件处理程序的注册方式，请确保在开始拖动元素之前单击容器内的任何位置。

```js
<template>
  <div class="view-box">
    <div id="toolbar">
      <label>
        <input type="checkbox" name="sync" v-model="sync" /> Synchronize (use
        <b>ctrl</b> key)
      </label>
    </div>
    <div class="container">
      <vdrr
        class-name-active="my-active-class"
        v-for="element in elements"
        :key="element.id"
        :x="element.x"
        :y="element.y"
        :w="200"
        :h="200"
        :resizable="false"
        @dragging="(left, top) => dragging(element.id, left, top)"
        @dragstop="(left, top) => dragstop(element.id, left, top)"
      >
        <p>{{ element.text }}</p>
      </vdrr>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sync: false,
      draggingId: null,
      prevOffsetX: 0,
      prevOffsetY: 0,
      elements: [
        { id: 1, x: 0, y: 0, text: 'Element 1' },
        { id: 2, x: 200, y: 200, text: 'Element 2' }
      ]
    }
  },
  computed: {
    draggingElement: function () {
      if (!this.draggingId) return;

      return this.elements.find(el => el.id === this.draggingId);
    }
  },
  mounted() {
    window.addEventListener('keydown', ev => {
      if (ev.keyCode === 17) {
        this.sync = true;
      }
    });
    window.addEventListener('keyup', ev => {
      if (ev.keyCode === 17) {
        this.sync = false;
      }
    });
  },
  methods: {
    dragging(id, left, top) {
      this.draggingId = id;

      if (!this.sync) return;

      const offsetX = left - this.draggingElement.x;
      const offsetY = top - this.draggingElement.y;

      const deltaX = this.deltaX(offsetX);
      const deltaY = this.deltaY(offsetY);

      this.elements.map(el => {
        if (el.id !== id) {
          el.x += deltaX;
          el.y += deltaY;
        }

        return el;
      });
    },
    dragstop(id, left, top) {
      this.elements.map(el => {
        if (el.id === id) {
          el.x = left;
          el.y = top;
        }

        return el;
      });

      this.draggingId = null;
      this.prevOffsetX = 0;
      this.prevOffsetY = 0;
      this.sync = false;
    },
    deltaX(offsetX) {
      const ret = offsetX - this.prevOffsetX;

      this.prevOffsetX = offsetX;

      return ret;
    },
    deltaY(offsetY) {
      const ret = offsetY - this.prevOffsetY;

      this.prevOffsetY = offsetY;

      return ret;
    }
  },

}
</script>

```


