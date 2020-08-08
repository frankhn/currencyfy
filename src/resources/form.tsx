import React from "react";
import { Row, Col, InputGroup, InputGroupText, Input } from 'reactstrap'
import ReactFlagsSelect from "react-flags-select";
import Select from 'react-select'

interface Initial {
    countryA: string
    countryB: string
    amountA: number
    amountB: number
}

export interface IformProps {
    initial: Initial
    change: React.ChangeEventHandler
};


const form: React.FC<IformProps> = (props: IformProps) => {

    const options = [
        {
            value: "",
        label: `<span><i className="france flag"></i> European EUROS</span>`
        }
    ]

    return (
        <Row>
            <Col>
                <Select
                    options={ options } />
                {/* <InputGroup>
                    <InputGroupText>
                        <Select
                        options={options} />
                    </InputGroupText>
                    <Input
                        name="amountA"
                        placeholder="amount"
                        onChange={ props.change }
                        defaultValue={ props.initial.amountA }
                        type="number"
                        className="amount" />
                </InputGroup> */}
            </Col>
            <Col>
                <InputGroup>
                    <InputGroupText>
                        <ReactFlagsSelect
                            defaultCountry={ props.initial.countryB } />
                    </InputGroupText>
                    <Input
                        name="amountB"
                        placeholder="amount"
                        defaultValue={ props.initial.amountB }
                        onChange={ props.change }
                        type="number"
                        className="amount" />
                </InputGroup>
            </Col>
        </Row>
    );
}

export default form;