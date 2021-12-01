import { Meta, Story } from '@storybook/angular/types-6-0';
import PropertyControlBugComponent from "./property-control-bug.component";

export default {
    title: 'Reproduction/Property Control Bug',
    component: PropertyControlBugComponent,
    parameters: {
        controls: {
            exclude: ['myEnumPropertyExcludedFromControls']
        }
    }
} as Meta;

const Template: Story<PropertyControlBugComponent> = (args: PropertyControlBugComponent) => ({
    props: args,
});

export const Basic = Template.bind({});
