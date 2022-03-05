import configs from '../configs/vars'

const TOKEN_EXCLUSION = ['WETH']
const PRIORITY = 'ETH'

export async function getSlug(collectionToken) {

    let slug,res;
    try{
        res = await fetch(configs.opensea.uri + `api/v1/assets?asset_contract_address=${collectionToken}&limit=1`)
    }
    catch (e){}

    if(res){
        res = await res.json()
        
        if(res?.assets){
            if(res.assets.length > 0){
                return res.assets[0].collection?.slug;
            }
        }
    }

    return slug;
}

export async function getStats(slug) {

    let stats, res;
    
    try{
        res = await fetch(configs.opensea.uri + `collection/${slug}`);;
    }
    catch (e){}

    if(res?.ok){
        res = await res.json();

        let symbol, usd, paymentTokens, image;
        
        paymentTokens = res.collection.payment_tokens.filter(x=> !TOKEN_EXCLUSION.includes(x.symbol));

        var token = paymentTokens.find(x=>x.symbol == PRIORITY);
        if(!token)
            token = paymentTokens[0];

        if(paymentTokens.length > 0)
        {
            symbol = token.symbol
            usd = parseFloat(token.usd_price)
            image = token.image_url
        }

        stats = {
            symbol: symbol,
            usd: parseFloat(usd) ?? 0,
            img: image,
            floorPrice: parseFloat(res.collection.stats.floor_price) ?? 0   
        }
    }


    return stats;
}


export async function getProfile(address) {

    let profile, res;
    
    try{
        res = await fetch(configs.opensea.uri + `user/${address}`);;
    }
    catch (e){}

    if(res?.ok){
        profile = await res.json();
    }

    return profile;
}