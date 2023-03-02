export interface IconProp{
    icon: string,
    altText: string,
    innerClass?: string,
    additionalClasses?: string

}

export interface TextProp{
    text: string,
    innerClass?: string,
    additionalClasses?: string
}

interface variation {
    value: number,
    increaseOrDecrease: string
}
export interface AssetCardProp{
    assetIcon: string,
    assetIconGradientColor: string,
    assetName: string,
    priceVariation: variation,
    price: string,
    tvl: string,
    pairList: string[]
}

export interface ValueWrapperProp{
    currentPrice: string,
    additionalClasses?: string
    variation?: variation
}

export interface PopularPairsProps{
    currencies: string[]
}