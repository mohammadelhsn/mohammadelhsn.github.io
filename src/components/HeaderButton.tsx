/** ======= MUI COMPONENTS ======= */
import Button from '@mui/material/Button';

/** ======= TYPES & STYLES ======= */
import type { HeaderButtonProps } from '../data/Types';
import { StyledNavLink } from '../data/Styles';

const HeaderButton = (props: HeaderButtonProps) => {
    const color = props.color ? props.color : 'inherit';
    const end = props.end ? props.end : false;
    return (
        <Button
            component={StyledNavLink}
            color={color}
            end={end}
            to={props.to}
        >
            {props.text}
        </Button>
    );
};

export default HeaderButton;