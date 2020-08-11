import React from "react";
import FormInput from './formInput'

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
    const initialBase = {
        currency: props.initial.baseCurrency,
        amount: props.initial.amountA
    }
    const initialConvert = {
        currency: props.initial.countryB,
        amount: props.initial.amountB.toFixed(3)
    }
    return (
        <div className="form-wrapper">
            <FormInput
                initial={initialBase}
                change={props.change}
                countrySelect={props.baseCountry} />
            <FormInput
                initial={initialConvert}
                change={props.change}
                disabled={true}
                countrySelect={props.countryChange}
                class="form-wrapper--second" />
        </div>
    );
}

export default form;
