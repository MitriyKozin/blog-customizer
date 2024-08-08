import arrow from 'src/images/arrow.svg';
import clsx from 'clsx';
import styles from './ArrowButton.module.scss';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

interface PropsArrowButton {
	toggleOpenFn: OnClick;
	openState: boolean;
}

export const ArrowButton = ({ toggleOpenFn, openState }: PropsArrowButton) => {
	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			onClick={toggleOpenFn}
			className={clsx({
				[styles.container]: true,
				[styles.container_open]: openState,
			})}>
			<img src={arrow} alt='иконка стрелочки' className={clsx({
					[styles.arrow]: true,
					[styles.arrow_open]: openState,
				})}/>
		</div>
	);
};
