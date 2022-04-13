const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all'

const select = document.querySelector('.breeds')

fetch(BREEDS_URL)
    .then(res => {
        return res.json();
    })
    .then(data => {
        const breedsObject = data.message; // turn the message into an object
        const breedsArray = Object.keys(breedsObject) // turn object into an array
        for (let i=0; i<breedsArray.length; i++){
            const option = document.createElement('option') //<option></option>
            option.value = breedsArray[i] //<option value = 'breed'>
            option.innerText = breedsArray[i] // <option value = 'breed'>breed</option> - breed goes inside tags
            select.appendChild(option) // adds current <option> tag to the select box list of options
        }
    })

    select.addEventListener('change', event => {
        let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`
        getDogImg(url)
        dogInfo.assignMF()
        dogInfo.assignAge()
        dogInfo.assignLikes()
        dogInfo.assignDislikes()
        dogInfo.assignInfo()
    })

    const img = document.querySelector('.dog-img')

    const getDogImg = url => {
        fetch(url) // going to API url above
            .then(res => {
                return res.json(); // get JSON message back
            })
            .then(data => { 
                img.src = data.message //extract message from JSON and attach to img tag as new source
            })
    }


    const dogInfo = {
        fNames: ['Adele', 'Bambi', 'Sadie', 'Juicy', 'Punkin', 'Billie', 'Bailey', 'GiGi', 'Abby', 'Allie', 'Annie', 'Franie'],
        mNames: ['Duke','Finn','Apollo','Murphy','Oreo','Gunner','Henry','Simba','Echo'],
        likesList: ['Ice Water', 'Kisses', 'Snuggles', 'Sniffing Air', 'Sniffing Butts', 'Swimming'],
        dislikesList: ['Vaccums', 'Baths', 'Getting Groomed', 'Small Children', 'Thunder', 'Fireworks'],
        factList: ['Remembers every squirrel they\'ve ever seen', 'Wishes they knew how cars work', 'Can smell burgers from a mile away', 'Knows when the world will end'],
        MF: '',
        rname: '',
        likes: '',
        dislikes: '',
        fact: '',

        assignMF(){
            x = (Math.floor(Math.random() * 2 )== 0)
            if (x) {
                this.MF ='Female'
                this.assignName(this.fNames)
            } else{
                this.MF = 'Male'
                this.assignName(this.mNames)
            }
            document.getElementById('MF').innerHTML = `S: ${this.MF}`
        },

        assignName(array){
            this.rname = array[Math.floor(Math.random() * array.length)]
            document.getElementById("dog-name").innerHTML = `${this.rname}`
        },

        assignAge(){
            this.age = Math.floor(Math.random() * 16 + 1 )
            document.getElementById('age').innerHTML = `Age ${this.age}`
        },


        yatesShuffle(array){
            let m = array.length, t, i;
            //while there remain elements to shuffle
            while(m){
                //pick a remaining element...
                i = Math.floor(Math.random() * m--);
                //And swap it with the current element/
                t = array[m];
                array[m] = array[i];
                array[i] = t;
            }
    return array;
        },

        assignLikes(){
            this.likes = this.yatesShuffle(this.likesList).slice(0,2)
            document.getElementById('likes').innerHTML = `Likes: ${this.likes[0]}, ${this.likes[1]}`
        },

        assignDislikes(){
            this.dislikes = this.yatesShuffle(this.dislikesList).slice(0,2)
            document.getElementById('dislikes').innerHTML = `Dislikes: ${this.dislikes[0]}, ${this.dislikes[1]}`
        },

        assignInfo(){
            this.fact = this.factList[Math.floor(Math.random() * this.factList.length)]
            document.getElementById('fun-fact').innerHTML = `Additional Info: ${this.fact}`
        }

    }

