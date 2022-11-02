import React from 'react';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';
import Header from './Header';

const Layout = (props) => {
    //Add <h1> under {props.children} for a footer
    return (
        <Container>
            <Head>
                <link
                    async
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
                />
            </Head>

            <Header/>
            {props.children}
        </Container>
    );
};

export default Layout;