import { Meta, Story } from '@storybook/angular/types-6-0';
import EnumBugComponent from "./enum-bug.component";

export default {
    title: 'Example/Enum Bug',
    component: EnumBugComponent,
    parameters: {
        controls: {
            exclude: ['myEnumPropertyExcludedFromControls']
        }
    }
} as Meta;

const Template: Story<EnumBugComponent> = (args: EnumBugComponent) => ({
    props: args,
});

export const Basic = Template.bind({});
