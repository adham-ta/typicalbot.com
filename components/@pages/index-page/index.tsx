import React from 'react';
import Layout from 'components/@organisms/layout';
import Hero from 'components/@organisms/hero';
import HappyCustomer from 'components/@organisms/happy-customer';

const IndexPage: React.FC = () => (
    <Layout>
        <Hero title="Start your Discord community off right!" subtitle="TypicalBot seamlessly helps you and your moderators moderate your community and entertains your members." image="/img/hero.png" />
        <HappyCustomer image="https://via.placeholder.com/255x319?text=255x319" quote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis modi debitis veritatis ut doloremque, itaque voluptatum et rem voluptate vel deserunt. Nisi minima aliquid officiis quidem tenetur officia non cumque?" author="Tyler" server="Enderverse" />
    </Layout>
);

export default IndexPage;
