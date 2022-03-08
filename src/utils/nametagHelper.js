//https://nametag.org/api/nametags/get-by-name?&name={name}&isSsr=false
//https://nametag.org/api/nametags/get-by-address?publicAddress={addr}
import configs from '../configs/vars'


export async function getProfile(address){
    let tag = await getActiveTag(address);
    if(!tag) return;

    let res, profile;
    
    try{
        res = await fetch(configs.nametag.uri + `get-by-name?&name=${tag}&isSsr=false`);
    }
    catch (e){}

    if(res?.ok){
        profile = await res.json();
        console.log(profile)
    }

    return profile;
}

async function getActiveTag(address) {

    let tag, res, profile;
    
    try{
        res = await fetch(configs.nametag.uri + `get-by-address?publicAddress=${address}`);
    }
    catch (e){}

    if(res?.ok){
        profile = await res.json();
        if(profile.activeNametagId){
            tag = profile.nametags.find(x=>x.id == profile.activeNametagId);
        }
    }

    return tag.name;
}