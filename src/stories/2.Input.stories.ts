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
      template: `<lib-input></lib-input>`,
      props: {
        onInputChange: actions.onInputChange
      }
    };
  })
  .add("default (field)", () => {
    return {
      template: `<lib-input [field]="'Campaign Name'"></lib-input>`,
      props: {
        onInputChange: actions.onInputChange
      }
    };
  })
  .add("default (field legend)", () => {
    return {
      template: `<lib-input [field]="'Campaign Name'" [legend]="'(something you’ll remember it with)'"></lib-input>`,
      props: {
        onInputChange: actions.onInputChange
      }
    };
  })
  .add("default (field legend placeholder)", () => {
    return {
      template: `<lib-input [field]="'Campaign Name'" [legend]="'(something you’ll remember it with)'" [placeholder]="'Doto.com.mx Shopping Campaign'"></lib-input>`,
      props: {
        onInputChange: actions.onInputChange
      }
    };
  })
  .add("line", () => {
    return {
      template: `<lib-input [type]="'input-line'"></lib-input>`,
      props: {
        onInputChange: actions.onInputChange
      }
    };
  })
  .add("line (field)", () => {
    return {
      template: `<lib-input [field]="'Nombre'" [type]="'input-line'" ></lib-input>`,
      props: {
        onInputChange: actions.onInputChange
      }
    };
  })
  .add("line (field legend)", () => {
    return {
      template: `<lib-input [field]="'Campaign Name'" [legend]="'(something you’ll remember it with)'" [type]="'input-line'"></lib-input>`,
      props: {
        onInputChange: actions.onInputChange
      }
    };
  })
  .add("line (field legend placeholder)", () => {
    return {
      template: `<lib-input [field]="'Campaign Name'" [legend]="'(something you’ll remember it with)'" [placeholder]="'Doto.com.mx Shopping Campaign'" [type]="'input-line'"></lib-input>`,
      props: {
        onInputChange: actions.onInputChange
      }
    };
  });
