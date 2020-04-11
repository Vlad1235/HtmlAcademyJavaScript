// заменяем стандартную конкатенацию более продвинутым способом
const name = 'Anna'
const country = 'Canada'
const age = 33
const educations = ['master','bachelor']

log('Name: ' + name + ' Country' + country + ' age' + age)
log('Name ${name} Country ${country} age ${age} education ${educations.length}') // тот же самый результат
