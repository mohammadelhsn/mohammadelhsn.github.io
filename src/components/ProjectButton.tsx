import type { SxProps, Theme } from '@mui/material';
import Button from '@mui/material/Button';
import type { ProjectButtonProps } from '../data/Types';

const ProjectButton = (props: ProjectButtonProps) => {
    const defaultStyles: SxProps<Theme> = {
        color: 'primary.main',
        textTransform: 'none',
        fontWeight: 'bold',
        paddingLeft: '0.4rem',
    };
    return (
        <Button href={props.href} sx={props.sx ? props.sx : defaultStyles} >
            {props.text}
        </Button>
    );
};

export default ProjectButton;