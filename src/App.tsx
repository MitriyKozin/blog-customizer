// import { createRoot } from 'react-dom/client';
// import { StrictMode, CSSProperties, useState } from 'react';
// // import { defaultArticleState, IAllOptions } from './constants/articleProps';
// import './styles/index.scss';
// import styles from './styles/index.module.scss';
// import { ArticleParamsForm } from './components/article-params-form';
// import { Article } from './components/article';

// const domNode = document.getElementById('root') as HTMLDivElement;
// const root = createRoot(domNode);

// const App = () => {
// //   const [pageState, setPageState] = useState<IAllOptions>(defaultArticleState);

//   return (
//     <div
//       className={styles.main}
//       style={{
//         '--font-family': pageState.fontFamilyOption.value,
//         '--font-size': pageState.fontSizeOption.value,
//         '--font-color': pageState.fontColor.value,
//         '--container-width': pageState.contentWidth.value,
//         '--bg-color': pageState.backgroundColor.value,
//       } as CSSProperties}
//     >
//       <ArticleParamsForm setPageState={setPageState} />
//       <Article />
//     </div>
//   );
// };

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );