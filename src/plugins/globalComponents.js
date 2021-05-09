import { DropDown } from "../components";
import { Parallax } from "../components";
import { VPopover } from "v-tooltip";

//import { FormGroupInput, Card, DropDown2, Button } from "../components/components2/index";

/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
  install(Vue) {
    Vue.component("drop-down", DropDown);
    Vue.component(Parallax.name, Parallax);
    Vue.component("v-popover", VPopover);
    //Vue.component("fg-input", FormGroupInput);
    //Vue.component("drop-down", DropDown2);
    //Vue.component("card", Card);
    //Vue.component("p-button", Button);
  }
};

export default GlobalComponents;
