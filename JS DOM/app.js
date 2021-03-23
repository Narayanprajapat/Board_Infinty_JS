// Lorem Text
let loremText = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisque in tempor lacus, non placerat urna. Maecenas erat nisl, quismod eu urna at, vulputate valupat mi. Morbi ullamcorper augue quis ullamcorper maximus. Donec eu euismod diam, at tristique dolor. Aliquam est nunc, bibendum ut sodales eget, feugiat et nunc. Nullam eu odio cursus, iaculis tellus non, ultrices nibh. Aliquam velit eros pharetra non purus vel, fermentum condimentum lectus. Donec nec ornare libero, ac lacinia tellus
`;

//
//
//

let body = document.getElementsByTagName('body');
let divHead = document.createElement('div');
divHead.setAttribute('class', 'divHead');
document.body.appendChild(divHead);

// Creation
let image = document.createElement('img');
// Set Properties
image.setAttribute('src', './dom.jpg');
image.setAttribute('class', 'image');
// Append
divHead.appendChild(image);

// Creation
let divName = document.createElement('div');
// Set Properties
divName.setAttribute('class', 'name');
divName.textContent = 'Narayan Prajapat';
// Append
divHead.appendChild(divName);

// Creation
let div = document.createElement('div');
div.setAttribute('class', 'div');
divHead.appendChild(div);

//
// Creation
let p = document.createElement('p');
p.setAttribute('class', 'p_contact');
p.textContent = 'Varanasi India | +919140780963 | dummyemail.com | www.domain.com';
divHead.appendChild(p);
//
//

// Creaton
let hr = document.createElement('hr');
hr.setAttribute('class', 'hr');
divHead.appendChild(hr);

//
// Div For All Skill And Education
let divSkillEdu = document.createElement('div');
divSkillEdu.setAttribute('class', 'mainHeadSkill');
//
//
// Div For Left Side Education Detail
let leftSide = document.createElement('div');
leftSide.setAttribute('class', 'leftSide');

// Profile Section
let skill = document.createElement('div');
skill.setAttribute('class', 'skill');
let profile = document.createElement('div');
profile.setAttribute('class', 'profile');
let iconP = document.createElement('div');
iconP.setAttribute('class', 'fa fa-user icon');
let profileText = document.createElement('p');
profileText.textContent = 'Profile';

let skillPara = document.createElement('p');
skillPara.setAttribute('class', 'skillPara');
skillPara.textContent = `I am a full stack developer with strong fundamentals of Python and JS with hands on experience on Django, Bootstrap and MERN. `;
//
profile.appendChild(iconP);
profile.appendChild(profileText);
skill.appendChild(profile);
skill.appendChild(skillPara);
leftSide.appendChild(skill);
console.log(skill);
//

// Skill

let tech = document.createElement('div');
tech.setAttribute('class', 'techA');
let techSkill = document.createElement('div');
techSkill.setAttribute('class', 'techB');
let iconS = document.createElement('div');
iconS.setAttribute('class', 'fa fa-flask iconF');
let skillText = document.createElement('p');
skillText.textContent = 'Skills';
// Ele
techSkill.appendChild(iconS);
techSkill.appendChild(skillText);
// Append Technicla
tech.appendChild(techSkill);
leftSide.appendChild(tech);

//Technicle Skill
let js = document.createElement('div');
js.setAttribute('class', 'jsA');
let jsHead = document.createElement('div');
jsHead.setAttribute('class', 'jsB');
jsHead.textContent = 'Technical Skills';
let jScript = document.createElement('div');
jScript.setAttribute('class', 'jsC');
let jsp = document.createElement('p');
jsp.setAttribute('class', 'javaScript');
jsp.textContent = 'Javascript';
let rangeInp = document.createElement('input');
rangeInp.setAttribute('class', 'input');
rangeInp.setAttribute('type', 'range');

//
jScript.appendChild(jsp);
jScript.appendChild(rangeInp);

js.appendChild(jsHead);
js.appendChild(jScript);
leftSide.appendChild(js);

// Work Experience
let work = document.createElement('div');
work.setAttribute('class', 'workA');
let workE = document.createElement('div');
workE.setAttribute('class', 'workB');
let iconE = document.createElement('div');
iconE.setAttribute('class', 'fa fa-briefcase icon');
let exp = document.createElement('p');
exp.textContent = 'Work Experience';
let workText = document.createElement('p');
workText.textContent = `I have 3 years of experience as a freelance on codementor where i have worked on python assignments on a regular basis. I have 5 star rating from clients all across the globe. I have worked as a full time role for Coampany 1 and Company 2`;
//
work.appendChild(workE);
work.appendChild(workText);
workE.appendChild(iconE);
workE.appendChild(exp);
//
leftSide.appendChild(work);
//

// Company 1
let company1 = document.createElement('div');
company1.setAttribute('class', 'com1');
let companyH = document.createElement('p');
companyH.setAttribute('class', 'com2');
companyH.textContent = 'Company 1';
let loremL = document.createElement('p');
loremL.textContent = loremText;
loremL.setAttribute('class', 'com3');

company1.appendChild(companyH);
company1.appendChild(loremL);
leftSide.appendChild(company1);

// Div For Rigth Side Education Detail
let div_company = document.createElement('div');
div_company.setAttribute('class', 'rightSide');

// Div Company 2
let company2 = document.createElement('div');
let pCom2 = document.createElement('p');
pCom2.setAttribute('class', 'pCom');
pCom2.textContent = 'Company 2';
let lorem = document.createElement('p');
lorem.setAttribute('class', 'loremText');
lorem.textContent = loremText;
company2.appendChild(pCom2);
company2.appendChild(lorem);

//
div_company.appendChild(company2);

// Div Company 3
let company3 = document.createElement('div');
let pCom3 = document.createElement('p');
pCom3.setAttribute('class', 'pCom');
pCom3.textContent = 'Company 3';
let lorem1 = document.createElement('p');
lorem1.setAttribute('class', 'loremText');
lorem1.textContent = loremText;
company3.appendChild(pCom3);
company3.appendChild(lorem1);

//
div_company.appendChild(company3);

// IIT BHU
let companyE = document.createElement('div');
let pEdu = document.createElement('p');
pEdu.setAttribute('class', 'pCom');
pEdu.textContent = 'Education';
let pEduI = document.createElement('p');
pEduI.setAttribute('class', 'pCom');
pEduI.textContent = 'IIT-BHU';

let loremE = document.createElement('p');
loremE.setAttribute('class', 'loremText');
loremE.textContent = loremText;
companyE.appendChild(pEdu);
companyE.appendChild(pEduI);
companyE.appendChild(loremE);

div_company.appendChild(companyE);

// Div Head Append In Right Side Div

// console.log(company2);
// console.log(divName);

// Append Left Side
divSkillEdu.appendChild(leftSide);
// Append Right Side
divSkillEdu.appendChild(div_company);
// Whole Code Append
divHead.appendChild(divSkillEdu);
