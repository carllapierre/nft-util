const ACCEPTED_CONTRACTS = ['ERC721', 'ERC1155']
const LIMIT = 500;

export async function getAllNFTS(getNFTBalances, address) {
    let allResults = []
    let results = await getNFTBalances({ params: { address : address }});
    allResults = [...(results.result)]

    for (let count = LIMIT; count < results.total; count += LIMIT){
         let nextResults = await getNFTBalances({ params: { address: address, offset: count}});
         allResults= [...allResults, ...nextResults.result]
    }

    return allResults;
}

export function getDistinctCollections(response) {
    var total = 0;
    var disctinctCollections = []

    response = response.filter(x=> ACCEPTED_CONTRACTS.includes(x.contract_type))

    for(let nft of response){
        let collectionIndex = disctinctCollections.findIndex(x=> x.token == nft.token_address)

        if(collectionIndex == -1)
        {
            let collection = {
                token: nft.token_address,
                total: 1
            }
            disctinctCollections.push(collection)
        }else
        {
            disctinctCollections[collectionIndex].total =  disctinctCollections[collectionIndex].total+1
        }
        total = total+1
    }
    return {distinct: disctinctCollections, total: total}
}