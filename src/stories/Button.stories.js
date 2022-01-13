import Button from "../components/Button";
// import { AwesomeButton } from "react-awesome-button";
export default {
    title: 'Button',
    component: Button,
    argTypes: {
        handleClick: { action: 'handleClick' },
    }
}

const Template = args => <Button {...args} />;

export const SolidHighContrast = Template.bind({})
SolidHighContrast.args = {
    type: "primary",
}

export const SolidLowContrast = Template.bind({})
SolidLowContrast.args = {
    backgroundColor:'blue',
    label:"press",
    size:"md",
}
