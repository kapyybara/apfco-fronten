<template>
  <div class="relations">
    <img src="/images/realtions_banner.jpg" alt="" />
    <div class="relations__menu md-semibold">
      <span @click="setCurr({ value: 'relations__menu-1', index: 0 })">{{
        $t('relations__menu-1')
      }}</span>
      <span @click="setCurr({ value: 'relations__menu-2', index: 1 })">{{
        $t('relations__menu-2')
      }}</span>
      <span @click="setCurr({ value: 'relations__menu-3', index: 2 })">{{
        $t('relations__menu-3')
      }}</span>
      <span @click="setCurr({ value: 'relations__menu-4', index: 3 })">{{
        $t('relations__menu-4')
      }}</span>
      <span @click="setCurr({ value: 'relations__menu-5', index: 4 })">{{
        $t('relations__menu-5')
      }}</span>
    </div>
    <div class="relations-main container">
      <h2 class="xxl-bold">{{ $t(curr) }}</h2>
      <div class="relations__content">
        <div
          class="group"
          :key="group.id"
          v-for="group in documents[currIndex]"
        >
          <span class="group__title xl-semibold"> {{ group.name }}</span>
          <a
            :href="document.link"
            class="item"
            v-for="document in group.values"
            :key="document.id"
          >
            <img src="/icons/pdf.png" alt="" />
            <p>{{ document.name }}</p>
          </a>
        </div>
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
      documents: [
        [
          {
            id: 1,
            name: 'Điều lệ Công ty',
            values: [
              {
                id: 1,
                name: 'Nghị quyết của HĐQT V/v ban hành điều lệ Công ty CP NSTP Quảng Ngãi.',
                link: 'https://drive.google.com/file/d/1afoH6kNsJBLj6RrbZWNddSyNk9N17LfH/view0',
              },
              {
                id: 2,
                name: 'Điều lệ Công ty',
                link: 'https://drive.google.com/file/d/1meMHJvGiEFJtIkBnVlHUAEQ4LbLA3Pks/view',
              },
            ],
          },
          {
            id: 2,
            name: 'Quy chế nội bộ về quản trị Công ty',
            values: [
              {
                id: 1,
                name: 'Nghị quyết của HĐQT V/v ban hành Quy chế nội bộ về quản trị Công ty CP NSTP Quảng Ngãi.',
                link: 'https://drive.google.com/file/d/1rXRDFmyNxGVoBEkK9ymSZt7n-5mNQbNm/view',
              },
              {
                id: 2,
                name: 'Quy chế Nội bộ về quản trị Công ty',
                link: 'https://drive.google.com/file/d/1fLApNZOAX0NUZ620_pUV2-fKj7PFEQL8/view',
              },
            ],
          },
          {
            id: 3,
            name: 'Quy chế hoạt động của Hội đồng quản trị',
            values: [
              {
                id: 1,
                name: 'Nghị quyết của HĐQT V/v ban hành Quy chế hoạt động của HĐQT Công ty CP NSTP Quảng Ngãi.',
                link: 'https://drive.google.com/file/d/1HTHgrVXulhX_SW6oEV_YmSU3jTi04hWk/view',
              },
              {
                id: 2,
                name: 'Điều lệ Công ty',
                link: 'https://drive.google.com/file/d/1L6t6JFykMmkokR9stNOK_kd6vTN_U2Yu/view',
              },
              {
                id: 3,
                name: 'Quy chế hoạt động của HĐQT',
                link: 'https://drive.google.com/file/d/1L6t6JFykMmkokR9stNOK_kd6vTN_U2Yu/view?usp=sharing',
              },
            ],
          },
          {
            id: 4,
            name: 'Quy chế hoạt động của Ban kiểm soát',
            values: [
              {
                id: 1,
                name: 'Nghị quyết của BKS V/v ban hành Quy chế hoạt động của BKS Công ty CP NSTP Quảng Ngãi.',
                link: 'https://drive.google.com/file/d/1MNYl2CzWYJpVZwxawooWK0XqTt-_Z3w-/view?usp=sharing',
              },
              {
                id: 2,
                name: 'Điều lệ Công ty',
                link: 'https://drive.google.com/file/d/1L6t6JFykMmkokR9stNOK_kd6vTN_U2Yu/view',
              },
              {
                id: 3,
                name: 'Quy chế hoạt động của BKS',
                link: 'https://drive.google.com/file/d/1Cid60AaXKUlbBxp31XEYpMBzYdGoncIx/view?usp=sharing',
              },
            ],
          },
        ],
        [
          {
            id: 1,
            name: 'Biên bản và Nghị quyết ĐHCĐ thường niên 2022 (19h45: 17/4/2022).',
            values: [
              {
                id: 1,
                name: 'Biên bản Đại hội cổ đông thường niên 2022.',
                link: 'https://drive.google.com/file/d/1C7vygd52tlaxWjXt_O0ECHsJ9GcdwjeH/view?usp=sharing',
              },
              {
                id: 2,
                name: 'Nghị quyết Đại hội cổ đông thường niên 2022.',
                link: 'https://drive.google.com/file/d/1KETOR7SAgPW-kTt9oCjvYNW0-plBToHF/view?usp=sharing',
              },
            ],
          },
          {
            id: 2,
            name: 'Biên bản và Nghị quyết ĐHCĐ thường niên 2021 (10h30: 19/04/2021). ',
            values: [
              {
                id: 1,
                name: 'Biên bản Đại hội cổ đông thường niên 2021.',
                link: 'https://drive.google.com/file/d/1_TqvmlKHHjMd7OahR_0EcvvX8TiQLd1Y/view?usp=sharing',
              },
              {
                id: 2,
                name: 'Nghị quyết Đại hội cổ đông thường niên 2021.',
                link: 'https://drive.google.com/file/d/1xXTQcXWJpcW2ot-IKcCyrf5tx95cHDyI/view?usp=sharing',
              },
            ],
          },
          {
            id: 3,
            name: 'Biên bản và Nghị quyết ĐHCĐ thường niên 2020 (08h30: 07/06/2020).',
            values: [
              {
                id: 1,
                name: 'Biên bản Đại hội cổ đông thường niên 2020.',
                link: 'http://apfco.com.vn/dbase/file/Nam%202020/BB%20DHCD%202020.pdf',
              },
              {
                id: 2,
                name: 'Nghị quyết Đại hội cổ đông thường niên 2020.',
                link: 'http://apfco.com.vn/dbase/file/Nam%202020/NQ%20DHCD%202020.pdf',
              },
            ],
          },
          {
            id: 4,
            name: 'Biên bản và Nghị quyết ĐHCĐ thường niên 2018 (14h40: 16/04/2018).',
            values: [
              {
                id: 1,
                name: 'Biên bản Đại hội cổ đông thường niên 2018.',
                link: 'https://drive.google.com/open?id=11YPahHEvf9B5CTbqngCpEn_RUxcILojb',
              },
              {
                id: 2,
                name: 'Nghị quyết Đại hội cổ đông thường niên 2018.',
                link: 'https://drive.google.com/open?id=1KkNL5jdyo_ozjz1Ap_u9t7i0iBkEdzEy',
              },
            ],
          },
          {
            id: 5,
            name: 'Thông báo tổ chức Đại hội cổ đông thường niên năm 2018 (14h05: 03/04/2018).',
            values: [
              {
                id: 1,
                name: 'Phiếu đăng ký tham dự Đại hội',
                link: 'https://drive.google.com/open?id=11YPahHEvf9B5CTbqngCpEn_RUxcILojb',
              },
              {
                id: 2,
                name: 'Phiếu ủy quyền tham dự Đại hội ',
                link: 'http://apfco.com.vn/dbase/file/2018/Phieu%20uy%20quyen%20du%20DHCD%202018.doc',
              },
            ],
          },
        ],
        [
          {
            id: 1,
            name: 'Báo cáo tài chính QIII/2022 (17h00: 26/10/2022).',
            values: [
              {
                id: 1,
                name: 'Báo cáo tài chính hợp nhất  ',
                link: 'https://drive.google.com/file/d/1De1RYaTyXG4sJSKQASJycHgPeap_G3zO/view?usp=sharing',
              },
              {
                id: 2,
                name: 'Báo cáo tài chính',
                link: 'https://drive.google.com/file/d/1R4QkoSjarXrGiSo6YPoRuhAdzuHYWye-/view?usp=sharing',
              },
              {
                id: 3,
                name: 'Giải trình Báo cáo tài chính',
                link: 'https://drive.google.com/file/d/1ALnxd2zWe50MaUJRHgyfJ-aDT7c2Fete/view?usp=sharing',
              },
            ],
          },
          {
            id: 2,
            name: 'Báo cáo tài chính giữa niên độ cho kỳ kế toán 6 tháng đầu năm 2022 đã kiểm toán. (17h00: 26/08/2022).',
            values: [
              {
                id: 1,
                name: 'Báo cáo tài chính hợp nhất  ',
                link: 'https://drive.google.com/file/d/1De1RYaTyXG4sJSKQASJycHgPeap_G3zO/view?usp=sharing',
              },
              {
                id: 2,
                name: 'Báo cáo tài chính',
                link: 'https://drive.google.com/file/d/1R4QkoSjarXrGiSo6YPoRuhAdzuHYWye-/view?usp=sharing',
              },
              {
                id: 3,
                name: 'Giải trình Báo cáo tài chính',
                link: 'https://drive.google.com/file/d/1ALnxd2zWe50MaUJRHgyfJ-aDT7c2Fete/view?usp=sharing',
              },
            ],
          },
          {
            id: 3,
            name: 'Báo cáo tài chính QII/2022. (17h40: 28/7/2022).',
            values: [
              {
                id: 1,
                name: 'Báo cáo tài chính hợp nhất  ',
                link: 'https://drive.google.com/file/d/166dmEeUA5uhbkR9ZhRU7Eb_xKpYdFMZq/view?usp=sharing',
              },
              {
                id: 2,
                name: 'Báo cáo tài chính',
                link: 'https://drive.google.com/file/d/19qsielLhdfWP6BpN46iTQm7684MFgUHj/view?usp=sharing',
              },
              {
                id: 3,
                name: 'Giải trình Báo cáo tài chính',
                link: 'https://drive.google.com/file/d/1EzQ8DttO01Rk-wA6x18x2CZVGJxLcepn/view?usp=sharing',
              },
            ],
          },
          {
            id: 4,
            name: 'Báo cáo tài chính QI/2022. (09h15: 29/04/2022). ',
            values: [
              {
                id: 1,
                name: 'Báo cáo tài chính hợp nhất  ',
                link: 'https://drive.google.com/file/d/1dWq_tGd7EQaskbC94zryPy5BIYoeP-_R/view?usp=sharing',
              },
              {
                id: 2,
                name: 'Báo cáo tài chính',
                link: 'https://drive.google.com/file/d/1iHgtdUlkFAbKAAUNFWl9sYm1BItYmPgk/view?usp=sharing',
              },
              {
                id: 3,
                name: 'Giải trình Báo cáo tài chính',
                link: 'https://drive.google.com/file/d/1KSpB6AtmE0YsPMqtJ4POp8EC483TK49c/view?usp=sharing',
              },
            ],
          },
          {
            id: 5,
            name: 'Báo cáo tài chính năm 2021. (09h00: 10/3/2022). ',
            values: [
              {
                id: 1,
                name: 'Báo cáo tài chính hợp nhất  ',
                link: 'https://drive.google.com/file/d/17_iTItbC1GhNo-R0eicupPkDWVfoMGSp/view?usp=sharing',
              },
              {
                id: 2,
                name: 'Báo cáo tài chính',
                link: 'https://drive.google.com/file/d/1njvAcGB3mXnrEsLzDG8s8ewr6kS-AdI3/view?usp=sharing',
              },
              {
                id: 3,
                name: 'Giải trình Báo cáo tài chính',
                link: 'https://drive.google.com/file/d/1bWu1DBfgeqKSRY8sD7-tbSiNbinwwBI-/view?usp=sharing',
              },
            ],
          },
        ],
        [
          {
            id: 1,
            name: '',
            values: [
              {
                id: 1,
                name: 'Báo cáo thường niên 2021 (15h15: 19/4/2022).',
                link: 'https://drive.google.com/file/d/1x9IFaGpBKcQo3V7L4S2I1ZsiO4F-ozZa/view?usp=sharing',
              },
              {
                id: 2,
                name: 'Báo cáo thường niên năm 2020. (15h30: 19/04/2021).',
                link: 'https://drive.google.com/file/d/1735ofTDvjNaBW3q7m3j4hAuE0SUUXUTb/view?usp=sharing',
              },
              {
                id: 3,
                name: 'Báo cáo thường niên năm 2019. (08h40: 04/04/2020).',
                link: 'https://drive.google.com/file/d/1bWu1DBfgeqKSRY8sD7-tbSiNbinwwBI-/view?usp=sharing',
              },
              {
                id: 3,
                name: 'Báo cáo thường niên 2018. (14h00: 27/04/2019).',
                link: 'https://drive.google.com/open?id=1tlI38T4bXFf5EPpTpmhNgajoxyp6XSWb',
              },
              {
                id: 4,
                name: 'Báo cáo thường niên 2017. (10h20: 26/04/2018).',
                link: 'https://drive.google.com/open?id=1tBeyHOcRTIbNvZ02q6WvKNFwRFpJo1uv',
              },
            ],
          },
        ],
      ],
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
        box-shadow: -0px 0px;
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
    flex-direction: column;
    width: inherit;
    align-items: start;
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
</style>
