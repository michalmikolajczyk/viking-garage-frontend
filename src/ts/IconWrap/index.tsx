import * as React from 'react';

export default function iconWrap(icon: JSX.Element, alt?: string) {
	return class extends React.Component<any, any> {
		isMounted = false;

		componentDidMount() {
			this.isMounted = true;
		}

		render() {
			if (this.isMounted) return icon;
			return <div aria-label={alt} />;
		}
	};
}
