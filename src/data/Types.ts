import type { SvgIconTypeMap } from '@mui/material';
import type { OverridableComponent } from '@mui/material/OverridableComponent';

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
