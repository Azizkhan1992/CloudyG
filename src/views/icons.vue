<template>
    <div class="icon" :class="this.color" :id="id">
        <svg :id="id" v-if="this.size == 'sm'" width="16" height="16" viewBox="0 0 24 24" fill="none" v-html="choosenIcon" xmlns="http://www.w3.org/2000/svg"></svg>
        <svg :id="id" v-else-if="this.size == 'middle'" width="20" height="20" viewBox="0 0 24 24" fill="none" v-html="choosenIcon" xmlns="http://www.w3.org/2000/svg">
    </svg>
    <svg :id="id" v-else-if="this.size == '32'" width="32" height="32" viewBox="0 0 24 24 " fill="none" v-html="choosenIcon" mlns="http://www.w3.org/2000/svg">
    </svg>
    <svg :id="id" v-else-if="this.size == 'large'" width="36" height="36" viewBox="0 0 24 24 " fill="none" v-html="choosenIcon" mlns="http://www.w3.org/2000/svg">
    </svg>
    <svg :id="id" v-else-if="this.size == '48'" width="48" height="48" viewBox="0 0 24 24 " fill="none" v-html="choosenIcon" mlns="http://www.w3.org/2000/svg">
    </svg>
    <svg :id="id" v-else width="24" height="24" viewBox="0 0 24 24 " fill="none" v-html="choosenIcon" mlns="http://www.w3.org/2000/svg">
    </svg>
    </div>
</template>
<script>
export default {
  name: "choosenIcon",
  props:{
    icon: String,
    size: String,
    color: String,
    id: String
  },
  data() {
    return {
      icons: {
        profile: `
                <path opacity="0.4" d="M10.1334 9.05833C10.05 9.05 9.95005 9.05 9.85838 9.05833C7.87505 8.99167 6.30005 7.36667 6.30005 5.36667C6.30005 3.325 7.95005 1.66667 10 1.66667C12.0417 1.66667 13.7 3.325 13.7 5.36667C13.6917 7.36667 12.1167 8.99167 10.1334 9.05833Z" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.96672 12.1333C3.95006 13.4833 3.95006 15.6833 5.96672 17.025C8.25839 18.5583 12.0167 18.5583 14.3084 17.025C16.3251 15.675 16.3251 13.475 14.3084 12.1333C12.0251 10.6083 8.26672 10.6083 5.96672 12.1333Z" stroke="#A4ABBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                `,
      },
    };
  },
  computed:{
    choosenIcon(){
        return this.icons[this.icon]
    }
  }
};
</script>
