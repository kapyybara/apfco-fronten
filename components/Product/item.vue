<template>
  <div class="product-wrap sm-normal container">
    <span class="product__title xxl-semibold">{{ name }}</span>
    <div class="product" :class="{ reverse: index % 2 === 1 }">
      <div v-if="table.length > 0" class="product__detail">
        <p class="product__group1-title md-semibold">1. Tiêu chuẩn kỹ thuật</p>
        <table  class="product__table">
          <tr>
            <th>{{ key }}Chỉ tiêu</th>
            <th>ĐVT</th>
            <th>Quy cách</th>
          </tr>
          <tr v-for="row in table" :key="table.indexOf(row)">
            <td>{{ row.name }}</td>
            <td>{{ row.unit }}</td>
            <td>{{ row.spec }}</td>
          </tr>
        </table>
      </div>
      <div class="product__group1">
        <p class="product__group1-title md-semibold">2. Đặc tính</p>
        <ul class="product__group1-list">
          <li v-for="item in feature" :key="feature.indexOf(item)">
            - {{ item }}
          </li>
        </ul>
        <p class="product__group1-title md-semibold">2. Ứng dụng</p>
        <ul class="product__group1-list">
          <img :src="img" alt="" class="product__img-mobile" />
          <li v-for="item in chara" :key="chara.indexOf(item)">- {{ item }}</li>
        </ul>
      </div>
      <img :src="img" alt="" class="product__img" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProdutcItem',
  props: {
    img: { type: String, required: true },
    name: { type: String, required: true },
    table: { type: Array, required: true },
    feature: { type: Array, required: true },
    chara: { type: Array, required: true },
    index: { type: Number, required: true },
  },
}
</script>


<style lang="scss" scoped>
@import '~/assets/styles/colors.scss';
@import '~/assets/styles/mixins/responsive';

.product {
  display: flex;
  height: fit-content;
  margin-bottom: 2rem;

  &>* {
    flex: 1;
  }

  &>* {
    margin: 1rem;
  }

  &-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem auto;
  }

  &__title {
    padding: 1rem 3rem;
    background: $apfco-green;
    color: #fff;
    border-radius: 1rem;
    margin-bottom: 2rem;
  }

  &__img {
    width: 33%;
    height: 100%;
    object-fit: contain;
    align-self: center;

    &-mobile {
      display: none;
      width: 40%;
      height: 100%;
      object-fit: contain;

      @include mobile {
        display: block;
        float: right;
      }
    }
  }

  &__group1 {
    margin-bottom: 1rem;

    &-title {
      margin-bottom: 1rem;
      color: $apfco-green;
    }

    &-list {
      &>li {
        margin-bottom: 0.5rem;
      }
    }
  }

  &__table {
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

  @include mobile {
    flex-direction: column;
    padding: 1rem;

    &>*+* {
      margin-left: 0;
    }

    &__title {
      margin: 0 1rem;
    }

    &__img {
      display: none;
    }
  }
}

.reverse {
  flex-direction: row-reverse;
}
</style>
