<template>
    <div class="relations "> 
        <img src="/images/realtions_banner.jpg" alt="">
        <div class="relations__menu md-semibold">
            <span>{{ $t("relations__menu-1") }}</span>
            <span>{{ $t("relations__menu-2") }}</span>
            <span>{{ $t("relations__menu-3") }}</span>
            <span>{{ $t("relations__menu-4") }}</span>
        </div>
       <div class="relations-main container">
        <h2 class="xxl-bold">{{ $t(curr) }}</h2>
        <div class="relations__content">
            <div class="group" :key="group.id" v-for="group in documents">
                <span class="group__title xl-semibold"> {{ group.name }}</span>
                <a :href="document.link" class="item" v-for="document in group.values" :key="document.id">
                    <img src="/icons/pdf.png" alt="">
                    <p> {{ document.name }}</p>
                </a>
            </div>
        </div>
       </div> 
    </div>
</template>

<script>
export default {
    name: 'ApfcoFrontenRelations',
    data() {
        return {
            curr: "relations__menu-1",
            documents:
                [
                    {
                        id: 1,
                        name: "Điều lệ Công ty",
                        values: [
                            {
                                id: 1,
                                name: "Nghị quyết của HĐQT V/v ban hành điều lệ Công ty CP NSTP Quảng Ngãi.",
                                link: "https://drive.google.com/file/d/1afoH6kNsJBLj6RrbZWNddSyNk9N17LfH/view0",
                            },
                            {
                                id: 2,
                                name: "Điều lệ Công ty",
                                link: "https://drive.google.com/file/d/1meMHJvGiEFJtIkBnVlHUAEQ4LbLA3Pks/view"
                            },
                        ]
                    },
                    {
                        id: 2,
                        name: "Quy chế nội bộ về quản trị Công ty",
                        values: [
                            {
                                id: 1,
                                name: "Nghị quyết của HĐQT V/v ban hành Quy chế nội bộ về quản trị Công ty CP NSTP Quảng Ngãi.",
                                link: "https://drive.google.com/file/d/1rXRDFmyNxGVoBEkK9ymSZt7n-5mNQbNm/view"
                            },
                            {
                                id: 2,
                                name: "Quy chế Nội bộ về quản trị Công ty",
                                link: "https://drive.google.com/file/d/1fLApNZOAX0NUZ620_pUV2-fKj7PFEQL8/view"
                            },
                        ]
                    },
                    {
                        id: 3,
                        name: "Quy chế hoạt động của Hội đồng quản trị",
                        values: [
                            {
                                id: 1,
                                name: "Nghị quyết của HĐQT V/v ban hành Quy chế hoạt động của HĐQT Công ty CP NSTP Quảng Ngãi.",
                                link: "https://drive.google.com/file/d/1HTHgrVXulhX_SW6oEV_YmSU3jTi04hWk/view",
                            },
                            {
                                id: 2,
                                name: "Điều lệ Công ty",
                                link: "https://drive.google.com/file/d/1L6t6JFykMmkokR9stNOK_kd6vTN_U2Yu/view"
                            },
                            {
                                id: 3,
                                name: "Quy chế hoạt động của HĐQT",
                                link: "https://drive.google.com/file/d/1L6t6JFykMmkokR9stNOK_kd6vTN_U2Yu/view?usp=sharing"
                            },
                        ]
                    },
                    {
                        id: 4,
                        name: "",
                        values: [
                            {
                                id: 1,
                                name: "Nghị quyết của BKS V/v ban hành Quy chế hoạt động của BKS Công ty CP NSTP Quảng Ngãi.",
                                link: "https://drive.google.com/file/d/1MNYl2CzWYJpVZwxawooWK0XqTt-_Z3w-/view?usp=sharing",
                            },
                            {
                                id: 2,
                                name: "Điều lệ Công ty",
                                link: "https://drive.google.com/file/d/1L6t6JFykMmkokR9stNOK_kd6vTN_U2Yu/view"
                            },
                            {
                                id: 3,
                                name: "Quy chế hoạt động của BKS",
                                link: "https://drive.google.com/file/d/1Cid60AaXKUlbBxp31XEYpMBzYdGoncIx/view?usp=sharing"
                            },
                        ]
                    },
                ]
        };
    },
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/colors.scss";
@import "~/assets/styles/mixins/responsive";

.relations {
    width: 100vw;
    position: relative;
    padding-top: 350px;

    &>img {
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


        &>* {
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
            top: 75px;

            &>* {
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

        &>h2 {
            color: $apfco-green;
        }

        &::before {
            content: "";
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

    &__title {
        margin: 1rem 0;
    }
}

.item {
    display: flex;
    flex-direction: row;
    align-items: center;

    &>img {
        width: 2rem;
        margin-right: 1rem;
    }
}
</style>