import React from 'react';
import Paragraph from 'components/@atoms/paragraph';

type Props = {
    year: number
}

const FooterCopyrightNotice: React.FC<Props> = ({ year }) => (
    <Paragraph>Copyright &copy; {year} Sylke LLC. All rights reserved.</Paragraph>
);

export default FooterCopyrightNotice;
