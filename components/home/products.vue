<template>
  <div class="product container">
    <h2 class="xxl-semibold">{{ $t("home__product-title") }}</h2>
    <span class="divider-decor"></span>
    <p class="xl-normal product__des">
      {{ $t("home__product-content") }}
    </p>
       <div class="productList-wrap">
           <div class="productList" ref="productListRef">
             <div  v-for="product in products" :key="product.id" class="productItem">
               <img
                 class="productItem__img"
                 :src="product.img"
                 :alt="product.name"
               />
               <!-- <p class="productItem__name md-semibold">{{ product.name }} </p> -->
             </div>
         </div>
        <div class="control padding " >
            <span class="control__item prev" @click="scrollToPrev()">
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
            <span class="control__item next" @click="scrollToNext()">
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
       </div>
  </div>
</template>

<script>
export default {
  name: 'HomeProduct',
  data() {
    return {
      index: 1
    }
  },
  methods: {
    scrollToNext() {
      this.index = this.index + 1
      this.$refs.productListRef.scrollBy((this.index * 100), 0)
    },
    scrollToPrev() {
      this.index = this.index - 1
      this.$refs.productListRef.scrollBy((this.index * 100), 0)
    }
  },
  mounted() {
    this.$refs.productListRef.scrollBy(100, 0)
  },
  props: {
    products: {
      type: Array,
      default: () => [
        {
          id: 1,
          img: '/images/SP1.png',
          name: 'Tinh bột sắn APFCO',
        },
        {
          id: 2,
          img: '/images/SP2.png',
          name: 'Tinh bột sắn APFCO',
        },
        {
          id: 3,
          img: '/images/SP3.png',
          name: 'Tinh bột sắn APFCO',
        },
        {
          id: 4,
          img: '/images/SP4.png',
          name: 'Tinh bột sắn APFCO',
        },
        {
          id: 5,
          img: '/images/SP5.png',
          name: 'Tinh bột sắn APFCO',
        },
        {
          id: 6,
          img: '/images/SP6.png',
          name: 'Tinh bột sắn APFCO',
        },
        {
          id: 7,
          img: '/images/SP6.png',
          name: 'Tinh bột sắn APFCO',
        },
        {
          id: 8,
          img: '/images/SP6.png',
          name: 'Tinh bột sắn APFCO',
        },
        {
          id: 9,
          img: '/images/SP6.png',
          name: 'Tinh bột sắn APFCO',
        },
      ],
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/colors.scss';
@import '~/assets/styles/mixins/responsive';

.product {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  padding: 6rem 0;

  @include mobile {
    padding: 3rem 1rem;

    &>* {
      margin-bottom: 1rem;
    }
  }

  &>* {
    margin-bottom: 2rem;
  }

  &>h2 {
    color: $apfco-green;
  }

  & .divider-decor {
    width: 2rem;
    height: 0.25rem;
    display: block;

    background: $apfco-red;
    border-radius: 2px;
  }

  &__des {
    width: fill;
    max-width: 48rem;
    color: #667085;
    text-align: center;
  }

  &List {
    position: relative;
    width: 100vw;

    display: flex;
    justify-content: start;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;

    &-wrap {
      width: 100vw;
      position: relative;
    }

    &::-webkit-scrollbar {
      display: none;
    }

    &::before {}
  }

  &Item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem;

    scroll-snap-align: center;
    flex-shrink: 0;
    transform-origin: center center;

    &__img {
      width: 14rem;
    }

    &__name {
      text-align: center;
    }
  }

}

.control {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 99;

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

    &>* {
      transform: scale(0.8);
    }
  }
}

.product-carousel {
  width: 100vw !important;
}

.unactive {
  opacity: 0.3;
}
</style>
