import Button from "../../components/btns/button";

export default {
  title: `components/button`,
  component: Button,
  argTypes: {
    onClick: { action: `onClick` }
  }
}

const Template = ({ ...args }) => <Button {...args} />;

// export const Basic = () => <Button color="black">Hello nah!</Button>
export const Basic = Template.bind({});

Basic.args = {
  styles: {
    root: {},
    button: {
      color: 'black'
    }
  },
  children: `Hello nah!`
}
