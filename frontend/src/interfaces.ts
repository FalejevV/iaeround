import { Order } from "./enums";

export interface IToggle{
    toggle:boolean,
}

export interface ITag{
    clickable?: boolean,
    deletable?: boolean,
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
    likes: number,
    tags: string[],
    gpx: string,
    images: string[],
}

export interface ISearchFilter{
    searchInput: string,
    tags: string[],
    order: Order.NEW | Order.MOST_RATED,
}