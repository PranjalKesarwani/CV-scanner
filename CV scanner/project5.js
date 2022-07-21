console.log('This is project 5');


//Pretend that the data is coming from the api
//Array of objects which contains information about the candidates
const data = [
    {
        name: 'Pranjal Kesarwani',
        age: 23,
        city: 'Prayagraj',
        language: 'Javascript',
        image: 'https://randomuser.me/api/portraits/thumb/men/75.jpg',
    },
    {
        name: 'Rohan Das',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        image: 'https://randomuser.me/api/portraits/thumb/men/74.jpg',
    },
    {
        name: 'Shubham Kesarwani',
        age: 26,
        city: 'Prayagraj',
        language: 'C++',
        image: 'https://randomuser.me/api/portraits/thumb/men/73.jpg',
    },
    {
        name: 'Sachin Kesarwani',
        age: 29,
        city: 'Prayagraj',
        language: 'Java',
        image: 'https://randomuser.me/api/portraits/thumb/men/72.jpg',
    },
    {
        name: 'Utsav Kesarwani',
        age: 17,
        city: 'Prayagraj',
        language: 'Django',
        image: 'https://randomuser.me/api/portraits/thumb/men/71.jpg',
    }
]

//Making CV iterator which will help us to go through every profile
function cvIterator(profile) {
    let nextIndex = 0;

    return {
        next: function () {
            if (nextIndex < profile.length) {

                return {
                    value: profile[nextIndex++],
                    done: false
                }
            }
            else {
                return {
                    done: true
                }
            }

        }
    }

}

const cv = cvIterator(data);

// function showProfile() {
//     console.log(cv.next().value);
// }

const next = document.getElementById('next');
next.addEventListener('click', nextCV);
nextCV();
function nextCV() {
    // console.log('Why did you hit me bitch!');
    // showProfile();

    const currentCandidate = cv.next().value;

    let image = document.getElementById('image');
    let profile = document.getElementById('profile');

    if (currentCandidate != undefined) {  //***yha dekho undefined ka kitne acche tarah se use kiya hai
        image.innerHTML = `<img src = '${currentCandidate.image}'>`  //*****ye dekh lo image kaise daalni hai html pe important hai ye

        profile.innerHTML = `<ul class="list-group">
                                <li class="list-group-item">Name of candidate: ${currentCandidate.name}</li>
                                <li class="list-group-item">Age: ${currentCandidate.age}</li>
                                <li class="list-group-item">City: ${currentCandidate.city}</li>
                                <li class="list-group-item">Programming language : ${currentCandidate.language}</li>
                        </ul>`
    }

    else {
        alert(`End of applications!`); //alert pop-up aega
        window.location.reload();  //*********alert aane pr ok pr click kroge toh window reload kr dega
    }




}

