import Vue from "vue";
import Vuetify from "vuetify/lib";
import "vuetify/src/stylus/app.styl";

Vue.use(Vuetify, {
  iconfont: "md",
  theme: {
    primary: "#0D47A1",
    success: "#1565C0",
    info: "##ffaa2c",
    error: "#f83e70"
  }
});
