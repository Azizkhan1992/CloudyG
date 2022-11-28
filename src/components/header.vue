<template>
    <div class="header-container">
        <div class="bl-width mt-a h-100 d-fl sp-b">
            <ul class="w-80 d-fl m-0 sp-b ls-none h-100 j-cen pad-0 header-items">
                <li class="w-a h-50"><a class="td-none links" href="#">Главная</a></li>
                <li class="w-a h-50"><a class="td-none links" href="#">Услуги</a></li>
                <li class="w-a h-50"><a class="td-none links" href="#">Статистика</a></li>
                <li class="w-a h-50"><a class="td-none links" href="#">Новости</a></li>
                <li class="w-a h-50"><a class="td-none links" href="#">Контакты</a></li>
            </ul>

            <div class="w-10c d-fl h-70 j-cen prof">
                <Icons icon="profile" size="32" class="color"/>
            </div>
        </div>
    </div>
</template>
<script>
import Icons from '@/views/icons.vue'
export default {
    name: 'header-app',
    components: {Icons}
}
</script>