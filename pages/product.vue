<template>
  <div style="margin-top: 3rem">
    <div class="content-1 container">
      <p class="xxl-semibold content-1__title">
        {{ $t('product1__header-1') }}
      </p>
      <div class="content-1__inner sm-normal">
        <div class="content-1__inner-wrap">
          <p class="content-1__inner-1">
            {{ $t('product1__content-11') }}
          </p>
          <ul class="content-1__inner-ul">
            <li>- {{ $t('product1__content-12') }}</li>
            <li>- {{ $t('product1__content-13') }}</li>
            <li>- {{ $t('product1__content-14') }}</li>
          </ul>
          <ul class="">
            <li>- {{ $t('product1__content-18') }}</li>
            <li>- {{ $t('product1__content-19') }}</li>
          </ul>
          <div class="content-1__inner-3">
            <p class="md-semibold">{{ $t('product__content-15') }}</p>
            <ul class="">
              <li>- {{ $t('product1__content-16') }}</li>
              <li>- {{ $t('product1__content-17') }}</li>
            </ul>
          </div>
        </div>
        <img
          class="content-1__img"
          src="/images/tinh-bot-khoai-mi-dang-hat-vvwgpso3_1.jpeg"
          alt=""
        />
      </div>
    </div>
    <div class="content-1 container">
      <p class="xxl-semibold content-1__title">{{ $t('product__header-1') }}</p>
      <div class="content-1__inner sm-normal">
        <img class="content-1__img" src="/images/tinh-san.jpeg" alt="" />
        <div class="content-1__inner-wrap">
          <p class="content-1__inner-1">
            {{ $t('product__content-11') }}
          </p>
          <ul class="content-1__inner-ul">
            <li>- {{ $t('product__content-12') }}</li>
            <!-- <li>
              - {{ $t("product__content-13") }}
            </li> -->
            <li>- {{ $t('product__content-14') }}</li>
          </ul>
          <div class="content-1__inner-3">
            <p class="md-semibold">{{ $t('product__content-15') }}</p>
            <ul class="">
              <li>- {{ $t('product__content-16') }}</li>
              <li>- {{ $t('product__content-17') }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <template v-if="products">
      <product-item
        v-for="product in products"
        :key="product.id"
        :name="product.name"
        :feature="product.feature"
        :chara="product.chara"
        :img="product.img"
        :table="product.table"
        :index="products.indexOf(product)"
        class="product-wrap"
      />
    </template>

    <div class="container alcohol">
      <p class="xxl-semibold content-1__title">{{ $t('product2__header') }}</p>
      <div class="alcohol__inner sm-normal">
        <p class="content-1__inner-1">
          {{ $t('product2__content-1') }}
        </p>
        <table class="product__table">
          <tr>
            <th>{{ key }}{{ $t('product__tech1') }}</th>
            <th>{{ $t('product__tech2') }}</th>
            <th>{{ $t('product__tech3') }}</th>
          </tr>
          <tr>
            <td>{{ $t('row1-1') }}</td>
            <td>{{ $t('row1-2') }}</td>
            <td>{{ $t('row1-3') }}</td>
          </tr>
          <tr>
            <td>{{ $t('row2-1') }}</td>
            <td>{{ $t('row2-2') }}</td>
            <td>{{ $t('row2-3') }}</td>
          </tr>
          <tr>
            <td>{{ $t('row3-1') }}</td>
            <td>{{ $t('row3-2') }}</td>
            <td>{{ $t('row3-3') }}</td>
          </tr>
          <tr>
            <td>{{ $t('row4-1') }}</td>
            <td>{{ $t('row4-2') }}</td>
            <td>{{ $t('row4-3') }}</td>
          </tr>
          <tr>
            <td>{{ $t('row5-1') }}</td>
            <td>{{ $t('row5-2') }}</td>
            <td>{{ $t('row5-3') }}</td>
          </tr>
          <tr>
            <td>{{ $t('row6-1') }}</td>
            <td>{{ $t('row6-2') }}</td>
            <td>{{ $t('row6-3') }}</td>
          </tr>
          <tr>
            <td>{{ $t('row7-1') }}</td>
            <td>{{ $t('row7-2') }}</td>
            <td>{{ $t('row7-3') }}</td>
          </tr>
          <tr>
            <td>{{ $t('row8-1') }}</td>
            <td>{{ $t('row8-2') }}</td>
            <td>{{ $t('row8-3') }}</td>
          </tr>
          <tr>
            <td>{{ $t('row9-1') }}</td>
            <td>{{ $t('row9-2') }}</td>
            <td>{{ $t('row9-3') }}</td>
          </tr>
        </table>
        <p class="content-1__inner-1">
          {{ $t('product2__content-2') }}
        </p>
      </div>
    </div>
  </div>
</template>
qu

<script>
export default {
  // apollo: {
  //   products: {
  //     query: gql`
  //       query MyQuery {
  //         products: product {
  //           chara
  //           feature
  //           id
  //           index
  //           name
  //           table
  //           img
  //         }
  //       }
  //     `,
  //   },
  // },
  data() {
    return {
      products: [
        {
          id: 'f6d1cc53-56a1-47ad-ac69-01f3fa3d1c13',
          name: 'ACETYLATED DISTARCH ADIPATE - E.1422',
          img: '/images/thivien.png',
          feature: [
            'PRODUCT1__CHARA1',
            'PRODUCT1__CHARA2',
            'PRODUCT1__CHARA3',
            'PRODUCT1__CHARA4',
          ],
          chara: ['PRODUCT1__APP1', 'PRODUCT1__APP2', 'PRODUCT1__APP3'],
          table: [
            {
              name: 'PRODUCT__TABLE-1',
              unit: '%',
              spec: '≥ 85,0',
            },
            {
              name: 'PRODUCT__TABLE-2',
              unit: '%',
              spec: '≤ 13,0',
            },
            {
              name: 'PRODUCT__TABLE-3',
              unit: 'BU',
              spec: '≥ 650',
            },
            {
              name: 'PRODUCT__TABLE-4',
              unit: '%',
              spec: '0,010-0,06',
            },
            {
              name: 'PRODUCT__TABLE-5',
              unit: '%',
              spec: '≥ 99,0',
            },
            {
              name: 'PRODUCT__TABLE-6',
              unit: '%',
              spec: '≤ 0,10',
            },
            {
              name: 'PRODUCT__TABLE-7',
              unit: '%',
              spec: '≥ 90,0',
            },
            {
              name: 'PRODUCT__TABLE-8',
              unit: '%',
              spec: '≤ 0,20',
            },
            {
              name: 'PRODUCT__TABLE-9',
              unit: '%',
              spec: '≤ 0,05',
            },
            {
              name: 'pH',
              unit: '',
              spec: '5,0÷7,0',
            },
            {
              name: 'SO2',
              unit: 'ppm',
              spec: '≤ 30,0',
            },
          ],
        },
        {
          id: '69e447aa-15ef-4303-a03c-d13fd1223607',
          name: 'ACETYLATED STARCH - E.1420',
          img: '/images/cup-noodle-with-fork_90839-375.jpeg',
          feature: [
            'PRODUCT2__CHARA1',
            'PRODUCT2__CHARA2',
            'PRODUCT2__CHARA3',
            'PRODUCT2__CHARA4',
          ],
          chara: ['PRODUCT2__APP1', 'PRODUCT2__APP2', 'PRODUCT2__APP3'],
          table: [
            {
              name: 'PRODUCT__TABLE-1',
              unit: '%',
              spec: '≥ 85,0',
            },
            {
              name: 'PRODUCT__TABLE-2',
              unit: '%',
              spec: '≤ 13,0',
            },
            {
              name: 'PRODUCT__TABLE-3',
              unit: 'BU',
              spec: '≥ 650',
            },
            {
              name: 'PRODUCT__TABLE-4',
              unit: '%',
              spec: '0,010-0,06',
            },
            {
              name: 'PRODUCT__TABLE-5',
              unit: '%',
              spec: '≥ 99,0',
            },
            {
              name: 'PRODUCT__TABLE-6',
              unit: '%',
              spec: '≤ 0,10',
            },
            {
              name: 'PRODUCT__TABLE-7',
              unit: '%',
              spec: '≥ 90,0',
            },
            {
              name: 'PRODUCT__TABLE-8',
              unit: '%',
              spec: '≤ 0,20',
            },
            {
              name: 'PRODUCT__TABLE-9',
              unit: '%',
              spec: '≤ 0,05',
            },
            {
              name: 'pH',
              unit: '',
              spec: '5,0÷7,0',
            },
            {
              name: 'SO2',
              unit: 'ppm',
              spec: '≤ 30,0',
            },
          ],
        },
        {
          id: '2a8412a6-3eec-4dfa-b212-20f8eee92708',
          name: 'ACETYLATED STARCH - E.1421',
          img: '/images/410184043-410184043.jpg',
          feature: [
            'PRODUCT3__CHARA1',
            'PRODUCT3__CHARA2',
            'PRODUCT3__CHARA3',
            'PRODUCT3__CHARA4',
          ],
          chara: ['PRODUCT3__APP1', 'PRODUCT3__APP2', 'PRODUCT3__APP3'],
          table: [
            {
              name: 'PRODUCT__TABLE-1',
              unit: '%',
              spec: '≥ 85,0',
            },
            {
              name: 'PRODUCT__TABLE-2',
              unit: '%',
              spec: '≤ 13,0',
            },
            {
              name: 'PRODUCT__TABLE-3',
              unit: 'BU',
              spec: '≥ 650',
            },
            {
              name: 'PRODUCT__TABLE-4',
              unit: '%',
              spec: '0,010-0,06',
            },
            {
              name: 'PRODUCT__TABLE-5',
              unit: '%',
              spec: '≥ 99,0',
            },
            {
              name: 'PRODUCT__TABLE-6',
              unit: '%',
              spec: '≤ 0,10',
            },
            {
              name: 'PRODUCT__TABLE-7',
              unit: '%',
              spec: '≥ 90,0',
            },
            {
              name: 'PRODUCT__TABLE-8',
              unit: '%',
              spec: '≤ 0,20',
            },
            {
              name: 'PRODUCT__TABLE-9',
              unit: '%',
              spec: '≤ 0,05',
            },
            {
              name: 'pH',
              unit: '',
              spec: '5,0÷7,0',
            },
            {
              name: 'SO2',
              unit: 'ppm',
              spec: '≤ 30,0',
            },
          ],
        },
        {
          id: '1ee95b46-b314-4b89-9283-552013bbdf98',
          name: 'DISTARCH PHOSPHATE - E.1412',
          img: '/images/2187500663-2187500663.jpg',
          feature: [
            'PRODUCT4__CHARA1',
            'PRODUCT4__CHARA2',
            'PRODUCT4__CHARA3',
            'PRODUCT4__CHARA4',
          ],
          chara: ['PRODUCT4__APP1', 'PRODUCT4__APP2', 'PRODUCT4__APP3'],
          table: [],
        },
        {
          id: 'caac00ca-7f18-4c38-960b-7b8fdd370643',
          name: 'ACETYLATED DISTARCH PHOSPHATE - E.1414',
          img: '/images/1975428245-1975428245.jpg',
          feature: ['PRODUCT5__CHARA1', 'PRODUCT5__CHARA2'],
          chara: ['PRODUCT5__APP1', 'PRODUCT5__APP2', 'PRODUCT5__APP3'],
          table: [],
        },
        {
          id: '1cfd0ecc-ec3a-4b1c-b82b-ba54158a35b1',
          name: 'OXIDIZED STARCH - E.1404',
          img: '/images/1418246150-1418246150.jpg',
          feature: ['PRODUCT6__CHARA1', 'PRODUCT6__CHARA2', 'PRODUCT6__CHARA3'],
          chara: ['PRODUCT6__APP1', 'PRODUCT6__APP2'],
          table: [],
        },
        {
          id: 'fed5e8f1-db32-4573-b4bf-c1ec9e418087',
          name: 'PREGELATINIZED TAPIOCA STARCH (ALPHA STARCH)',
          img: '/images/IMG_2495.JPG',
          feature: ['PRODUCT7__CHARA1'],
          chara: [
            'PRODUCT7__APP1',
            'PRODUCT7__APP2',
            'PRODUCT7__APP3',
            'PRODUCT7__APP4',
          ],
          table: [],
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/colors.scss';
@import '~/assets/styles/mixins/responsive';

.content-1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;

  &__img {
    width: 50%;

    @include mobile {
      display: none;
    }
  }

  &__title {
    color: $apfco-green;
  }

  &__inner {
    display: flex;
    flex-direction: row;
    align-items: center;

    & > * + * {
      margin: 1rem 0;
    }

    &-wrap {
      width: 50%;
      padding: 0 1rem;

      @include mobile {
        width: 100%;
      }

      & > * {
        margin-bottom: 1.5rem;
      }
    }

    &-ul {
      padding: 1rem;
      background: #dedede;

      & > li {
        margin-bottom: 0.5rem;
      }
    }

    &-3 {
      & > * {
        margin-bottom: 1rem;
      }

      & > p {
        color: $apfco-green;
      }
    }
  }
}

table {
  border: 1px solid;
  width: fill;
  margin: 1rem 1rem 1rem 0;

  th {
    background: #e8e8e8;
  }

  td,
  th {
    border: 1px solid;
    padding: 0.3rem 0.5rem;
  }
}

.alcohol {
  width: fill;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &__inner {
    width: fill;
  }
  & > * {
    margin-bottom: 1.5rem;
  }
}
</style>
