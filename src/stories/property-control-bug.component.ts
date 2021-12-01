import { Component } from '@angular/core';

enum myEnum {
    foo = 'foo value',
    bar = 'bar value',
}

const myObject = {
    foo: 'foo value',
    bar: 'bar value',
} as const;

const myArray = [
    'foo',
    'bar',
];

const myNumber = 42;

const myBoolean = true;

@Component({
    selector: 'storybook-property-control-bug',
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
export default class PropertyControlBugComponent {
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

    /**
     * Object variable assigned to property
     */
    myObjectProperty = myObject;
    myObjectPropertyDirectlyAssigned = {
        foo: 'foo value',
        bar: 'bar value',
    };

    /**
     * Array variable assigned to property
     */
    myArrayProperty = myArray;
    myArrayPropertyDirectlyAssigned = [
        'foo',
        'bar',
    ];

    /**
     * Number variable assigned to property
     */
    myNumberProperty = myNumber;
    myNumberPropertyDirectlyAssigned = 42;

    /**
     * Boolean variable assigned to property
     */
    myBooleanProperty = myBoolean;
    myBooleanPropertyDirectlyAssigned = true;
}
