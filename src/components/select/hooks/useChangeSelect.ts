import { OptionType } from 'src/constants/articleProps';
import { useState } from 'react';

export const useChangeSelect =(
	initialValue: OptionType
):[OptionType, (select: OptionType) => void] => {
	const [option, setOption] = useState<OptionType>(initialValue);

	function changeOption(select: OptionType) {
		setOption(select);
	}
	
    return [option, changeOption];
};


