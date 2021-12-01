import { Component } from '@angular/core';

enum myEnum {
    foo = 'foo value',
    bar = 'bar value',
}

@Component({
    selector: 'storybook-enum-bug',
    template: `
        <h1>Enum bug reproduction</h1>
        <div>
            <h2>Actual behaviour</h2>
            <p><strong>enum property using string data type control with defaultValue from compodoc</strong></p>
            <p>value: {{myEnumProperty | json}}</p>
            <p>foo value: {{myEnumProperty.foo | json}}</p>
        </div>
        <div>
            <h2>Expected behaviour</h2>
            <p><strong>enum property excluded from controls</strong></p>
            <p>value: {{myEnumPropertyExcludedFromControls | json}}</p>
            <p>foo value: {{myEnumPropertyExcludedFromControls.foo | json}}</p>
        </div>
    `,
})
export default class EnumBugComponent {
    /**
     * Enum assigned to property
     *
     * Storybook controls renders the enum name "myEnum" as it's value using string data type
     * It seems to be interpreting the defaultValue from compodoc as a string
     */
    myEnumProperty = myEnum;

    /**
     * Enum assigned to property but excluded from controls in the story renders as expected
     */
    myEnumPropertyExcludedFromControls = myEnum;
}
