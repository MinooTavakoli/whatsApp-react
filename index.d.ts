import * as React from 'react';

interface DefaultProps {
    accountList?:Array;
}

declare class Help extends React.Component<DefaultProps> {
    // @ts-ignore
    render(): JSX.Element;
}

export default Help;