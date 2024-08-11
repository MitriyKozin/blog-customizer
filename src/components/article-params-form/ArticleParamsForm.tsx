import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import  React, { useRef, useState, useEffect } from 'react';
import clsx from 'clsx';
import { Text } from '../text';
import { Select } from '../select';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';
import styles from './ArticleParamsForm.module.scss';
import { defaultArticleState, fontFamilyOptions, fontSizeOptions, fontColors, backgroundColors, contentWidthArr } from 'src/constants/articleProps';
import { IAllOptions } from 'src/index';

interface ArticleParamsFormProps {
	setPageState: React.Dispatch<React.SetStateAction<IAllOptions>>;
  }

const ArticleParamsForm: React.FC<ArticleParamsFormProps> = ({ setPageState }) => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const [formState, setFormState] = useState<IAllOptions>(defaultArticleState);
	const menuRef = useRef<HTMLDivElement>(null);

	function toggleOpen() {
	  setIsMenuOpen((oldVal) => !oldVal);
	}

	function setDefaultOptions() {
	  setFormState(defaultArticleState);
	  setPageState(defaultArticleState);
	}

	function submitForm(evt: React.SyntheticEvent) {
	  evt.preventDefault();
	  setPageState(formState);
	}

	useEffect(() => {
		if (!isMenuOpen) return;
	  function handleClickOutside(event: MouseEvent) {
		if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
		  setIsMenuOpen(false);
		}
	  }

	  document.addEventListener('mousedown', handleClickOutside);
	  return () => {
		document.removeEventListener('mousedown', handleClickOutside);
	  };
	}, [menuRef, isMenuOpen]);
	return (
		<>
			<ArrowButton toggleOpenFn={toggleOpen} openState={isMenuOpen} />
      <aside
        className={clsx({
          [styles.container]: true,
          [styles.container_open]: isMenuOpen,
        })}
        ref={menuRef}
      >
        <form className={styles.form} onSubmit={submitForm}>
          <Text as='h1' size={31} weight={800} uppercase dynamicLite>
            Задайте параметры
          </Text>
          <Select
            title='шрифт'
            selected={formState.fontFamilyOption}
            options={fontFamilyOptions}
            onChange={(selected) =>
              setFormState((oldState) => ({
                ...oldState,
                fontFamilyOption: selected,
              }))
            }
          />
          <RadioGroup
            title='размер шрифта'
            name='font-size'
            selected={formState.fontSizeOption}
            options={fontSizeOptions}
            onChange={(selected) =>
              setFormState((oldState) => ({
                ...oldState,
                fontSizeOption: selected,
              }))
            }
          />
          <Select
            title='цвет шрифта'
            selected={formState.fontColor}
            options={fontColors}
            onChange={(selected) =>
              setFormState((oldState) => ({ ...oldState, fontColor: selected }))
            }
          />
          <Separator />
          <Select
            title='цвет фона'
            selected={formState.backgroundColor}
            options={backgroundColors}
            onChange={(selected) =>
              setFormState((oldState) => ({
                ...oldState,
                backgroundColor: selected,
              }))
            }
          />
          <Select
            title='ширина контента'
            selected={formState.contentWidth}
            options={contentWidthArr}
            onChange={(selected) =>
              setFormState((oldState) => ({
                ...oldState,
                contentWidth: selected,
              }))
            }
          />
          <div className={styles.bottomContainer}>
            <Button title='Сбросить' type='reset' onClick={setDefaultOptions} />
            <Button title='Применить' type='submit' />
          </div>
        </form>
      </aside>
    </>
  );
};

export { ArticleParamsForm };