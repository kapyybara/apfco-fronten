<template>
  <div class="csr">
    <div ref="carouselRef" class="csr-inner" :style="innerStyle">
      <slot />
    </div>
    <div class="control padding" :class="{ container }">
      <span class="control__item prev" @click="triggerPrev()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="18"
          viewBox="0 0 10 18"
          fill="none"
        >
          <path
            d="M9.00007 17.25C8.80128 17.2473 8.61069 17.1704 8.46569 17.0343L0.965694 9.53435C0.824858 9.39215 0.74585 9.20011 0.74585 8.99997C0.74585 8.79984 0.824858 8.60779 0.965694 8.4656L8.46569 0.965596C8.61142 0.845999 8.79641 0.78488 8.9847 0.794128C9.17299 0.803375 9.35111 0.882328 9.48441 1.01563C9.61771 1.14893 9.69667 1.32705 9.70591 1.51534C9.71516 1.70363 9.65404 1.88862 9.53444 2.03435L2.55944 8.99997L9.53444 15.9656C9.67528 16.1078 9.75429 16.2998 9.75429 16.5C9.75429 16.7001 9.67528 16.8922 9.53444 17.0343C9.38945 17.1704 9.19885 17.2473 9.00007 17.25Z"
            fill="white"
          />
        </svg>
      </span>
      <span class="control__item next" @click="triggerNext()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="18"
          viewBox="0 0 10 18"
          fill="none"
        >
          <path
            d="M0.999825 17.25C0.801039 17.2473 0.610442 17.1704 0.46545 17.0343C0.324614 16.8922 0.245605 16.7001 0.245605 16.5C0.245605 16.2998 0.324614 16.1078 0.46545 15.9656L7.44045 8.99997L0.46545 2.03435C0.345853 1.88862 0.284734 1.70363 0.293981 1.51534C0.303229 1.32705 0.382182 1.14893 0.515483 1.01563C0.648784 0.882328 0.826902 0.803375 1.01519 0.794128C1.20348 0.78488 1.38848 0.845999 1.5342 0.965596L9.0342 8.4656C9.17504 8.60779 9.25404 8.79984 9.25404 8.99997C9.25404 9.20011 9.17504 9.39215 9.0342 9.53435L1.5342 17.0343C1.38921 17.1704 1.19861 17.2473 0.999825 17.25Z"
            fill="white"
          />
        </svg>
      </span>
    </div>
    <div v-if="indexVisible" class="index">
      <span
        v-for="i in length"
        :key="i"
        class="index__point"
        :class="{ 'index-active': i === index + 1 }"
        @click="index = i - 1"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonCarousel',
  props: {
    length: { type: Number, required: true },
    step: { type: Number, required: true },
    unit: { type: String, required: true, default: 'px' },
    container: { type: Boolean, default: false },
    indexVisible: { type: Boolean, default: true },
  },
  data() {
    return {
      position: 0,
      index: 0,
      direct: true,
    }
  },
  computed: {
    innerStyle() {
      return {
        left: `-${this.step * this.index}${this.unit}`,
      }
    },
  },
  methods: {
    triggerNext() {
      if (this.index < this.length - 1) {
        // this.position = Number(this.position) - Number(this.step)
        this.index = this.index + 1
      }
    },
    triggerPrev() {
      if (this.index > 0) {
        // this.position = Number(this.position) + Number(this.step)
        this.index = this.index - 1
      }
    },
    autoTransition() {
      setInterval(() => {
        if (this.direct) this.triggerNext()
        else this.triggerPrev()

        if (this.index === this.length - 1) this.direct = false
        else if (this.index === 0) this.direct = true
      }, 5000)
    },
  },
  created() {
    this.autoTransition()
  },
}
</script>

<style lang="scss" scoped>
.csr {
  position: relative;
  width: inherit;
  height: fill;
  min-height: 300px;
  width: fill;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  height: 600px;

  &-inner {
    position: absolute;
    top: 0;
    left: 0;

    padding: 0;

    height: fit-content;
    display: flex;

    width: fit-content;

    transition: all 0.5s ease-out;
  }
}

.control {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  top: 50%;
  left: 0;
  right: 0;

  transform: translateY(-50%);

  &__item {
    width: 2rem;
    height: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;

    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(0.125rem);

    border-radius: 5rem;
    cursor: pointer;

    & > * {
      transform: scale(0.8);
    }
  }
}

.index {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  display: flex;

  flex-direction: row;

  cursor: pointer;

  & > * + * {
    margin-left: 0.5rem;
  }

  &__point {
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 2rem;
    background: #ffffff;
    opacity: 0.5;
  }

  &-active {
    opacity: 1;
  }
}
</style>
