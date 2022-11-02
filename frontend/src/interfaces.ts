import { Order } from "./enums";

export interface IToggle{
    toggle:boolean,
}

export interface IFilledOk{
    toggle:boolean,
    ok:boolean,
}

export interface ITag{
    clickable?: boolean,
    deletable?: boolean,
    chosen?: boolean
}

export interface ISearchView{
    extended?: boolean,
}

export interface IRoute{
    id: string,
    title: string,
    date: string,
    distance: number,
    time: number,
    likes: string[],
    tags: string[],
    gpx: string,
    images: string[],
}

export interface ISearchFilter{
    searchInput: string,
    tags: string[],
    order: Order.NEW | Order.MOST_RATED,
}
