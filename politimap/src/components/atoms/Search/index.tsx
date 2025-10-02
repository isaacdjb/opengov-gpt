import { useState, type ChangeEvent, type ReactNode } from "react";
import * as S from './style'
import Button from "../Button";
import { ArrowRight } from "lucide-react";

export interface SearchProps {
    placeholder: string,
    button?: ReactNode,
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
    onSearch: (value: string) => any
}

export const Search = (props: SearchProps) => {
    const [searchQuery, setSearchQuery] = useState('');

    const onQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        if (props.onChange) props.onChange(e);
    }

    return (
        <S.SearchCard>
            <S.SearchContent>
                <S.SearchInput onChange={onQueryChange} placeholder={props.placeholder} />
                <Button onClick={() => props.onSearch(searchQuery)}>{props.button ?? <ArrowRight size={20} />}</Button>
            </S.SearchContent>
        </S.SearchCard>
    )
}
