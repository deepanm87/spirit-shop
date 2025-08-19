export type GithubRepo = {
    id: number
    name: string
    full_name: string
    description: string
    stargazers_count: number
    forks_count: number
    topics: string[]
    owner: {
        login: string
        avatar_url: string
    }
    language: string
    updated_at: string
}

export type MagicalType = "fire" | "ice" | "electric" | "all"

export interface PotionType extends GithubRepo {
    potionEffect: string
    magicalType: MagicalType
}

export interface PotionGridProps {
    potions: PotionType[]
}

export interface PotionHeaderType {
    name: string
    owner: { login: string, avatar_url: string }
    size?: 'small' | 'medium'
}

export interface PotionInfoCardType {
    title: string
    children?: React.ReactNode
}

export interface PotionStatsType {
    stars: number
    forks: number
    classNames?: string
}

export interface PotionInfoType {
    potion: PotionType
}

export type PageType = {
    searchParams: Promise<{ type: string }>
}

export type MetadataParams = {
    params: Promise<{ slug: string}>
}