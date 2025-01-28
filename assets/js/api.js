
async function fetchProfileData() {
    const url = 'https://github.com/Guilh3rm3Maci3l/Portfolio/main/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
