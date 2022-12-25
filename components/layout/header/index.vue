<template>
  <div class="header-wrap" :class="{ hide: positionY > 200 }">
    <layout-header-sub />
    <div class="header padding">
      <div class="expand-icon" @click="toggleNavBar">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nuxt-link to="/" class="logo">
        <span>
          <img src="/icons/Logo.png" alt="">
        </span>
        <img src="images/sub-logo.png" alt="" />
      </nuxt-link>
      <layout-header-navbar :show="showNav" />
      <div class="ulti">
        <span class="ulti__searchIcon">
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z"
              fill="#667085"
            />
          </svg>
        </span>
        <common-button value="Liên hệ" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutHeader',
  data() {
    return {
      positionY: 0,
      showNav: false,
    }
  },
  mounted() {
    this.positionY = document.documentElement.scrollTop
    document.addEventListener('scroll', () => {
      this.positionY = document.documentElement.scrollTop
    })
  },
  methods: {
    toggleNavBar() {
      this.showNav = !this.showNav
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/mixins/responsive';

.header {
  &-wrap {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    transition: all 0.5s ease-out;
    box-shadow: 0 3px 15px 0px #00000038;
  }

  height: 5rem;
  width: inherit;
  background: white;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;

    &>span {
      margin-right: 1rem;

      @include tablet {
        margin-right: 0;
      }

      &>svg {
        width: 4rem;
      }
    }

    &>img {
      height: 1.5rem;
      transition: all 0.2s ease-out;

      @include tablet {
        height: 1rem;
      }
    }

    @include tablet {
      flex-direction: column;
      margin-right: 1rem;
    }

    @include mobile {
      flex-direction: column;
      margin: 0rem;

      &>span {
        margin: 0;

        &>svg {
          width: fill;
        }
      }

      &>img {
        display: none;
      }
    }
  }

  .ulti {
    display: flex;
    flex-direction: row;
    align-items: center;

    &>* {
      margin-right: 1rem;
    }

    @include mobile {
      &>button {
        display: none;
      }

      &>* {
        margin-right: 0rem;
      }
    }
  }
}

.expand-icon {
  display: none;

  @include mobile {
    display: flex;
    flex-direction: column;

    &>span {
      height: 3px;
      width: 2rem;
      background: #667085;
      border-radius: 10px;
      margin-bottom: 4px;
    }
  }
}

.hide {
  transform: translateY(-30px);

  @include mobile {
    transform: none;
  }
}
</style>
