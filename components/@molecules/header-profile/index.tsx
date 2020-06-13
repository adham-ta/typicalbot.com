import React from 'react';

type Props = {
    url: string
}

const HeaderProfile: React.FC<Props> = ({ url }) => (
    <React.Fragment>
        <img src={url} className="profile" />
        <style jsx>{`
            .profile {
                border-radius: 50%;
                display: inline-block;
                vertical-align: middle;
                margin-right: 0.2em;
            }
        `}</style>
    </React.Fragment>
)

export default HeaderProfile;
