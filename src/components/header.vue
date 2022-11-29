<template>
  <div class="header-container">
    <div class="bl-width mt-a h-100 d-fl sp-b">
      <ul class="w-80 d-fl m-0 sp-b ls-none h-100 j-cen pad-0 header-items">
        <li class="w-a h-50"><a class="td-none links" href="#">Главная</a></li>
        <li class="w-a h-50"><a class="td-none links" href="#">Услуги</a></li>
        <li class="w-a h-50">
          <a class="td-none links" href="#">Статистика</a>
        </li>
        <li class="w-a h-50"><a class="td-none links" href="#">Новости</a></li>
        <li class="w-a h-50"><a class="td-none links" href="#">Контакты</a></li>
      </ul>

      <div class="w-10c d-fl h-70 j-cen prof">
        <Icons icon="profile" size="32" class="color cur-p" />
        <div
                  id="buttonDiv"
                  class="googleButton"
                >
                </div>

        <!-- <div class="buttonDiv"></div> -->

        <!-- <div id="g_id_onload"
     data-client_id="269350092239-j5fun8sanrc5m2o990poe6l1figenrsd.apps.googleusercontent.com"
     data-callback="handleCredentialResponse">
</div> -->

        <!-- <div
          id="g_id_onload"
          data-client_id="269350092239-j5fun8sanrc5m2o990poe6l1figenrsd.apps.googleusercontent.com"
          data-auto_prompt="true"
        ></div>
        <div
          class="g_id_signin"
          data-type="standard"
          data-size="large"
          data-theme="outline"
          data-text="sign_in_with"
          data-shape="rectangular"
          data-logo_alignment="left"
        ></div> -->
      </div>
    </div>
  </div>
</template>
<script>
import Icons from "@/views/icons.vue";
export default {
  name: "header-app",
  components: { Icons },

  methods: {
    handleCredentialResponse(response) {
      console.log("Encoded JWT ID token: " + response);
    },
    auth() {


    // eslint-disable-next-line
            google.accounts.id.initialize({
                client_id:
                "269350092239-j5fun8sanrc5m2o990poe6l1figenrsd.apps.googleusercontent.com",
                callback: this.handleCredentialResponse,
                redirect_uri: "http://localhost:8080",
                scope: ["profile", "email"],
                ux_mode: "popup",
                context: "signin",
            });


    // eslint-disable-next-line
            google.accounts.id.renderButton(
                document.getElementById("buttonDiv"),
                { theme: "outline", size: "large" } // customization attributes
            );


    // eslint-disable-next-line
            google.accounts.id.prompt(); // also display the One Tap dialog
            },
  },

  mounted() {
    // this.handleCredentialResponse()
    this.auth();
  },
};
</script>
