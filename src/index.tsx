import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState, OptionType } from './constants/articleProps';
import './styles/index.scss';
import styles from './styles/index.module.scss';

export interface IAllOptions {
	fontFamilyOption: OptionType;
	fontSizeOption: OptionType;
	fontColor: OptionType;
	backgroundColor: OptionType;
	contentWidth: OptionType;
}

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {

	const [pageState, setPageState] = useState<IAllOptions>(defaultArticleState);

	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': pageState.fontFamilyOption.value,
					'--font-size': pageState.fontSizeOption.value,
					'--font-color': pageState.fontColor.value,
					'--container-width': pageState.contentWidth.value,
					'--bg-color': pageState.backgroundColor.value,
				} as CSSProperties
			}>
           <ArticleParamsForm
			setPageState={setPageState}/>

			<Article/>
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
