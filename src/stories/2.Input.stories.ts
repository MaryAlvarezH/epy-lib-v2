import { storiesOf, moduleMetadata } from "@storybook/angular";
import { InputComponent } from "../../projects/epy/src/lib/input/input.component";
import { action } from "@storybook/addon-actions";

export const actions = {
  onInputChange: action("onInputChange")
};
storiesOf("Input", module)
  .addDecorator(
    moduleMetadata({
      declarations: [InputComponent]
    })
  )
  .add("default", () => {
    return {
      template: `<epy-input></epy-input>`,
      props: {
        onInputChange: actions.onInputChange
      }
    };
  })
  .add("default (field)", () => {
    return {
      template: `<epy-input [field]="'Campaign Name'"></epy-input>`,
      props: {
        onInputChange: actions.onInputChange
      }
    };
  })
  .add("default (field legend)", () => {
    return {
      template: `<epy-input [field]="'Campaign Name'" [legend]="'(something you’ll remember it with)'"></epy-input>`,
      props: {
        onInputChange: actions.onInputChange
      }
    };
  })
  .add("default (field legend placeholder)", () => {
    return {
      template: `<epy-input [field]="'Campaign Name'" [legend]="'(something you’ll remember it with)'" [placeholder]="'Doto.com.mx Shopping Campaign'"></epy-input>`,
      props: {
        onInputChange: actions.onInputChange
      }
    };
  })
  .add("line", () => {
    return {
      template: `<epy-input [type]="'input-line'"></epy-input>`,
      props: {
        onInputChange: actions.onInputChange
      }
    };
  })
  .add("line (field)", () => {
    return {
      template: `<epy-input [field]="'Nombre'" [type]="'input-line'" ></epy-input>`,
      props: {
        onInputChange: actions.onInputChange
      }
    };
  })
  .add("line (field legend)", () => {
    return {
      template: `<epy-input [field]="'Campaign Name'" [legend]="'(something you’ll remember it with)'" [type]="'input-line'"></epy-input>`,
      props: {
        onInputChange: actions.onInputChange
      }
    };
  })
  .add("line (field legend placeholder)", () => {
    return {
      template: `<epy-input [field]="'Campaign Name'" [legend]="'(something you’ll remember it with)'" [placeholder]="'Doto.com.mx Shopping Campaign'" [type]="'input-line'"></epy-input>`,
      props: {
        onInputChange: actions.onInputChange
      }
    };
  });
