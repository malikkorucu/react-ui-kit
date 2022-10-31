import React, { FC } from 'react';

interface TestProps {
    name: string;
}

const Test = (props: TestProps) => {
    return (
        <div>
            test test
            {props.name}
        </div>
    )
}

export default Test;