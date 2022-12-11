<template>
  <div class="header-wrap" :class="{ hide: positionY > 200 }">
    <layout-header-sub />
    <div class="header padding">
      <div class="expand-icon">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="logo">
        <span>
          <svg
            width="92"
            height="50"
            viewBox="0 0 92 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_128_37261)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M46 0C71.4063 0 92.0013 11.1931 92.0013 25C92.0013 38.8069 71.4063 50 46 50C20.5938 50 0 38.8082 0 25C0 11.1918 20.595 0 46 0Z"
                fill="#019147"
              />
              <path
                d="M10.2703 34.132L14.67 15.9871H20.8508L24.8312 34.132H20.0654L19.3318 30.4615H15.036L14.1987 34.132H10.2703ZM15.6657 27.2508H18.7035L17.3417 19.8601L15.6657 27.2508ZM30.642 19.1978V23.639H31.4638C32.2505 23.639 32.8918 23.4862 33.3877 23.1805C33.6882 23.0064 33.9355 22.7528 34.1028 22.4472C34.2701 22.1416 34.351 21.7958 34.3367 21.4472C34.3367 20.6634 34.0291 20.0774 33.4137 19.689C32.8996 19.3659 32.2505 19.2044 31.4664 19.2044L30.642 19.1978ZM26.0242 34.132V15.9871H32.9048C34.7353 15.9871 36.198 16.3947 37.2928 17.2097C38.5045 18.111 39.1103 19.4195 39.1103 21.135C39.1103 23.1056 38.4612 24.5752 37.163 25.5435C35.9998 26.4091 34.4263 26.8423 32.4426 26.8432C32.2358 26.8432 31.8978 26.8262 31.4287 26.7923C30.9596 26.7583 30.7 26.7413 30.6498 26.7413V34.132H26.0242ZM40.4203 34.132V15.9871H51.4552V19.5035H45.0354V23.174H49.6026V26.6904H45.0354V34.1359L40.4203 34.132ZM65.7239 22.1943H61.4125C61.432 21.4726 61.3103 20.754 61.0542 20.0795C60.708 19.2819 60.1775 18.8826 59.4626 18.8817C58.5729 18.8817 57.9571 19.4678 57.6152 20.6399C57.3426 21.5734 57.2059 23.0103 57.205 24.9505C57.205 27.1275 57.3248 28.6079 57.5646 29.3917C57.8891 30.4802 58.5565 31.024 59.5665 31.0232C60.3697 31.0232 60.9426 30.7005 61.2853 30.0552C61.5761 29.4936 61.7215 28.5927 61.7215 27.3526L65.7239 27.7092C65.7239 29.7313 65.1614 31.3497 64.0362 32.5645C62.9111 33.7793 61.3532 34.3889 59.3626 34.3932C56.7973 34.3932 54.9076 33.4079 53.6933 31.4372C52.7179 29.8393 52.2302 27.6814 52.2302 24.9635C52.2302 22.3511 52.7093 20.2359 53.6674 18.6179C54.8981 16.5627 56.7965 15.5352 59.3626 15.5352C61.4675 15.5352 63.0756 16.1804 64.1868 17.471C65.2124 18.6605 65.7257 20.2406 65.7265 22.2113M66.5976 25.1138C66.5976 22.4464 67.1347 20.2972 68.2087 18.6662C69.5217 16.6781 71.5162 15.6841 74.1922 15.6841C76.8527 15.6841 78.8291 16.6694 80.1212 18.6401C81.1962 20.2885 81.7337 22.4464 81.7337 25.1138C81.7337 27.7976 81.2053 29.9468 80.1485 31.5613C78.8555 33.5494 76.87 34.5435 74.1922 34.5435C71.5335 34.5435 69.5481 33.5581 68.236 31.5874C67.1446 29.939 66.5985 27.7811 66.5976 25.1138ZM71.8983 25.1138C71.8983 27.3396 71.9892 28.7921 72.1709 29.4714C72.4816 30.6104 73.1554 31.1795 74.1922 31.1786C75.2126 31.1786 75.8687 30.6182 76.1604 29.4975C76.3421 28.8008 76.433 27.3396 76.433 25.1138C76.433 22.9045 76.3421 21.452 76.1604 20.7562C75.8687 19.6171 75.2126 19.048 74.1922 19.0489C73.1718 19.0498 72.5072 19.6102 72.1982 20.73C71.9983 21.4789 71.8983 22.9402 71.8983 25.1138Z"
                fill="#EA2127"
              />
            </g>
            <defs>
              <clipPath id="clip0_128_37261">
                <rect width="92" height="50" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
        <img src="images/sub-logo.png" alt="" />
      </div>
      <layout-header-navbar />
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
    }
  },
  mounted() {
    this.positionY = document.documentElement.scrollTop
    document.addEventListener('scroll', () => {
      this.positionY = document.documentElement.scrollTop
    })
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
    & > span {
      margin-right: 1rem;
      @include tablet {
        margin-right: 0;
      }
      & > svg {
        width: 4rem;
      }
    }
    & > img {
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

      & > span {
        margin: 0;
        & > svg {
          width: fill;
        }
      }
      & > img {
        display: none;
      }
    }
  }

  .ulti {
    display: flex;
    flex-direction: row;
    align-items: center;

    & > * {
      margin-right: 1rem;
    }

    @include mobile {
      & > button {
        display: none;
      }
      & > * {
        margin-right: 0rem;
      }
    }
  }
}

.expand-icon {
  display: flex;
  flex-direction: column;
  & > span {
    height: 3px;
    width: 2rem;
    background: #667085;
    border-radius: 10px;
    margin-bottom: 4px;
  }
}
.hide {
  transform: translateY(-30px);
  @include mobile {
    transform: none;
  }
}
</style>
