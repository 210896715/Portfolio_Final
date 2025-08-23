

function updateProfileInfo(profileData){

    const photo = document.getElementById('profile-photo')
    photo.src = profileData.photo
    photo.alt = profileData.name


    const name = document.getElementById('profile-name')
    name.innerText = profileData.name

    const pessoa = document.getElementById('profile-pessoa')
    pessoa.innerText = profileData.pessoa

    const localizacao = document.getElementById('profile-localizacao')
    localizacao.innerText = profileData.localizacao

    const celular = document.getElementById('profile-celular')
    celular.innerText = profileData.celular
    celular.href = `tel:${profileData.celular}`

    const email = document.getElementById('profile-email')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`


}

function updateSoftSkills(profileData){
    const softSkills = document.getElementById('profile.skills.softSkills')

    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateHardSkills(profileData){
    const hardSkills = document.getElementById('profile.skills.hardSkills')

    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill =>
         `<li> <img src = "${skill.logo}" alt = "${skill.name}" title = "${skill.name}" > </li>` ).join('')
}

(async () => {

    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
})()