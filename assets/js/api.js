
async function fetchProfileData() {
    const url = 'https://Guilh3rm3Maci3l.io/Portfolio/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
