/** ======= TYPES ======= */
import type { SvgIconTypeMap, SxProps, Theme } from '@mui/material';
import type { OverridableComponent } from '@mui/material/OverridableComponent';
import type { FirestoreProject } from './Firestore';

/** Types for the footer button */
export type FooterButtonType = 'link' | 'email';

/** Internal type for colours */
export type Color =
	| 'inherit'
	| 'default'
	| 'primary'
	| 'secondary'
	| 'error'
	| 'info'
	| 'success'
	| 'warning';

export interface FooterProps {
	/** Icon for the footer button */
	icon: OverridableComponent<SvgIconTypeMap<object, 'svg'>> & {
		muiName: string;
	};
	/** The type of button */
	type: FooterButtonType;
	/** The title of the Footer Button */
	title: string;
	/** The href of the button */
	href: string;
	/** The aria label of the button */
	ariaLabel?: string;
	/** Color for the button */
	color?: Color;
}

export interface HeaderButtonProps {
	/** Link to where */
	to: string;
	/** Text to display for the button */
	text: string;
	/** Button.end */
	end?: boolean;
	/** The colour of the button */
	color?:
		| 'inherit'
		| 'primary'
		| 'error'
		| 'secondary'
		| 'success'
		| 'info'
		| 'warning';
}

export interface ProjectButtonProps {
	href: string;
	text: string;
	sx?: SxProps<Theme>;
}

export type ProjectCardOpts = {
	proj: FirestoreProject;
};

export interface HeaderProps {
	mode: 'light' | 'dark';
	toggleColorMode: () => void;
}
