import Stack from "../../components/stack";

export default {
  title: `components/stack`,
  component: Stack,
  argTypes: {
    numbersOfChildren: {
      type: `number`,
      defaultValue: 40
    }
  }
};

const style = {
  display         : `flex`,
  justifyContent  : `center`,
  alignItems      : `center`,
  width           : `50px`,
  height          : `50px`,
  backgroundColor : `greenyellow`
}

const Template = ({ numbersOfChildren, ...rest }) => (
  <Stack {...rest}>
    {
      [...Array(numbersOfChildren).keys()].map(item => (
        <div key={item} style={style}>
          {item}
        </div>
      ))
    }
  </Stack>
);

export const Basic = Template.bind({});

Basic.rest = {
  spacing   : 5,
  wrap      : false,
  direction : `row`,
  children  : `Hello stack!`
};

export const Column = Template.bind({});

Column.rest = {
  spacing   : 3,
  wrap      : false,
  direction : `column`,
  children  : `Hello stack!`
};

export const RowWrap = Template.bind({});

RowWrap.rest = {
  spacing   : 3,
  wrap      : true,
  direction : `row`,
  children  : `Hello stack!`
};
