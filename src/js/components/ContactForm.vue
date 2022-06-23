<template>
    <form action="" class="row g-2 g-md-3" :class="fullForm ? 'fullForm' : 'dividedForm'" @submit.prevent="submit">
        <div class="form-floating col-6" v-if="fullForm || !fullForm && step == 1">
            <input 
                type="text" 
                id="lastname"
                class="form-control" 
                :class="isValid('lastname')" 
                placeholder="Nom" 
                v-model="form.lastname"
                @input="verifyIsNotEmpty('lastname')"
            >
            <label for="lastname">Nom</label>
            <p class="invalid-feedback mb-0">{{errors.lastname}}</p>
        </div>
        <div class="form-floating col-6" v-if="fullForm || !fullForm && step == 1">
            <input 
                type="text" 
                id="firstname" 
                class="form-control" 
                :class="isValid('firstname')" 
                placeholder="Prénom" 
                v-model="form.firstname"
                @input="verifyIsNotEmpty('firstname')"
            >
            <label for="firstname">Prénom</label>
            <p class="invalid-feedback mb-0">{{errors.firstname}}</p>
        </div>

        <div class="form-floating" v-if="fullForm || !fullForm && step == 1">
            <input 
                type="email" 
                id="email" 
                class="form-control" 
                :class="isValid('email')" 
                placeholder="contact@yaniskocher.fr" 
                v-model="form.email"
                @input="verifyEmail"
            >
            <label for="email">Adresse email</label>
            <p class="invalid-feedback mb-0">{{errors.email}}</p>
        </div>

        <div class="form-floating" v-if="fullForm || !fullForm && step == 2">
            <input 
                type="text" 
                id="subject" 
                class="form-control" 
                :class="isValid('subject')" 
                placeholder="Sujet" 
                v-model="form.subject"
                @input="verifySubject"
            >
            <label for="subject">Sujet</label>
            <p class="invalid-feedback mb-0">{{errors.subject}}</p>
        </div>

        <div class="form-floating" v-if="fullForm || !fullForm && step == 2">
            <textarea 
                id="message" 
                class="form-control" 
                :class="isValid('message')" 
                placeholder="Ecrivez votre message..." 
                v-model="form.message"
                @input="verifyMessage"
            ></textarea>
            <label for="message">Ecrivez votre message...</label>
            <p class="invalid-feedback mb-0">{{errors.message}}</p>
        </div>

        <vue-recaptcha
            v-if="fullForm || !fullForm && step == 2"
            ref="recaptcha" 
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            @verify="verifyRecaptcha"
            @expired="verifyRecaptcha"
            :class="isValid('recaptcha')" 
        ></vue-recaptcha>
        <p class="invalid-feedback mb-0">{{errors.recaptcha}}</p>

        <div class="col-12" v-if="!fullForm && step == 1">
            <button type="button" class="btn btn-primary text-white fw-bold w-100" @click="checkFirstStep">Suivant</button>
        </div>

        <div class="col-12" v-if="fullForm || !fullForm && step == 2">
            <button type="submit" class="btn btn-primary text-white fw-bold w-100">Envoyer</button>
        </div>

        <div
            v-if="validation.type && validation.message"
            class="mt-3"
            :class="validationMessage()"
        >
            {{validation.message}}
        </div>
    </form>
</template>

<script>
import { VueRecaptcha } from 'vue-recaptcha';
import axios from 'axios';

export default {
    components: { 
        VueRecaptcha 
    },

    data() {
        return {
            form: {
                lastname: '',
                firstname: '',
                email: '',
                subject: '',
                message: '',
                recaptcha: ''
            },
            errors: {
                lastname: '',
                firstname: '',
                email: '',
                subject: '',
                message: '',
                recaptcha: ''
            },
            validation: {
                type: '',
                message: ''
            },
            step: 1,
            fullForm: false
        }
    },

    mounted() {
        let container = document.querySelector('#contact .container');
        let CIBlock = document.querySelector('#contact_informations');
        let _this = this;

        this.checkFullForm(_this, container, CIBlock)
        
        window.addEventListener('resize', () => {
            console.log('resize');
            this.checkFullForm(_this, container, CIBlock)
        });
    },

    methods: {
        checkFullForm(_this, container, CIBlock) {
            console.log(_this.$windowWidth);

            if(_this.$windowWidth < 768) {
                if((container.offsetHeight - CIBlock.offsetHeight) < 756) _this.fullForm = false;
                else _this.fullForm = true;
            }

            else {
                if(container.offsetHeight < 756) _this.fullForm = false;
                else _this.fullForm = true;
            }
        },

        submit() {
            for (const key in this.form) {
                if(this.form[key] === '' && key !== 'recaptcha') {
                    this.errors[key] = 'Champ obligatoire';
                }

                else if (this.form[key] === '' && key == 'recaptcha') {
                    this.errors[key] = 'Veuillez valider le captcha';
                }
            }

            for (const key in this.errors) {
                if(this.errors[key] !== '') {
                    return false;
                }
            }

            this.sendEmail();
        },

        checkFirstStep() {
            this.verifyIsNotEmpty('firstname');
            this.verifyIsNotEmpty('lastname');
            this.verifyEmail();
            this.verifyIsNotEmpty('email');

            if(
                this.errors.firstname == '' &&
                this.errors.lastname == '' &&
                this.errors.email == ''
            ) this.step = 2;
        },

        isValid(label) {
            if(this.form[label] !== '' && this.errors[label] === '') return 'is-valid';
            else if(this.errors[label] !== '') return 'is-invalid';
        },

        verifyIsNotEmpty(label) {
            if(this.form[label] !== '') this.errors[label] = '';
            else this.errors[label] = 'Champ obligatoire.';
        },

        verifyEmail() {
            if(this.form.email !== '' && !this.form.email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
                this.errors.email = 'Votre adresse email n\'est pas valide';
            } 
            else this.errors.email = '';
        },

        verifySubject() {
            if(this.form.subject !== '' && this.form.subject.length < 3) {
                this.errors.subject = 'Votre sujet doit contenir au moins 3 caractères';
            }
            else this.errors.subject = '';
        },

        verifyMessage() {
            if(this.form.message !== '' && this.form.message.length < 10) {
                this.errors.message = 'Votre message doit contenir au moins 10 caractères';
            }
            else this.errors.message = '';
        },

        verifyRecaptcha(value) {
            if(value) {
                this.form.recaptcha = value;
                this.errors.recaptcha = '';
            }

            else {
                this.form.recaptcha = "";
                this.errors.recaptcha = 'Veuillez valider le captcha';
            }
        },

        sendEmail() {
            axios.post('https://yaniskocher.fr/sendEmail.php', {form: this.form})
                .then(resp => {
                    this.validation.type = resp.data.type;
                    this.validation.message = resp.data.message;
                })
                .catch(error => {
                    console.log(error);
                });
        },

        validationMessage() {
            if(this.validation.type === 'success') {
                return 'alert alert-success';
            }
            else if(this.validation.type === 'error') {
                return 'alert alert-danger';
            }
        }
    }
}
</script>