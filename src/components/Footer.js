import React from 'react';
import {Container, Typography} from "@material-ui/core";

const Footer = () => {
    return (
        <Container style={{ textAlign: 'center', padding:'60px 0'}}>
            <Typography variant='subtitle1'>
                {"Copyright: "}
                <a href="https://github.com/elizzaveta/SeaCreatures" target='_blank'>
                    @elizzaveta
                </a>
            </Typography>
            <Typography variant='subtitle1'>
                <a href="https://www.behance.net/gallery/82852775/Vector-Illustrations" target='_blank'>
                    Illustrations
                </a>
            </Typography>
        </Container>
    );
};

export default Footer;