// import { SelectComponent } from "../../projects/epy/src/lib/select/select.component";
// import { InputComponent } from "../../projects/epy/src/lib/input/input.component";
import { action } from "@storybook/addon-actions";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { EpyModule } from "../../projects/epy/src/lib/epy.module";

export const actions = {
  onSelectChange: action("onSelectChange")
};
storiesOf("Select", module)
  .addDecorator(
    moduleMetadata({
      imports: [EpyModule]
    })
  )
  .add("default", () => {
    return {
      template: `<epy-select [items]="['Maximaze Revenue','Maximaze Clicks', 'Maximaze Conversions','Maximaze Impressions', 'Maximaze Profit']"></epy-select>`,
      props: {
        onSelectChange: actions.onSelectChange
      }
    };
  })
  .add("default (field legend)", () => {
    return {
      template: `<epy-select [items]="['Maximaze Revenue','Maximaze Clicks', 'Maximaze Conversions','Maximaze Impressions', 'Maximaze Profit']" [field]="'Whats your goal?'" [legend]="'(in which your campaign will run)'"></epy-select>`,
      props: {
        onSelectChange: actions.onSelectChange
      }
    };
  })
  .add("default (placeholder)", () => {
    return {
      template: `<epy-select [items]="['Maximaze Revenue','Maximaze Clicks', 'Maximaze Conversions','Maximaze Impressions', 'Maximaze Profit']" [field]="'Whats your goal?'" [legend]="'(in which your campaign will run)'" [placeholder]="'Select strategy'"></epy-select>`,
      props: {
        onSelectChange: actions.onSelectChange
      }
    };
  })
  .add("default (selectedValue)", () => {
    return {
      template: `<epy-select style="width:300px" [items]="['Maximaze Revenue','Maximaze Clicks', 'Maximaze Conversions','Maximaze Impressions', 'Maximaze Profit']" [field]="'Whats your goal?'" [legend]="'(in which your campaign will run)'" [placeholder]="'Select strategy'" [selectedValue]="'Maximaze Clicks'"></epy-select>`,
      props: {
        onSelectChange: actions.onSelectChange
      }
    };
  })
  .add("default (filter)", () => {
    return {
      template: `<epy-select style="width:300px" [items]="['Maximaze Revenue','Maximaze Clicks', 'Maximaze Conversions','Maximaze Impressions', 'Maximaze Profit']" [field]="'Whats your goal?'" [legend]="'(in which your campaign will run)'" [placeholder]="'Select strategy'" [selectedValue]="'Maximaze Clicks'" [filter]="true"></epy-select>`,
      props: {
        onSelectChange: actions.onSelectChange
      }
    };
  });
