//Creates the about me section, needs buttons and such to compliment it
//Should be noted that while unusual for an onsite page editor, it's what I managed with my limitations.
const aboutMe = Vue.createApp({
    data() {
        return {
            Gender: 'Female',
            Age: 20,
            Birthday: '01/01/2002',
            About: 'Say something about yourself'
        }
    },
    methods: {
        swapGender() {
            Gender = 'Female'
        }
    }
})
aboutMe.mount('#aboutMe')
//Creates the vue object that alternates acc types (needs slight adjustment)
const profType = Vue.createApp({
    data() {
        return {
            AccType: 'Artist'
        }
    },
    methods: {
        SwitchAccType() {
            this.AccType = 'Non-Artist'
        }
    }
})
profType.mount('#profType')

const contactUs = Vue.createApp({
    data() {
        return {
            name: '',
            number:'',
            email:'',
            inquiry:'',
            poorInquiry: ''
        }
    },
    methods: {
        submission() {
            this.poorInquiry = this.inquiry.length < 150 ? '' : 'Please keep your inquiry clear and to the point.'
        }
    }
})
contactUs.mount('#contactUs')