<template>
  <div class="wrap">
    <div id="box">
      <div id="marquee">{{text}}</div>
      <div id="copy"></div>
    </div>
    <div id="node">{{text}}</div>
  </div>
</template>
<script>
export default {
  name: 'Marquee',
  props: ['lists'],
  data () {
    return {
      text: ''
    }
  },
  methods: {
    move () {
      let width = document.getElementById('node').getBoundingClientRect().width
      let box = document.getElementById('box')
      let copy = document.getElementById('copy')
      copy.innerText = this.text
      let distance = 0
      setInterval(function () {
        distance = distance - 1
        if (-distance >= width) {
          distance = 16
        }
        box.style.transform = 'translateX(' + distance + 'px)'
      }, 20)
    }
  },
  mounted: function () {
    for (let i = 0; i < this.lists.length; i++) {
      this.text += ' ' + this.lists[i]
    }
  },
  updated: function () {
    this.move()
  }
}
</script>
<style scoped>
.wrap {
  overflow: hidden;
}
#box {
  width: 80000%;
}
#box div {
  float: left;
}
#marquee {
   margin: 0 16px 0 0;
}
#node {
  position: absolute;
  z-index: -999;
  top: -999999px;
}
</style>
