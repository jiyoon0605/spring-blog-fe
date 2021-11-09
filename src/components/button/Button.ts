import {Component, Prop, Vue} from "vue-property-decorator";

@Component
export default class Button extends Vue {
    @Prop({default: () => ""}) protected readonly buttonLabel: string;
    @Prop({default: () => ""}) protected readonly type: string;
}