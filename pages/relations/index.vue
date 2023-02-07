<template>
  <div class="relations">
    <img src="/images/realtions_banner.jpg" alt="" />
    <div class="relations__menu md-semibold">
      <nuxt-link
        to="relations"
        @click="setCurr({ value: 'relations__menu-1', index: 0 })"
        >{{ $t('relations__menu-1') }}</nuxt-link
      >
      <nuxt-link
        to="relations"
        @click="setCurr({ value: 'relations__menu-2', index: 1 })"
        >{{ $t('relations__menu-2') }}</nuxt-link
      >
      <nuxt-link
        to="relations"
        @click="setCurr({ value: 'relations__menu-3', index: 2 })"
        >{{ $t('relations__menu-3') }}</nuxt-link
      >
      <nuxt-link
        to="relations"
        @click="setCurr({ value: 'relations__menu-4', index: 3 })"
        >{{ $t('relations__menu-4') }}</nuxt-link
      >
      <nuxt-link
        to="relations"
        @click="setCurr({ value: 'relations__menu-5', index: 4 })"
        >{{ $t('relations__menu-5') }}</nuxt-link
      >
    </div>
    <div class="listyear">
      <a class="listyear__item" href="http://apfco.com.vn/?v=o&sj=05"
        ><span>2016</span></a
      >
      <a class="listyear__item" href="http://apfco.com.vn/?v=o&sj=05"
        ><span>2017</span></a
      >
      <a class="listyear__item" href="http://apfco.com.vn/?v=o&sj=05"
        ><span>2018</span></a
      >
      <a class="listyear__item" href="http://apfco.com.vn/?v=o&sj=05"
        ><span>2019</span></a
      >
      <a class="listyear__item" href="http://apfco.com.vn/?v=o&sj=05"
        ><span>2020</span></a
      >
      <a class="listyear__item" href="http://apfco.com.vn/?v=o&sj=05"
        ><span>2021</span></a
      >
      <a class="listyear__item" href="http://apfco.com.vn/?v=o&sj=05"
        ><span>2022</span></a
      >
      <a class="listyear__item" href="http://apfco.com.vn/?v=o&sj=05"
        ><span>2023</span></a
      >
    </div>
    <div class="relations-main container">
      <h2 class="xxl-bold">{{ $t(curr) }}</h2>
      <div class="relations__content">
        <a
          :href="document.link"
          class="item"
          v-for="document in [
            { link: 'http://apfco.com.vn/?v=o&sj=05', name: 'Tài liệu apfco' },
            { link: 'http://apfco.com.vn/?v=o&sj=05', name: 'Tài liệu apfco' },
            { link: 'http://apfco.com.vn/?v=o&sj=05', name: 'Tài liệu apfco' },
            { link: 'http://apfco.com.vn/?v=o&sj=05', name: 'Tài liệu apfco' },
            { link: 'http://apfco.com.vn/?v=o&sj=05', name: 'Tài liệu apfco' },
            { link: 'http://apfco.com.vn/?v=o&sj=05', name: 'Tài liệu apfco' },
            { link: 'http://apfco.com.vn/?v=o&sj=05', name: 'Tài liệu apfco' },
            { link: 'http://apfco.com.vn/?v=o&sj=05', name: 'Tài liệu apfco' },
            { link: 'http://apfco.com.vn/?v=o&sj=05', name: 'Tài liệu apfco' },
          ]"
          :key="document._id"
        >
          <img src="/icons/pdf.png" alt="" />
          <p>{{ document.name }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ApfcoFrontenRelations',
  methods: {
    setCurr({ value, index }) {
      this.curr = value
      this.currIndex = index
    },
  },
  data() {
    return {
      curr: 'relations__menu-1',
      currIndex: 0,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/colors.scss';
@import '~/assets/styles/mixins/responsive';

.relations {
  width: 100vw;
  position: relative;
  padding-top: 350px;

  & > img {
    width: 100vw;
    height: 450px;
    object-fit: cover;
    position: fixed;
    top: 10px;
    left: 0;
    z-index: -1;
  }

  &__menu {
    position: absolute;
    left: 50%;
    top: 320px;
    transform: translateX(-50%);
    display: flex;
    flex-direction: row;
    z-index: 99;

    & > * {
      padding: 1rem 2rem;
      background: $apfco-green;
      color: #fff;
      width: fit-content;
      white-space: nowrap;
      margin: 0.2rem;
      transition: all 0.3s ease-out;
      cursor: pointer;
      box-shadow: -4px 4px;

      &:hover {
        filter: brightness(1.2);
      }
    }

    @include mobile {
      flex-direction: column;
      top: 20px;

      & > * {
        width: fill;
        text-align: center;
      }
    }
  }

  &-main {
    width: fill;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding: 4rem 0;

    @include mobile {
      padding: 2rem 1rem;
    }

    & > h2 {
      color: $apfco-green;
    }

    &::before {
      content: '';
      position: absolute;
      width: 100vw;
      height: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: -1;
      background-color: #fff;
    }
  }

  &__content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: fill;
    margin-top: 2rem;
    & > a {
      width: 50%;
    }
  }
}

.group {
  display: flex;
  flex-direction: column;
  width: fill;

  &__title {
    margin: 1.5rem 0;
  }
}

.item {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0.5rem;
  width: fill;
  padding: 0.5rem;
  transition: all 0.3s ease-out;

  &:hover {
    background: #dedede;
  }

  & > img {
    width: 2rem;
    margin-right: 1rem;
  }
}

.listyear {
  width: fill;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;

  &__item {
    padding: 0.5rem 2rem;
    margin: 1rem 1rem;
    border-bottom: 2px solid rgb(1, 145, 71);
    color: rgb(1, 145, 71);
    background-color: rgba(237, 255, 246);
    transition: all 0.2s ease-in;
    position: relative;
    overflow: hidden;
    transition: all 0.2s ease-in;
    & > span {
      transition: all 0.2s ease-in;
      position: relative;
      z-index: 2;
    }
    &:before {
      z-index: 1;
      position: absolute;
      content: '';
      bottom: -100%;
      left: 50%;
      transform: translateX(-50%);
      background-color: rgb(1, 145, 71);
      width: 100%;
      height: 100%;
      transition: all 0.2s ease-in;
    }
    &:hover {
      color: white;
      &::before {
        bottom: 0;
      }
    }
  }
}
</style>
