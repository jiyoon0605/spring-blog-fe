import {Vue, Watch} from "vue-property-decorator";
import {AlertData} from "@/model/Common";

export default class CommonView extends Vue {
    protected alertData: AlertData = {
        isShow: false,
        type: "success",
        description: "",
        title: ""
    }

    @Watch('alertData', {deep: true})
    commitAlertInfo() {
        this.$store.commit("setAlertInfo", this.alertData);
    }
}