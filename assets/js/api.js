
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/Guilh3rm3Maci3l/Portfolio/main/assets/js/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
