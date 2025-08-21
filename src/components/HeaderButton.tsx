/** ======= REACT ROUTER DOM ======= */
import { NavLink } from 'react-router-dom';

/** ======= MUI COMPONENTS ======= */
import Button from '@mui/material/Button';
import { styled } from '@mui/material';
import type { HeaderButtonProps } from '../data/Types';

const StyledNavLink = styled(NavLink)(({ theme }) => ({
    color: 'inherit',
    textDecoration: 'none',
    marginRight: theme.spacing(2),
    fontWeight: 'normal',
    '&.active': {
        fontWeight: 'bold',
    },
}));

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