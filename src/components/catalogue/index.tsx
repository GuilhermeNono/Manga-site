import React from 'react';

import { Container, Previous, Cards, Card, Next } from './styles';

const Catalogue: React.FC = () => {
  return (
    <Container>

        <Previous>P</Previous>

        <Cards>
            <Card>1</Card>
            <Card>2</Card>
            <Card>3</Card>
            <Card>4</Card>
            <Card>5</Card>
            <Card>6</Card>
            <Card>7</Card>
            <Card>8</Card>
            <Card>9</Card>
            <Card>10</Card>
        </Cards>

        <Next>N</Next>
    </Container>
  );
}

export default Catalogue;