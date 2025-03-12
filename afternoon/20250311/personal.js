const personalInfo = {
    name: '이효석',
    age: `Don't ask this:)`,
    email: 'xenosign@naver.com',
};

const jobInfo = {
    position: '코딩강사',
    experience: '?년',
};
const infor = { ...personalInfo, ...jobInfo, addr: '서대문구' };
const { name, age, email, position, experience, addr } = infor;
console.log('이름:', name);
console.log('나이:', age);
console.log('이메일:', email);
console.log('직책:', position);
console.log('경력:', experience);
console.log('지역:', addr);

const locationOne = {
    country: 'Korea'
};

const locationTwo = {
    country: 'Korea'
};

console.log(locationOne === locationTwo);
const jsonlocation1 = JSON.stringify(locationOne);
const jsonlocation2 = JSON.stringify(locationTwo);
console.log(jsonlocation1);
console.log(jsonlocation2);
console.log(jsonlocation1 === jsonlocation2);