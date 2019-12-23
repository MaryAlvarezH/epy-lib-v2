import { storiesOf, moduleMetadata } from "@storybook/angular";
import { ButtonComponent } from "../../projects/epy/src/lib/button/button.component";
import { action } from "@storybook/addon-actions";

export const actions = {
  onButtonClick: action("onButtonClick")
};
storiesOf("Button", module)
  .addDecorator(
    moduleMetadata({
      declarations: [ButtonComponent]
    })
  )
  .add("red", () => {
    return {
      template: `<epy-button [text]="'Im a red class'" [type]="'red'" (onButtonClick)="onButtonClick($event)"></epy-button>`,
      props: {
        onButtonClick: actions.onButtonClick
      }
    };
  })
  .add("red-outline", () => ({
    component: ButtonComponent,
    props: {
      text: "I'm a red-outline class",
      type: "red-outline"
    }
  }))
  .add("green", () => ({
    component: ButtonComponent,
    props: {
      text: "I'm a green class",
      type: "green"
    }
  }))
  .add("green-outline", () => ({
    component: ButtonComponent,
    props: {
      text: "I'm a green-outline class",
      type: "green-outline"
    }
  }))
  .add("gray", () => ({
    component: ButtonComponent,
    props: {
      text: "I'm a gray class",
      type: "gray"
    }
  }))
  .add("gray-outline", () => ({
    component: ButtonComponent,
    props: {
      text: "I'm a gray-outline class",
      type: "gray-outline"
    }
  }));
