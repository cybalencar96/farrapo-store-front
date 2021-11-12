import {
    SingleFilterBox,
    ClosedFilterBox,
    OptionsBox,
    ApplyButton,
} from "./SearchOptionBoxStyle";
import { updateFilters } from "../../pages/SearchItems/SearchItemsFunction";
import { removeSpecialCharacters } from "../../../utils/stringsUtils";
import { BsChevronDown } from "react-icons/bs";
import { useState } from "react";
import { toggleOptionCheckbox } from "./SearchOptionBoxFunctions";
import { useNavigate } from "react-router";

function SearchFilterBox({ title, buttonType, filterType, isActive, options, selectedFilters, boxOnClick }) {
    const selectedOptions = selectedFilters[filterType];
    const lowerCaseSelectedOptions = typeof (selectedOptions) === "string" ?
        selectedOptions.toLowerCase() :
        selectedOptions.map(option => option.toLowerCase());
    const [areCheckBoxOptionsChecked, setAreCheckBoxOptionsChecked] = useState(
        options.map((option) =>
            lowerCaseSelectedOptions.includes(removeSpecialCharacters(option).toLowerCase())
        )
    );
    const filtersToBeApplied = {
        type: filterType,
        names: buttonType === "check" ?
            options.filter((option, index) => areCheckBoxOptionsChecked[index]) :
            options.filter((option, index) => areCheckBoxOptionsChecked[index])[0]
    };
    const navigate = useNavigate();

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
                                type={buttonType === "radio" ? "radio" : "checkbox"}
                                name={title}
                                onChange={() => toggleOptionCheckbox(areCheckBoxOptionsChecked, setAreCheckBoxOptionsChecked, buttonType, index)}
                                checked={areCheckBoxOptionsChecked[index]}
                            />
                            <label>{optionTitle}</label>
                        </div>
                    ))}
                    <ApplyButton onClick = { () => updateFilters(filtersToBeApplied, selectedFilters, navigate, boxOnClick)}>
                        Aplicar
                    </ApplyButton>
                </OptionsBox>
            : ""}
        </SingleFilterBox>
    );
}

function SearchOrderingBox({ title, filterType, isActive, options, selectedFilters, boxOnClick }) {
    const selectedOption = selectedFilters[filterType];
    const possibleOptions = options.map(option => removeSpecialCharacters(option).toLowerCase());
    const optionsIndex = possibleOptions.indexOf(selectedOption);
    const filterToBeApplied = (optionTitle) => {
        return ({
            type: filterType,
            names: removeSpecialCharacters(optionTitle).toLocaleLowerCase()
        });
    };
    const navigate = useNavigate();
    
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
                            <span onClick={() => updateFilters(filterToBeApplied(optionTitle), selectedFilters, navigate, boxOnClick)} >
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