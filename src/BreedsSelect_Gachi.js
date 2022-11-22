// DO NOT DELETE

import * as React from 'react'
import './App.css'
import { breedsEx } from './App'
import { App } from './App original'

export const BreedsSelect = 
({
	breedsEx,
	onChange,
	selected,
	placeholder,
	open,
	setopen
}) =>	{
	const [inputValue, setInputValue] = useState('');

	useEffect(() => {
		if(selected){
			setInputValue(breedsEx.find(o=>o.key === selected).value)
		}
	}, [selected, breedsEx])
	

	const onInputChange = (e) => setInputValue(e.target.value);

	const onItemSelected = (option) => {
		onChange !== undefined && onChange(option.key);
		onChange !== undefined && setInputValue(option.value);
		setopen(false);
	}

	const clearDropdown = () => {
		setInputValue("");
		onChange("");
	}

	const onInputClick = () => {
		setOpen(prevValue => !prevValue);
	}

	return(
		<div className='dropdown-container'>

			<div className = "input-container" onClick={onInputClick}>
				<input
					type = "text"
					value = {inputValue}
					placeholder = {props.placeholder}
					onChange = {onInputChange}
				/>
				<div className='input-arrow-container'>
					<i className='input-arrow' />
				</div>
				{selected || inputValue ? 
					(<div onclick={clearDropdown} className='input-clear-container'>x</div>)
					: null }
			</div>
			<div className={`dropdown ${open ? "visible" : ""}`}>
				{breeds.map(opt=>{
					return (
					<div 
						key="{opt.key}"
						onClick={()=>onItemSelected(opt)}
						className="option"
					>
						{opt.value}
					</div>
					);
				})}
			</div>

		</div>
	)
}





