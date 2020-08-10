import React, { Fragment } from "react";
import { Row, Col, InputGroup, InputGroupText, Input } from 'reactstrap'
import ReactFlagsSelect from "./currencies/index";

interface Initial {
    baseCurrency: string
    countryB: string
    amountA: number
    amountB: number
}

export interface IformProps {
    initial: Initial
    change: React.ChangeEventHandler
    countryChange: any
    baseCountry: any
};


const form: React.FC<IformProps> = (props: IformProps) => {

    
    return (
        <div className="form-wrapper">
            <Row>
            <Col>
            <InputGroup>
                    <InputGroupText>
                        <ReactFlagsSelect
                            defaultCountry={ props.initial.baseCurrency } 
                            onSelect={props.baseCountry}/>
                    </InputGroupText>
                    <Input
                        name="amountA"
                        placeholder="amount"
                        defaultValue={ props.initial.amountA }
                        onChange={ props.change }
                        type="number"
                        className="amount" />
                </InputGroup>
            </Col>
            </Row>
            <Row className="form-wrapper--second">
            <Col>
                <InputGroup>
                    <InputGroupText>
                        <ReactFlagsSelect
                            defaultCountry={ props.initial.countryB }
                            onSelect={props.countryChange } />
                    </InputGroupText>
                    <Input
                        name="amountB"
                        placeholder="amount"
                        disabled={true}
                        value={props.initial.amountB}
                        onChange={ props.change }
                        type="number"
                        className="amount" />
                </InputGroup>
            </Col>
        </Row>
        </div>
    );
}

export default form;