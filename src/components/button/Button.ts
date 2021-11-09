import {Component, Prop, Vue} from "vue-property-decorator";

@Component
export default class Button extends Vue {
    @Prop({default: () => ""}) public readonly buttonLabel: string;
}