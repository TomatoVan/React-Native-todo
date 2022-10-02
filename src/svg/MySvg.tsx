import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export const MySvgComponent = (props: SvgProps) => (
	<Svg width={16} height={16}  {...props}>
		<Path fill={'black'} d="M14 3a1 1 0 0 1 0 2h-.154l-.704 9.153A2 2 0 0 1 11.148 16H4.852a2 2 0 0 1-1.994-1.847L2.154 5H2a1 1 0 1 1 0-2h3V2A2 2 0 0 1 6.85.005L7 0h2a2 2 0 0 1 1.995 1.85L11 2v1h3Zm-2.16 2H4.159l.693 9h6.296l.692-9ZM9 2H7v1h2V2Z" />
	</Svg>
)

