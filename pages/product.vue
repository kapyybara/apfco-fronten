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
            <p class="md-semibold">{{ $t('product1__content-15') }}</p>
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
            <th>{{ key }}Chỉ tiêu</th>
            <th>Đơn vị tính</th>
            <th>Mức công bố</th>
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
            'Tạo đô sánh, độ dày cho sản phẩm',
            'Ngăn khả năng rỉ nước',
            'Chịu được nhiệt độ cao nên không bị vỡ hoặc phá cấu trúc trong quá trình gia nhiệt',
            'Không bị bể, vỡ trong quá trình khuấy trộn',
          ],
          chara: [
            'Sản xuất tương ớt, tương cà, tưởng phở',
            'Các loại nước sốt, xúc xích, bò viên, cá viên,...',
            'Các loại sản phẩm thịt viên, cá viên, bò viên, chả cá tươi.',
          ],
          table: [
            {
              name: 'Tinh bột',
              unit: '%',
              spec: '≥ 85,0',
            },
            {
              name: 'Độ ẩm',
              unit: '%',
              spec: '≤ 13,0',
            },
            {
              name: 'Độ dẻo',
              unit: 'BU',
              spec: '≥ 650',
            },
            {
              name: 'D.S',
              unit: '%',
              spec: '0,010-0,06',
            },
            {
              name: 'Độ mịn',
              unit: '%',
              spec: '≥ 99,0',
            },
            {
              name: 'Tạp chất',
              unit: '%',
              spec: '≤ 0,10',
            },
            {
              name: 'Độ trắng',
              unit: '%',
              spec: '≥ 90,0',
            },
            {
              name: 'Độ tro',
              unit: '%',
              spec: '≤ 0,20',
            },
            {
              name: 'Độ xơ',
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
            'Giảm nhiệt độ đông keo của tinh bột.',
            'Tăng độ sánh và trong suốt, giúp cải thiện bề mặt sản phẩm.',
            'Cải tạo sự ổn định trong quá trình đông đặc – làm tan.',
            'Cải thiện khả năng giữ nước.',
          ],
          chara: [
            'Mì ăn liền, bún, miến.',
            'Thực phẩm đông lạnh.',
            'Dăm bông, xúc xích, bánh cảo, thức ăn thủy sản…',
          ],
          table: [
            {
              name: 'Tinh bột',
              unit: '%',
              spec: '≥ 85,0',
            },
            {
              name: 'Độ ẩm',
              unit: '%',
              spec: '≤ 13,0',
            },
            {
              name: 'Độ dẻo',
              unit: 'BU',
              spec: '≥ 750',
            },
            {
              name: 'D.S',
              unit: '%',
              spec: '0,005-0,075',
            },
            {
              name: 'Độ mịn',
              unit: '%',
              spec: '≥ 99,0',
            },
            {
              name: 'Tạp chất',
              unit: '%',
              spec: '≤ 0,10',
            },
            {
              name: 'Độ trắng',
              unit: '%',
              spec: '≥ 90,0',
            },
            {
              name: 'Độ tro',
              unit: '%',
              spec: '≤ 0,20',
            },
            {
              name: 'Độ xơ',
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
            'Giảm nhiệt độ đông keo của tinh bột.',
            'Tăng độ sánh và trong suốt, giúp cải thiện bề mặt sản phẩm.',
            'Cải tạo sự ổn định trong quá trình đông đặc – làm tan.',
            'Cải thiện khả năng giữ nước.',
          ],
          chara: [
            'Mì ăn liền, bún, miến.',
            'Thực phẩm đông lạnh.',
            'Dăm bông, xúc xích, bánh cảo, thức ăn thủy sản...',
          ],
          table: [
            {
              name: 'Tinh bột',
              unit: '%',
              spec: '≥ 85,0',
            },
            {
              name: 'Độ ẩm',
              unit: '%',
              spec: '≤ 13,0',
            },
            {
              name: 'Độ dẻo',
              unit: 'BU',
              spec: '≥ 650',
            },
            {
              name: 'D.S',
              unit: '%',
              spec: '0,010-0,06',
            },
            {
              name: 'Độ mịn',
              unit: '%',
              spec: '≥ 99,0',
            },
            {
              name: 'Tạp chất',
              unit: '%',
              spec: '≤ 0,10',
            },
            {
              name: 'Độ trắng',
              unit: '%',
              spec: '≥ 90,0',
            },
            {
              name: 'Độ tro',
              unit: '%',
              spec: '≤ 0,20',
            },
            {
              name: 'Độ xơ',
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
            'Chất ổn định, làm dày. Tăng độ giòn dai cho các sản phẩm.',
            'Cấu trúc sản phẩm vững chắc hơn, ít bị phá hỏng, vỡ khi thời gian nấu dài, trong môi trường axit hoặc khi bị khuấy trộn mạnh.',
            'Hạn chế sự trương nở của các hạt tinh bột khi nấu lên, chống hiện tượng rỉ nước.',
            'Có thể sử dụng trong quá trình chế biến có độ pH thấp, nhiệt độ cao.',
          ],
          chara: [
            'Làm đặc và tăng độ dai tự nhiên cho bún, phở, hủ tiếu, bún bò.',
            'Chống hiện tượng rỉ nước: như cá hộp, thịt hộp, tương ớt, tương cà, thịt viên, cá viên, xúc xích, chả cá, chả lụa.',
            'Làm chất độn cho máy in, ngành giấy',
          ],
          table: [],
        },
        {
          id: 'caac00ca-7f18-4c38-960b-7b8fdd370643',
          name: 'ACETYLATED DISTARCH PHOSPHATE - E.1414',
          img: '/images/1975428245-1975428245.jpg',
          feature: [
            'Ổn định vượt trội về sự đông đặc - làm tan của các sản đông lạnh, độ trong suốt tốt, khả năng ổn định cao, khả năng chống thoái hóa cấu trúc tốt.',
            'Được ứng dụng như chất ổn định, chất làm dày và chất nhũ hóa trong sản xuất thực phẩm.',
          ],
          chara: [
            'Thực phẩm đóng hộp, thực phẩm đông lạnh.',
            'Nước chấm, tương ớt, nước cà chua, xúp, nước ép thịt.',
            'Các thực phẩm nướng, quay…',
          ],
          table: [],
        },
        {
          id: '1cfd0ecc-ec3a-4b1c-b82b-ba54158a35b1',
          name: 'OXIDIZED STARCH - E.1404',
          img: '/images/1418246150-1418246150.jpg',
          feature: [
            'Lực tạo màng mỏng tốt, ít hút nước.',
            'Giảm hiện tượng oxy hóa.',
            'Tạo bề mặt sản phẩm láng bóng.',
          ],
          chara: [
            'Ngành giấy: tăng tỷ lệ thu hồi bột giấy, tráng phủ bề mặt giấy. Làm keo dán trong sản xuất tấm trần thạch cao, keo dán trong sản xuất bao bì carton.',
            'Ngành thực phẩm như: bánh, kẹo dẻo, nước sốt đóng hộp, bánh plan,bánh xốp, kẹo dẻo, hạt nêm…',
          ],
          table: [],
        },
        {
          id: 'fed5e8f1-db32-4573-b4bf-c1ec9e418087',
          name: 'PREGELATINIZED TAPIOCA STARCH (ALPHA STARCH)',
          img: '/images/IMG_2495.JPG',
          feature: [
            'Tinh bột alpha là sản phẩm hồ hóa trước theo phương pháp vật lý. Vì vậy tinh bột alpha có thể hồ hóa ở nhiệt độ thường.',
          ],
          chara: [
            'Ngành công nghiệp thực phẩm: Tinh bột alpha được sử dụng làm chất làm đặc hoặc chất ổn định trong các sản phẩm thực phẩm và đồ uống sữa, thực phẩm đông lạnh, đồ uống chức năng, thực phẩm bột, nước sốt, nước giải khát',
            'Trong công nghiệp mỹ phẩm: Tinh bột alpha được sử dụng như một thành phần phụ gia trong các sản phẩm mỹ phẩm. Nó sử dụng làm chất pha loãng viên nang, làm chất kết dính và cho phép tinh bột hấp thụ nước dễ dàng và giúp cho viên thuốc tan đúng cách.',
            'Trong ngành công nghiệp sản xuất thức ăn: Tinh bột alpha dễ tan trong nước, hấp thụ nhanh nên được sử dụng làm chất làm đặc, chất kết dính trong thức ăn gia súc, thức ăn thủy sản.',
            'Trong ngành công nghiệp khác: Tinh bột alpha được sử dụng làm chất ổn định, phụ gia trong ngành nhựa và ngành công nghiệp nặng, chất kết dính trong sản xuất sản phẩm định hình…',
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
