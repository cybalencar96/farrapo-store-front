import {
    SingleFilterBox,
    ClosedFilterBox,
    OptionsBox,
    ApplyButton,
} from "./SearchOptionBoxStyle";
import { BsChevronDown } from "react-icons/bs";
import { useState } from "react";
import { toggleOptionCheckbox } from "./SearchOptionBoxFunctions";

function SearchFilterBox({ title, type, isActive, options, selectedOptions, boxOnClick }) {
    const lowerCaseSelectedOptions = typeof (selectedOptions) === "string" ?
        selectedOptions.toLowerCase() :
        selectedOptions.map(option => option.toLowerCase());
    const [areCheckBoxOptionsChecked, setAreCheckBoxOptionsChecked] = useState(options.map((option) => lowerCaseSelectedOptions.includes(option.toLowerCase())));

    return (
        <SingleFilterBox>
            <ClosedFilterBox isActive = {isActive} onClick = {boxOnClick}>
                {title} <BsChevronDown />
            </ClosedFilterBox>
            {isActive ?
                <OptionsBox>
                    {options.map((optionTitle, index) => (
                        <div key={'filterOption' + index}>
                            <input
                                type={type === "radio" ? "radio" : "checkbox"}
                                name={title}
                                onChange={() => toggleOptionCheckbox(areCheckBoxOptionsChecked, setAreCheckBoxOptionsChecked, type, index)}
                                checked={areCheckBoxOptionsChecked[index]}
                            />
                            <label>{optionTitle}</label>
                        </div>
                    ))}
                    <ApplyButton>
                        Aplicar
                    </ApplyButton>
                </OptionsBox>
            : ""}
        </SingleFilterBox>
    );
}

function SearchOrderingBox({ title, isActive, options, selectedOption, boxOnClick }) {
    const possibleOptions = ["menor-preco", "mais-recente", "maior-preco", "menos-recente"];
    const optionsIndex = possibleOptions.indexOf(selectedOption);
    
    return (
        <SingleFilterBox>
            <ClosedFilterBox isActive = {isActive} onClick = {boxOnClick}>
                {optionsIndex === -1 ? title : options[optionsIndex]}
                <BsChevronDown />
            </ClosedFilterBox>
            {isActive ?
                <OptionsBox>
                    {options.map((optionTitle, index) => (
                        <div key={'filterOption' + index}>
                            <span
                                onClick={() => console.log("To be implemented")}
                            >
                                {optionTitle}
                            </span>
                        </div>
                    ))}
                </OptionsBox>
            : ""}
        </SingleFilterBox>
    );
}

export {
    SearchFilterBox,
    SearchOrderingBox
}