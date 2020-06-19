import React from 'react';
import Paragraph from 'components/@atoms/paragraph';

interface Props {
    year: number;
}

const FooterCopyrightNotice: React.FC<Props> = ({ year }) => (
    <Paragraph>Copyright &copy; {year} TypicalBot LLC. All rights reserved.</Paragraph>
);

export default FooterCopyrightNotice;
