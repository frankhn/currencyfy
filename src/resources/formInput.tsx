import React from "react";
import { Row, Col, InputGroup, InputGroupText, Input } from 'reactstrap'
import ReactFlagsSelect from "./currencies/index";

interface Initial {
    currency: string
    amount: any
}

export interface IformProps {
    initial: Initial
    change: React.ChangeEventHandler
    countrySelect: any
    class?: string
    disabled?: boolean
};


const form: React.FC<IformProps> = (props: IformProps) => {

    return (
        <Row className={props.class || ''}>
            <Col>
                <InputGroup>
                    <InputGroupText>
                        <ReactFlagsSelect
                            defaultCountry={props.initial.currency}
                            onSelect={props.countrySelect} />
                    </InputGroupText>
                    <Input
                        name="amountA"
                        placeholder="amount"
                        defaultValue={props.initial.amount}
                        onChange={props.change}
                        value={props.initial.amount }
                        type="number"
                        disabled={props.disabled || false }
                        className="amount" />
                </InputGroup>
            </Col>
        </Row>
    );
}

export default form;