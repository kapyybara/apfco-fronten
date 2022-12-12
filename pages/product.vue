<template>
  <div style="margin-top: 3rem">
    <div class="content-1 container">
      <p class="xxl-semibold content-1__title">TINH BỘT BIẾN TÍNH</p>
      <div class="content-1__inner sm-normal">
        <img class="content-1__img" src="images/tinh-san.jpeg" alt="" />
        <div class="content-1__inner-wrap">
          <p class="content-1__inner-1">
            Tinh bột sắn biến tính của chúng tôi đạt yêu cầu về an toàn thực
            phẩm theo các quy chuẩn, quy định như sau:
          </p>
          <ul class="content-1__inner-ul">
            <li>- TCVN 10546:2014 về “Tinh bột sắn".</li>
            <li>
              - Quy định 46/2007/QĐ-BYT về "Giới hạn tối đa ô nhiễm sinh học và
              hóa học trong thực phẩm”.
            </li>
            <li>
              - TCVN 4-18:2011/BYT về “Phụ gia thực phẩm – nhóm chế phẩm tinh
              bột”.
            </li>
          </ul>
          <div class="content-1__inner-3">
            <p class="md-semibold">Quy cách đóng gói</p>
            <ul class="">
              <li>
                - Khối lượng tịnh: Loại 25kg, 50kg, 500kg, 850kg và tùy theo nhu
                cầu của thị trường trọng lượng có thể thay đổi cho phù hợp.
              </li>
              <li>- Sản phẩm được đóng gói bằng bao PP+PE, bao giấy.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <product-item
      v-for="product in products"
      :key="products.indexOf(product)"
      :name="product.name"
      :feature="product.feature"
      :chara="product.chara"
      :img="product.img"
      :table="product.table"
      :index="products.indexOf(product)"
      class="product-wrap"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          name: 'ACETYLATED DISTARCH ADIPATE - E.1422',
          img: 'images/thivien.png',
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
            { name: 'Tinh bột', unit: '%', spec: '≥ 85,0' },
            { name: 'Độ ẩm', unit: '%', spec: '≥ 13,0' },
            { name: 'Độ dẻo', unit: 'BU', spec: '≥ 65,0' },
            { name: 'Độ mịn', unit: '%', spec: '≥ 99,0' },
            { name: 'Tạp chât', unit: '%', spec: '≥ ,0' },
            { name: 'Tạp chât', unit: '%', spec: '≥ ,0' },
            { name: 'Tạp chât', unit: '%', spec: '≥ ,0' },
            { name: 'Tạp chât', unit: '%', spec: '≥ ,0' },
            { name: 'Tạp chât', unit: '%', spec: '≥ ,0' },
          ],
        },
        {
          name: 'ACETYLATED STARCH - E.1420',
          img: 'images/410184043-410184043.jpg',
          feature: [
            'Làm tăng, cải thiện khả năng giữ nước.',
            'Ngăn sự thoái hóa tinh bột, ngăn chặn sự tách nước của sản phẩm, giữ được hình dạng sản phẩm sử dụng tinh bột.',
            'Tạo được dung dịch có độ trong, không đục lại khi bảo quản.',
            'Độ bền cao trong môi trường axit',
            'Tăng độ nhớt, giảm nhiệt độ hồ hóa.',
            'Có khả năng tạo màng mỏng, trong và mềm dẻo giúp cải thiện bề mặt láng bóng cho sản phẩm.',
          ],
          chara: [
            'Mì ăn liền, thức ăn đông lạnh, giăm bông, viên cá, xúc xích, sủi cảo, bánh gạo, thức ăn thủy sản, làm giấy…',
          ],
          table: [
            { name: 'Tinh bột', unit: '%', spec: '≥ 85,0' },
            { name: 'Độ ẩm', unit: '%', spec: '≤ 13,0' },
            { name: 'D.S', unit: '%', spec: '≥ 65,0' },
            { name: 'Độ dẻo', unit: 'BU', spec: '≥ 750' },
            { name: 'Độ mịn', unit: '%', spec: '≥ 99,0' },
            { name: 'Tạp chất', unit: '%', spec: '≤ 0,10' },
            { name: 'Độ trắng', unit: '%', spec: '≥ 90,0' },
            { name: 'Độ tro', unit: '%', spec: '≤ 0,20' },
            { name: 'Độ xơ', unit: '%', spec: '≤ 0,05' },
            { name: 'pH', unit: '', spec: '5,0÷7,0' },
            { name: 'Dư lượng SO2', unit: 'ppm', spec: '≤ 30,0' },
          ],
        },
        {
          name: 'ACETYLATED STARCH - E.1421',
          img: 'images/cup-noodle-with-fork_90839-375.jpeg',
          feature: [
            'Ngăn chặn sự giảm thấp chất tạo bột, đông đặc và rỉ nước.',
            'Cải tạo sự ổn định trong quá trình đông đặc.',
            'Làm tan, cải thiện khả năng giữ nước.',
            'Hạ thấp nhiệt độ đông keo của tinh bột.',
            'Tăng độ sánh và trong suốt giúp cải thiện bề mặt láng bóng cho sản phẩm.',
          ],
          chara: [
            'Mì ăn liền, thức ăn đông lạnh, giăm bông, viên cá, xúc xích, sủi cảo, bánh gạo, thức ăn thủy sản, làm giấy…',
          ],
          table: [
            { name: 'Tinh bột', unit: '%', spec: '≥ 85,0' },
            { name: 'Độ ẩm', unit: '%', spec: '≤ 13,0' },
            { name: 'Độ dẻo', unit: 'BU', spec: '≥ 750' },
            { name: 'D.S', unit: '%', spec: '≥ 750' },
            { name: 'Độ mịn', unit: '%', spec: '≥ 99,0' },
            { name: 'Tạp chất', unit: '%', spec: '≤ 0,10' },
            { name: 'Độ trắng', unit: '%', spec: '≥ 90,0' },
            { name: 'Độ tro', unit: '%', spec: '≤ 0,20' },
            { name: 'Độ xơ', unit: '%', spec: '≤ 0,05' },
            { name: 'pH', unit: '', spec: '5,0÷7,0' },
            { name: 'Dư lượng SO2', unit: 'ppm', spec: '≤ 30,0' },
          ],
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
      margin: 1rem;
    }
    &-wrap {
      width: 50%;
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
</style>
