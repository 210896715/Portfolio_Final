async function fetchProfileData (){
    const url = 'https://raw.githubusercontent.com/210896715/js-developer-portfolio/refs/heads/patch-1/data/profile.json';
    const fetching = await fetch(url)
    return await fetching.json()

}


