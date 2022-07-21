import React from 'react';

type HeaderProps = {
    mainText: string,
    subText: string
}

function Header({ mainText, subText }: HeaderProps) {
    return (
        <div>
            <h1>{mainText}</h1>
            <h3>{subText}</h3>
        </div>
    )
}

export default Header