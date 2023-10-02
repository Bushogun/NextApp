import React from 'react'
import styles from './filter-categories.module.scss'
import { useAppSelector } from '@/redux/hooks';
import { capitalizeText } from '@/utils/string-utils';

export const Categories = () => {
    const categories = useAppSelector(state => state.productReducer.categories);

    if (categories.length === 0) {
        return null;
    }

    return (
        <div className={styles.radio_input}>
            {categories.map((category, index) => (
                    <React.Fragment key={index}>
                    <input
                        value={category}
                        name="category-radio"
                        id={`category-${index + 1}`}
                        type="radio"
                    />
                    <label htmlFor={`category-${index + 1}`}>{capitalizeText(category)}</label>
                    </React.Fragment>
                ))}
        </div>
    )
}